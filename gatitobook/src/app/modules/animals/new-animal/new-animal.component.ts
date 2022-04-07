import { ToastrService } from 'ngx-toastr';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AnimalsService } from './../animals.service';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css'],
})
export class NewAnimalComponent implements OnInit {
  public animalForm!: FormGroup;
  public file!: File;
  public previewPhotoURL!: string;
  public percentage!: number;

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalsService,
    private router: Router,
    private snack: ToastrService
  ) {}

  ngOnInit(): void {
    this.animalForm = this.fb.group({
      file: ['', [Validators.required]],
      description: ['', [Validators.maxLength(300)]],
      allowComments: [true],
    });
  }

  public upload(): any {
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;
    const description = this.animalForm.get('description')?.value ?? '';
    this.animalService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['/'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentage = Math.round(100 * (event.loaded / total));
          }
        },
        (error: unknown) => {
          this.snack.error(
            'Ops :(',
            'Algo deu errado. Por favor, tente novamente mais tarde'
          );
          console.error(error);
        },
        () => {
          this.snack.success('Sucesso!', 'Animal cadastrado com sucesso');
        }
      );
  }

  public saveFile(fileInput: any): void {
    const [file] = fileInput?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) =>
      (this.previewPhotoURL = event.target.result);
    reader.readAsDataURL(file);
  }
}
