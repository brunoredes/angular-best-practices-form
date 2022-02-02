import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '@core/authentication/helpers/token.service';
import { environment } from '@env';
import { Animals } from '@models/types';
import { Observable } from 'rxjs';
import { Animal } from './../../shared/models/interfaces/animals';



@Injectable({
  providedIn: 'any'
})
export class AnimalsService {
  private readonly url = environment.url;
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  private headers(): HttpHeaders {
    const token = this.tokenService.getToken()
    return new HttpHeaders().append('x-access-token', token);
  }

  public userList(username: string): Observable<Animals> {
    return this.http.get<Animals>(`${this.url}/${username}/photos`, { headers: this.headers() });
  }

  public getById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.url}/photos/${id}`, { headers: this.headers() });
  }
}
