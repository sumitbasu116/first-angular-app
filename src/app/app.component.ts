import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent,NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedId?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedId);
  }

  onSelectUser(id: string){
    this.selectedId=id;
  }
}
