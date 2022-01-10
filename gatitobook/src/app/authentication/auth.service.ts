import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = `${environment.url}/user/login`;
  constructor(private http: HttpClient) { }

  public authenticate(user: string, password: string): Observable<any> {
    const userObject = { userName: user, password };
    return this.http.post(this.url, userObject);
  }
}
