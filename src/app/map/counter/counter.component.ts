import { Component, OnInit, Input } from '@angular/core';
import { GeoObject } from 'src/app/models/GeoObject.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() userGeoObjects: GeoObject[];
  count: number;

  constructor() { }

  ngOnInit() {
    this.count = this.userGeoObjects.length;
  }

}
