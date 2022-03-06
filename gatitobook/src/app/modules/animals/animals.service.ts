import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Animals } from '@models/types';
import { Observable } from 'rxjs';
import { Animal } from './../../shared/models/interfaces/animals';

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
}
