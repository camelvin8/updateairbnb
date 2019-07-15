import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.models';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/service/properties/properties.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {
  public property: Property;

  constructor(private route: ActivatedRoute, public propertiesService: PropertiesService) { }

  ngOnInit() {
    let propertyId: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.property = this.propertiesService.getProperty(propertyId);
  }

}
