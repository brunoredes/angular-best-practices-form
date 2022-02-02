import { switchMap, Observable } from 'rxjs';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../home/users/user.service';
import { Component, OnInit } from '@angular/core';
import { Animals } from '@shared/models/types';


@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {

  public animals!: Observable<Animals>;

  constructor(private userService: UserService, private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.animals = this.userService.returnUser().pipe(
      switchMap((user) => {
        const username = user.name ?? '';
        return this.animalsService.userList(username);
      })
    );
  }

}
