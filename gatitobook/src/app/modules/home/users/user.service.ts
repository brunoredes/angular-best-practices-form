import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

import { TokenService } from '@core/authentication/helpers/token.service';
import { User } from '@models/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});
  constructor(private tokenService: TokenService) {
    if (this.tokenService.haveToken()) {
      this.getTokenDataAndDecode();
    }
  }

  public returnUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  public saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.getTokenDataAndDecode();
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject.next({});
  }

  private isLogged(): boolean {
    return this.tokenService.haveToken();
  }

  private getTokenDataAndDecode(): void {
    const token = this.tokenService.getToken();

    const user: User = jwt_decode(token);
    this.userSubject.next(user);
  }
}
