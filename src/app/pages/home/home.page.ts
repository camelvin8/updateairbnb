import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/service/user/user.service';
// import { Login } from '../../service/login.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  email: string;
  password: string;
  
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    public toastController: ToastController
    ) {}
  async presentToastError(){
    const toast = await this.toastController.create({
      message: 'Incorrect email or password.',
      duration: 2000
    });
    toast.present();
  }
  login(){
    const user = this.userService.login(this.email, this.password)
    if(!user){
      this.presentToastError();
    }
    else{
      this.navCtrl.navigateForward("explore")
    }
  }
  // toExplore(){
    
  //   if (this.email == 'Carolyn' && this.password == 'hi'){
  //     this.navCtrl.navigateForward("explore")
  //   }
  //   else{
  //     console.log("error")
  //   }
  // }
  toRegister(){
    this.navCtrl.navigateForward("register")
  }
}

// login(email: string, password: string): User {
//   let user = this.getAllUsers().filter(user => user.email == email)[0];
//   if(user && user.password == password){
//   this.currentUser = user;
// }
// return user;