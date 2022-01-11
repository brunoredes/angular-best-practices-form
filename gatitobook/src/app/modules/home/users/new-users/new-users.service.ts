import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'any'
})
export class NewUsersService {
  private readonly url = environment.url;
  constructor(private http: HttpClient) { }

  public newUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/signup`, user);
  }

  public getDataFromUser(userName: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/exists/${userName}`);
  }
}
