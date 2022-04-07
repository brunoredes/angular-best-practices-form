import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, switchMap, tap } from 'rxjs';
import { AnimalPhotoComment, AnimalPhotoComments } from './comments';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments$!: Observable<AnimalPhotoComments>;
  @Input() animalId!: number;

  constructor(private commentService: CommentsService, private snack: ToastrService) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.getComment(this.animalId);
  }

  public saveComment(event: AnimalPhotoComment | any): void {
    this.comments$ = this.commentService
      .storeComment(this.animalId, event.text)
      .pipe(
        switchMap(() => this.commentService.getComment(this.animalId)),
        tap(() => {
          this.snack.success('Salvo com sucesso.', 'Comentário adicionado');
        })
      );
  }
}
