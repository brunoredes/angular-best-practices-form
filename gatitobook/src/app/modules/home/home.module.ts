import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NewUsersComponent } from './users/new-users/new-users.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NewUsersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
