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
  clipboardMessage: boolean;

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

  copyMessage(val: string) {
    this.appearClipboardMessage();
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  appearClipboardMessage() {
    if (this.clipboardMessage) {
      return;
    } else {
      this.clipboardMessage = true;
      setTimeout(() => { this.clipboardMessage = false; }, 3000);
    }
  }

}
