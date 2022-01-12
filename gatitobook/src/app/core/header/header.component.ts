import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '@modules/home/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public user$ = this.userService.returnUser();
  constructor(private userService: UserService, private router: Router) { }

  public logout() {
    this.userService.logout();
    this.router.navigate(['home']);
  }

}
