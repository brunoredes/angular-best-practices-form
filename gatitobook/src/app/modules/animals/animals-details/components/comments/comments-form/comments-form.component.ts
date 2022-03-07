import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimalPhotoComment } from '../comments';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css'],
})
export class CommentsFormComponent implements OnInit {
  public commentForm!: FormGroup;

  @Output() formData: EventEmitter<AnimalPhotoComment | any> =
    new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  public sendForm(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.formData.emit({ text: comment });
    this.commentForm.reset();
  }
}
