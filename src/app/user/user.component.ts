import { Component, signal , computed,Input,input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  avatar = input<string>();
  name = input.required<string>();
  imagepath = computed(()=>{
    return 'users/'+this.avatar();
  });
  // get imagePath(){
  //   return 'users/'+this.avatar;
  // }

  onSelectButton(){
    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
