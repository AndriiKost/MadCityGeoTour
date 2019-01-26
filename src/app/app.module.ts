import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GOOGLE_MAPS_API } from '../const/API.js';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { ModalWindowComponent } from './map/modal-window/modal-window.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CheckinComponent } from './map/checkin/checkin.component';
import { CheckInService } from './services/check-in.service';
import { GeoObjectService } from './services/geoObject.service';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { RulesComponent } from './rules/rules.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'checklist', component: ChecklistComponent, canActivate: [AuthGuard] },
  { path: 'rules', component: RulesComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ModalWindowComponent,
    NavigationComponent,
    CheckinComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ChecklistComponent,
    RulesComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAPS_API
    })
  ],
  providers: [
    CheckInService,
    GeoObjectService,
    ValidateService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
