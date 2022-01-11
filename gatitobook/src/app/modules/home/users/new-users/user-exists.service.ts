import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, Observable, switchMap } from 'rxjs';

import { NewUsersService } from './new-users.service';

@Injectable({
  providedIn: 'any'
})
export class UserExistsService {

  constructor(private http: HttpClient, private newUserService: NewUsersService) { }

  public userExists(): Function {
    return (control: AbstractControl): Observable<any> => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserService.getDataFromUser(userName)), // recebe o valor do primeiro fluxo, e espera como retorno outro observable
        map((userExistent) => userExistent ? { userExists: true } : null),
        first()
      );
    };
  }
}
