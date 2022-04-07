import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsListResolver } from '@core/resolver/animals-list.resolver';
import { AnimalsDetailsComponent } from './animals-details/container/animals-details.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

const routes: Routes = [
  { path: '', component: AnimalsListComponent, resolve: { animals: AnimalsListResolver } },
  { path: ':animalId', component: AnimalsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
