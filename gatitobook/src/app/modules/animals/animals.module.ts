import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalsGridComponent } from './animals-grid/animals-grid.component';
import { AnimalsDetailsComponent } from './animals-details/animals-details.component';
import { AnimalsService } from './animals.service';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    AnimalsGridComponent,
    AnimalsDetailsComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, SharedModule],
  providers: [AnimalsService],
})
export class AnimalsModule {}
