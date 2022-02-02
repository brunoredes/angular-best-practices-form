import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsDetailsComponent } from './animals-details/animals-details.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

const routes: Routes = [
  { path: '', component: AnimalsListComponent },
  { path: ':animalId', component: AnimalsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
