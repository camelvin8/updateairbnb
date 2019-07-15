import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(
    private navCtrl: NavController
    ) {}

  toExplore(){
    this.navCtrl.navigateForward("explore")
  }
  toHome(){
    this.navCtrl.navigateForward("")
  }

}
