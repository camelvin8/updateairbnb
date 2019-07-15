import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(
    private navCtrl: NavController
  ) { }

  toExplore() {
    this.navCtrl.navigateForward("explore")
  }
  toHome(){
    this.navCtrl.navigateForward("")
  }


}


