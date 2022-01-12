import { Component, Input, OnInit } from '@angular/core';

import { environment } from '@env';

const API = environment.url;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input() public set url(url: string) {
    url.startsWith('data') ?
      this.originalUrl = url :
      this.originalUrl = `${API}/imgs/${url}`
  };
  public get url(): string {
    return this.originalUrl;
  }
  @Input() public description: any;
  private originalUrl = '';
  constructor() { }

  ngOnInit(): void {
  }

}
