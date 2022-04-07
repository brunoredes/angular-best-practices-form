import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { CommentsFormComponent } from './animals-details/components/comments/comments-form/comments-form.component';
import { CommentsComponent } from './animals-details/components/comments/comments.component';
import { CommentsService } from './animals-details/components/comments/comments.service';

import { AnimalsDetailsComponent } from './animals-details/container/animals-details.component';
import { AnimalsGridListComponent } from './animals-grid/components/animals-grid-list/animals-grid-list.component';
import { AnimalsGridPresentationComponent } from './animals-grid/components/animals-grid-presentation/animals-grid-presentation.component';
import { AnimalsGridComponent } from './animals-grid/container/animals-grid.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsService } from './animals.service';
import { AnimalComponent } from './components/animal/animal.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    AnimalsGridComponent,
    AnimalsDetailsComponent,
    CommentsComponent,
    CommentsFormComponent,
    AnimalsGridListComponent,
    AnimalsGridPresentationComponent,
    NewAnimalComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, SharedModule],
  providers: [AnimalsService, CommentsService, ToastrService],
})
export class AnimalsModule {}
