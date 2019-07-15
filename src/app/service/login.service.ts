import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class Login {
  public email: string;
  public password: string;

  constructor() {
    this.email = "";
    this.password = "";
}


}
  // public login: Login = new Login();
  // }
  // constructor() {
  //   private httpClient: HttpClient,
  //   private navCtrl: NavController
  //  }
// }
