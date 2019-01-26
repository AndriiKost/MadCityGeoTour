import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckInService } from 'src/app/services/check-in.service';
import { GeoObject } from 'src/app/models/GeoObject.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

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
    private checkInService: CheckInService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  handleCheckInClick () {
    this.spinner.show();
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongtitude = position.coords.longitude;
      this.handleCoordinatesChange.emit([this.currentLatitude, this.currentLongtitude]);
      this.performGeolocationCheckIn();
    });
  }

  performGeolocationCheckIn() {
    // Instance of all objects
    const geoObjectsForCheckin = this.geoObjects;
    // Closest object
    let closestObject;
    // Closest object distance
    let closestObjectDistance: number;
    // Final closest object
    geoObjectsForCheckin.map(cur => {
      // Assign current object to be the closest if it's undefined
      if (closestObject === undefined) {
        closestObject = cur;
      }
      // calculate the distance between object and a user and store it in const
      const distanceBetweenObjectAndUser = this.checkInService
                      .calculateDistance(this.currentLatitude, this.currentLongtitude, cur.coords.latitude, cur.coords.longitude);
      // Assign current distance if previous is unavaiable
      if (closestObjectDistance === undefined) {
        closestObjectDistance = distanceBetweenObjectAndUser;
      }
      console.log('distanceBetweenObjectAndUser ==> ', distanceBetweenObjectAndUser);
      // Check if current distance is lower then previous
      if (closestObjectDistance > distanceBetweenObjectAndUser) {
        closestObjectDistance = distanceBetweenObjectAndUser;
        closestObject = cur;
      }
    });
    console.log('closestObject ==> ', closestObject);
    console.log('closestObjectDistance ==> ', closestObjectDistance);

    // Check if distance between object and user is less or equal then 40 feet
    if (closestObjectDistance <= 40) {
      console.log('WOOOHOOHOOO you found  ==> ', closestObject.name, ' on the ', closestObject.address);
      this.checkInService.handleCheckIn(closestObject);
      this.spinner.hide();
    } else {
      console.log('Cant find any objects around you. Please move closer.');
      this.spinner.hide();
    }
  }

}
