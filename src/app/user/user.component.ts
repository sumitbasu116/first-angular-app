import { Component, signal , computed,Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  get imagePath(){
    return 'users/'+this.avatar;
  }

  onSelectButton(){
    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
