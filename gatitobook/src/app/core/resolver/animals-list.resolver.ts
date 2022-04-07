import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '@models/interfaces';
import { Animals } from '@models/types';
import { UserService } from '@modules/home/users/user.service';
import { Observable, switchMap, take } from 'rxjs';
import { AnimalsService } from './../../modules/animals/animals.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalsListResolver implements Resolve<Animals> {
  // should load the animals list before the page being loaded
  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userService.returnUser().pipe(
      switchMap((user: User) => {
        const username = user.name ?? '';
        return this.animalsService.userList(username);
      }),
      take(1)
    );
  }
}
