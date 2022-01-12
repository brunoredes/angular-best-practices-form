import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '@shared/interfaces';
import { environment } from '@env';

@Injectable({
  providedIn: 'any'
})
export class NewUsersService {
  private readonly url = environment.url;
  constructor(private http: HttpClient) { }

  public newUser(user: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(`${this.url}/user/signup`, user);
  }

  public getDataFromUser(userName: string): Observable<NewUser> {
    return this.http.get<NewUser>(`${this.url}/user/exists/${userName}`);
  }
}
