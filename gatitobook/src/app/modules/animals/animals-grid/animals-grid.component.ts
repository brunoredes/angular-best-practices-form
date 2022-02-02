import { Animals } from '@models/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-grid',
  templateUrl: './animals-grid.component.html',
  styleUrls: ['./animals-grid.component.css']
})
export class AnimalsGridComponent implements OnInit {

  @Input() public animals!: Animals;
  constructor() { }

  ngOnInit(): void {
  }

}
