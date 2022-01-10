import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AuthService {
  private readonly url = 'http://locahost:3000/user/login';
  constructor(private http: HttpClient) { }

  authenticate(user: string, password: string): Observable<any> {
    const userObject = { username: user, password };
    return this.http.post(this.url, userObject);
  }
}
