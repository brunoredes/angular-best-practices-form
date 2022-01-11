import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../../../core/interfaces/user';
import { NewUsersService } from './new-users.service';



@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  public newUserForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: NewUsersService) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', ],
      password: ['', [Validators.minLength(10)]]
    });
  }

  public createUser(): void {
    const newUser: User = this.newUserForm.getRawValue() as User;
    console.log(newUser);
    // this.userService.newUser(newUser);
  }

}
