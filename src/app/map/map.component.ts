import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';
import { GeoObjectService } from '../services/geoObject.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  // Use from navigator
  currentLatitude: number;
  currentLongtitude: number;
  // Main geo objects
  userGeoObjects: GeoObject[];
  // Use for Modal window
  currentObject: GeoObject;
  modalWindow = false;
  notification: string;
  userMarker = 'assets/pedestrian-walking.svg';
  objectMarker = 'assets/map-pin.svg';
  restaurantMarker = 'assets/restaurant.svg';
  restroomMarker = 'assets/toilet.svg';
  mapZoom = 14;

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
    // console.log('newValue', newValue);
    this.currentLatitude = newValue[0];
    this.currentLongtitude = newValue[1];
  }

  getUserObjects() {
    this.authService.getProfile().subscribe(profile => {
      // Filter User Personalized Objects by visited: bool property
      this.userGeoObjects = profile.user.geoObjects.filter(object => {
        if (!object.visited) {
          return object;
        }
      });
      // console.log('AFTER FILTER ===> ', this.userGeoObjects);
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

  defineCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongtitude = position.coords.longitude;
      // Hide spinner after getting coordinates
      this.spinner.hide();
    });
  }

  notificationChanged(event) {
    // Set notification
    this.notification = event;
    // Open modal window
    if (this.modalWindow === true) {
      return;
    } else if (this.notification !== '') {
      this.modalWindow = true;
    }
  }

  handleMarkerClick(event) {
    const id = event.title;
    this.userGeoObjects.map(object => {
      if (object._id === id) {
        this.currentObject = object;
        if (this.modalWindow === true) {
          return;
        } else {
          this.modalWindow = true;
        }
      }
    });

  }

  receiveCloseModal($event) {
    this.modalWindow = false;
    this.notification = '';
    this.currentObject = null;
    this.filterByPositionFalse();
  }

  filterByPositionFalse() {
    this.userGeoObjects = this.userGeoObjects.filter(object => {
      if (!object.visited) {
        return object;
      }
    });
  }

  ngOnDestroy() {
    this.userGeoObjects = [];
    this.currentObject = undefined;
  }

}
