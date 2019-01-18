import { Injectable } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';

@Injectable({
  providedIn: 'root'
})
export class GeoObjectService {

  constructor() { }

  getAllObjects() {
    console.log('woohoo');
  }
}
