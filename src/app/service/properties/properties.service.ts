import { Injectable } from '@angular/core';
import { Property } from 'src/app/models/property.models';

var totalProp: number = 0;

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {
  
  constructor() { }
  
  getPropId():number{
      return ++totalProp 
  }
  getProperty(id:number): Property {
    return this.getAllProperties().filter(property => property.id == id)[0];
  }
  getAllProperties(){
    return [
        new Property(
          this.getPropId(),
          "Melvin Mansion",
          "5000",
          "Lisbon",
          "https://beam.land/static/images/p/large_1218_3afff.jpg"
        ),
        new Property(
          this.getPropId(),
          "Carolyn Castle",
          "5000",
          "Lisbon",
          "https://media.architecturaldigest.com/photos/59273c14c24db342f6c7911a/16:9/w_1280,c_limit/KIM3.png"
        ),
        new Property(
          this.getPropId(),
          "Amazing Apartment",
          "200",
          "Lisbon",
          "https://media.architecturaldigest.com/photos/5a023a2df0511d186d92114e/16:9/w_1280,c_limit/01.jpg"
        )
    ]
  }
}
