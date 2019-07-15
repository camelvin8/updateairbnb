import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { Login } from '../login.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User
  constructor( ) { }
  
  getAllUsers(){
    return [
      new User(
        "Carolyn",
        "Melvin",
        "camelvin@umich.edu",
        "cam"
      ),
      new User(
        "Kim",
        "K",
        "kim@gmail.com",
        "kim"
      )
    ]
  }

  login(email: string, password: string): User {
    let user = this.getAllUsers().filter(user => user.email == email)[0];
    if(user.password == password){
      this.currentUser = user;
      return user;
    }
    
  }
  
}

