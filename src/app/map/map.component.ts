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

  fakeObject = [
    {
      id: 1,
      coords: {
        latitude: 43.0764198,
        longitude: -89.3880422,
      },
      name: 'Wisconsin State Capitol',
      address: '25 State St, Madison WI 53701'
    },
    {
      id: 2,
      coords: {
        latitude: 43.0794198,
        longitude: -89.3280422,
      },
      name: 'Wisconsin Best Bar',
      address: '125 Market St, Madison WI 53622'
    },
    {
      id: 3,
      coords: {
        latitude: 43.0864198,
        longitude: -89.1880422,
      },
      name: 'Wisconsin Public Place',
      address: '323 Williamston St, Madison WI 53722'
    },
  ];
  currentObject: GeoObject;

  constructor(public geoObjectService: GeoObjectService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLatitude = position.coords.latitude;
      this.currentLongtitude = position.coords.longitude;
    });
    this.geoObjectService.getAllObjects();
  }

  handleMarkerClick(event) {

    const id = event._id;
    this.currentObject = this.fakeObject[id];

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
