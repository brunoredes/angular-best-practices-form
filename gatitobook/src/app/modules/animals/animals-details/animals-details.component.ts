import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '@shared/models/interfaces';
import { Observable } from 'rxjs';
import { AnimalsService } from './../animals.service';

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.css'],
})
export class AnimalsDetailsComponent implements OnInit {
  public animal!: Observable<Animal>;
  public animalId!: Animal['id'];
  constructor(
    private animalService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];

    this.animal = this.animalService.getById(this.animalId);
  }

  public like(): void {
    this.animalService.like(this.animalId).subscribe((like) => {
      if (like) {
        this.animal = this.animalService.getById(this.animalId);
      }
    });
  }

  public deletePhoto(): void {
    this.animalService.deleteAnimal(this.animalId).subscribe(
      () => this.router.navigate(['/animals/']),
      (error) => console.error(error)
    );
  }
}
