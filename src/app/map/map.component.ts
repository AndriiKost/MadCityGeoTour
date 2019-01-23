import { Component, OnInit } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';
import { GeoObjectService } from '../services/geoObject.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // Use from navigator
  currentLatitude: number;
  currentLongtitude: number;
  // Main geo objects
  geoObjects: GeoObject[];
  // Use for Modal window
  currentObject: GeoObject;
  modalWindow = false;

  constructor(
    public geoObjectService: GeoObjectService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit() {
    // Show spinner the first thing
    this.spinner.show();
    this.getObjects();

    this.defineCoords();
  }

  changed(newValue) {
    console.log('newValue', newValue);
    this.currentLatitude = newValue[0];
    this.currentLongtitude = newValue[1];
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
      // Hide spinner after getting coordinates
      this.spinner.hide();
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
