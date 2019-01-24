import { Component, OnInit } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';
import { GeoObjectService } from '../services/geoObject.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';

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
  userGeoObjects: GeoObject[];
  // Use for Modal window
  currentObject: GeoObject;
  modalWindow = false;

  constructor(
    public geoObjectService: GeoObjectService,
    private spinner: NgxSpinnerService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    // Show spinner the first thing
    this.spinner.show();
    this.getUserObjects();

    this.defineCoords();
  }

  changed(newValue) {
    console.log('newValue', newValue);
    this.currentLatitude = newValue[0];
    this.currentLongtitude = newValue[1];
  }

  getUserObjects() {
    this.authService.getProfile().subscribe(profile => {
      // this.user = profile.user;
      this.userGeoObjects = profile.user.geoObjects;
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

  // // WARNING! THIS WILL GET A GENERAL USE OBJECT LIST, NOT USER PERSONALIZED OBJECT LIST
  // getAllObjects() {
  //   this.geoObjectService.getAllObjects().subscribe(
  //     objects => {
  //       this.geoObjects = objects;
  //       console.log(objects);
  //     }
  //   );
  // }

  defineCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongtitude = position.coords.longitude;
      console.log(this.userGeoObjects, this.currentLatitude, this.currentLongtitude);
      // Hide spinner after getting coordinates
      this.spinner.hide();
    });
  }

  handleMarkerClick(event) {

    const id = event._id;
    this.currentObject = this.userGeoObjects[id];

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
