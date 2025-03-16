import { Component, signal , computed,Input, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User
  @Input({required:true}) selected!:boolean
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'users/'+this.user.avatar;
  }

  onSelectButton(){
    this.select.emit(this.user.id);
  }
}
