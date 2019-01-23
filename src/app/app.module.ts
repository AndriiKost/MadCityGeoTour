import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GOOGLE_MAPS_API } from '../const/API.js';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { ModalWindowComponent } from './map/modal-window/modal-window.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CheckinComponent } from './map/checkin/checkin.component';
import { CheckInService } from './services/check-in.service';
import { GeoObjectService } from './services/geoObject.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ModalWindowComponent,
    NavigationComponent,
    CheckinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API
    })
  ],
  providers: [CheckInService, GeoObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
