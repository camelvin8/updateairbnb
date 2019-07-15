import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Property } from 'src/app/models/property.models';
import { PropertiesService} from '../../service/properties/properties.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})

export class ExplorePage implements OnInit {
  private properties: Property [];
  constructor(
    private navCtrl: NavController,
    public propertiesService: PropertiesService) { 
    }

  toProfile() {
    this.navCtrl.navigateForward("profile")
  }

  ngOnInit() {
    this.properties = this.propertiesService.getAllProperties();
  }
}

 