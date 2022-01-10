import { AuthService } from './../../../core/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  public login() {
    console.table({ user: this.user, password: this.password });
    this.authService.authenticate(this.user, this.password).subscribe(() => {
      this.route.navigate(['animals']);
    }, (err) => {
      console.error({ err });
    });
  }

}
