import { Component, OnInit } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';
import { GeoObjectService } from '../services/geoObject.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  currentLatitude: number;
  currentLongtitude: number;
  modalWindow = false;
  geoObjects: GeoObject[];
  currentObject: GeoObject;

  constructor(public geoObjectService: GeoObjectService) { }

  ngOnInit() {
    this.getObjects();

    this.defineCoords();
  }

  getObjects() {
    this.geoObjectService.getAllObjects().subscribe(
      objects => {
        this.geoObjects = objects;
        console.log(objects);
      }
    );
  }

  defineCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongtitude = position.coords.longitude;
      console.log(this.geoObjects, this.currentLatitude, this.currentLongtitude);
    });
  }

  handleMarkerClick(event) {

    const id = event._id;
    this.currentObject = this.geoObjects[id];

    if (this.modalWindow === true) {
      return;
    } else {
      this.modalWindow = true;
    }
  }

  receiveCloseModal($event) {
    this.modalWindow = false;
  }

}
