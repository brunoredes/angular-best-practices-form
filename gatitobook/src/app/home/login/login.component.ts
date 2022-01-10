import { AuthService } from './../../authentication/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string = '';
  public password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public login() {
    console.table({ user: this.user, password: this.password });
    this.authService.authenticate(this.user, this.password).subscribe(() => {
      console.log('auth successfully');
    }, (err) => {
      console.error({ err });
    });
  }

}
