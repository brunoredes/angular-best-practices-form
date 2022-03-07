import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Animals } from '@models/types';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { Animal } from './../../shared/models/interfaces/animals';

const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'any',
})
export class AnimalsService {
  private readonly url = environment.url;
  constructor(private http: HttpClient) {}

  public userList(username: string): Observable<Animals> {
    return this.http.get<Animals>(`${this.url}/${username}/photos`);
  }

  public getById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.url}/photos/${id}`);
  }

  public deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${this.url}/photos/${id}`);
  }

  public like(id: number): Observable<boolean> {
    return this.http
      .post<boolean>(
        `${this.url}/photos/${id}/likes`,
        {},
        { observe: 'response' }
      )
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED
            ? of(false)
            : throwError(() => new Error(error));
        })
      );
  }
}
