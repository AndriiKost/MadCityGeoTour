import { Injectable } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

// const url = 'http://localhost:8000/users/';
const url = 'https://madcitygeotour.herokuapp.com/users/';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {  }

  calculateDistance(latitude, longtitude, objLat, objLon) {
    const R = 6378.137; // Radius of earth in KM
    const dLat = objLat * Math.PI / 180 - latitude * Math.PI / 180;
    const dLon = objLon * Math.PI / 180 - longtitude * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(latitude * Math.PI / 180) * Math.cos(objLat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return Math.round((d * 1000 * 3.2808));
}

handleCheckIn(object: GeoObject) {
  this.authService.getProfile().subscribe(profile => {
    this.authService.tagGeoObject(object, profile.user._id).subscribe(data => {
      // console.log('handleCheckIn => ', data);
    });
  },
  err => {
    console.log(err);
    return false;
  }
);
}

// tagGeoObject(object: GeoObject, profileID) {
//   const headers = new Headers();
//   this.authService.loadToken();
//   headers.append('Authorization', this.authService.authToken);
//   headers.append('Content-Type', 'application/json');

//   const newGeoObject = object;
//   newGeoObject.visited = true;

//   this.http.get(url + profileID + '/geotag/' + object.id, {headers: headers})
//   .subscribe(response => {
//     console.log('RESPONSE FROM HTTP =>', response);
//   });

// }


}
