import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from '@shared/models/types';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
})
export class AnimalsListComponent implements OnInit {
  public animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.animals = this.activatedRoute.snapshot.data['animals'];
    });
  }
}
