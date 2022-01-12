import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { TokenService } from '@core/authentication/helpers/token.service';
import { environment } from '@env';
import { Animals } from '@models/types';

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
}
