import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GeoObject } from '../models/GeoObject.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  userGeoObjects: GeoObject[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserObjects();
  }

  getUserObjects() {
    this.authService.getProfile().subscribe(profile => {
      // Filter User Personalized Objects by visited: bool property
      // this.userGeoObjects = profile.user.geoObjects.filter(object => {
      //   if (!object.visited) {
      //     return object;
      //   }
      // });
      this.userGeoObjects = profile.user.geoObjects;
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

}
