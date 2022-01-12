import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public getToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  public saveToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  public removeToken(): void {
    localStorage.removeItem(KEY);
  }

  public haveToken(): boolean {
    return !!this.getToken();
  }
}
