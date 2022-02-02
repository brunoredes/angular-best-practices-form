import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '@shared/models/interfaces';
import { Observable } from 'rxjs';
import { AnimalsService } from './../animals.service';

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.css']
})
export class AnimalsDetailsComponent implements OnInit {
  public animal!: Observable<Animal>
  public animalId!: Animal['id'];
  constructor(private animalService: AnimalsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];

    this.animal = this.animalService.getById(this.animalId);
  }

}
