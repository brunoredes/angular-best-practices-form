import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '@shared/interfaces/user';
import { environment } from '@env';
import { UserService } from './../http/users/user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = `${environment.url}/user/login`;
  constructor(private http: HttpClient, private userService: UserService) { }

  public authenticate(user: string, password: string): Observable<HttpResponse<User>> {
    const userObject = { userName: user, password };
    return this.http.post(this.url, userObject, {
      observe: 'response'
    }).pipe(
      tap(res => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken);
      })
    );
  }
}
