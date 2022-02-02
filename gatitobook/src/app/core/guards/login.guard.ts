import { UserService } from '@modules/home/users/user.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(private user: UserService, private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.user.isLogged()) {
        this.router.navigate(['animals']);
        return false;
      }
    return true;
  }
}
