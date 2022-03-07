import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { AnimalPhotoComment, AnimalPhotoComments } from './comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly url = environment.url;

  constructor(private http: HttpClient) {}
  public getComment(id: number): Observable<AnimalPhotoComments> {
    return this.http.get<AnimalPhotoComments>(
      `${this.url}/photos/${id}/comments`
    );
  }

  public storeComment(
    id: number,
    commentText: AnimalPhotoComment['text']
  ): Observable<AnimalPhotoComment> {
    return this.http.post<AnimalPhotoComment>(
      `${this.url}/photos/${id}/comments`,
      { commentText }
    );
  }
}
