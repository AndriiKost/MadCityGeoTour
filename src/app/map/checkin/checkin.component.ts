import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckInService } from 'src/app/services/check-in.service';
import { GeoObject } from 'src/app/models/GeoObject.model';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  @Input() currentLongtitude: number;
  @Input() currentLatitude: number;
  @Output() handleCoordinatesChange = new EventEmitter();
  // Main geo objects array
  @Input() geoObjects: GeoObject[];
  @Output() handleGeoObjectChange = new EventEmitter();

  constructor(
    private checkInService: CheckInService
    ) { }

  ngOnInit() {
  }

  handleCheckInClick () {
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongtitude = position.coords.longitude;
      this.handleCoordinatesChange.emit([this.currentLatitude, this.currentLongtitude]);
      this.performGeolocationCheckIn();
    });
  }

  performGeolocationCheckIn() {
    const geoObjectsForCheckin = this.geoObjects;
    let closestObject: GeoObject;

    const distanceToClosestObject = geoObjectsForCheckin.reduce((prev, cur, index, arr) {
      closestObject = cur;
      const curDistance = this.checkInService
      .calculateDistance(this.currentLatitude, this.currentLongtitude, cur.coords.latitude, cur.coords.longitude);
      let distance = curDistance;

      if (curDistance < distance) {
        distance = curDistance;
        closestObject = cur;
      } else if (curDistance === undefined) {
        distance = curDistance;
        closestObject = cur;
      }
      return distance;
    });

    if (distanceToClosestObject < 40) {
      console.log('Perform removal from db.user.objects[id] => ', closestObject);
    } else {
      console.log('you are', distanceToClosestObject, ' feet away from the closest object.');
    }
  }

  // // CHANGE LOCATION TO CHICAGO FOR DEV PURPOSES
  // testHandleClick() {
  //   this.currentLatitude = 41.8333925;
  //   this.currentLongtitude = -88.0121513;
  //   console.log('testHandleClick lat = ', this.currentLatitude, 'long = ', this.currentLongtitude);
  //   this.handleCoordinatesChange.emit([this.currentLatitude, this.currentLongtitude]);
  // }

 }
