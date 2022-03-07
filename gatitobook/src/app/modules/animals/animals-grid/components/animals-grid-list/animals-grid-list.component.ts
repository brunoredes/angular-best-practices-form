import { Animal } from '@shared/models/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-grid-list',
  templateUrl: './animals-grid-list.component.html',
  styleUrls: ['./animals-grid-list.component.css'],
})
export class AnimalsGridListComponent implements OnInit {
  @Input() public detail!: Animal;
  constructor() {}

  ngOnInit(): void {}
}
