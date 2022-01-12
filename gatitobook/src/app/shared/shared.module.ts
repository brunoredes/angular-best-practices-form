import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as fromComponents from './components';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [...fromComponents.components, CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
