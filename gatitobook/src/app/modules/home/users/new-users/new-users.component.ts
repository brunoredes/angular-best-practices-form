import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator, userEqualPasswordValidator } from '@shared/helpers/validators';
import { NewUser } from '@shared/interfaces';
import { NewUsersService } from './new-users.service';
import { UserExistsService } from './user-exists.service';



@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  public newUserForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: NewUsersService,
    private userExists: UserExistsService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [lowerCaseValidator], [this.userExists.userExists()]],
      password: ['', [Validators.minLength(12), Validators.required]]
    },
      { validators: [userEqualPasswordValidator] }
    );
  }

  public createUser(): void {
    if (this.newUserForm.valid) {
      const newUser: NewUser = this.newUserForm.getRawValue() as NewUser;
      this.userService.newUser(newUser).subscribe(
        (_) => this.route.navigate(['']),
        (error) => console.error(error)
      );

    }

  }

}
