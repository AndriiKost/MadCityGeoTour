import { Component, OnInit } from '@angular/core';
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  latitude: number;
  longtitude: number;

  constructor(private checkInService: CheckInService) { }

  ngOnInit() {
  }

  handleCheckInClick () {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longtitude = position.coords.longitude;
      const distance = this.checkInService.calculateDistance(position.coords.latitude, position.coords.longitude);
      console.log(distance);
      console.log(this.latitude, this.longtitude);
    });
  }

}
