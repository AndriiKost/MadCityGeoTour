(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div>\n  <router-outlet></router-outlet>\n  <flash-messages></flash-messages>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _const_API_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../const/API.js */ "./src/const/API.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _map_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map/modal-window/modal-window.component */ "./src/app/map/modal-window/modal-window.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _map_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map/checkin/checkin.component */ "./src/app/map/checkin/checkin.component.ts");
/* harmony import */ var _services_check_in_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/check-in.service */ "./src/app/services/check-in.service.ts");
/* harmony import */ var _services_geoObject_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/geoObject.service */ "./src/app/services/geoObject.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./checklist/checklist.component */ "./src/app/checklist/checklist.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _map_counter_counter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./map/counter/counter.component */ "./src/app/map/counter/counter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'checklist', component: _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_23__["ChecklistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_24__["RulesComponent"] },
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_25__["LandingComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _map_modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_11__["ModalWindowComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _map_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_13__["CheckinComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_23__["ChecklistComponent"],
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_24__["RulesComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_25__["LandingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _map_counter_counter_component__WEBPACK_IMPORTED_MODULE_27__["CounterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: _const_API_js__WEBPACK_IMPORTED_MODULE_8__["GOOGLE_MAPS_API"]
                })
            ],
            providers: [
                _services_check_in_service__WEBPACK_IMPORTED_MODULE_14__["CheckInService"],
                _services_geoObject_service__WEBPACK_IMPORTED_MODULE_15__["GeoObjectService"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_17__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checklist/checklist.component.css":
/*!***************************************************!*\
  !*** ./src/app/checklist/checklist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checklist-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n}\n.checklist-item {\n  margin: 10px;\n  padding: 10px;\n  border-left: 1px solid rgb(138, 17, 137);\n  border-bottom: 1px solid rgb(138, 17, 137);\n  border-radius: 5px;\n}\n.header h2 {\n  color: darkred;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: center;\n  padding: 1em;\n}\n.toCheck {\n\n}\n.checked {\n  cursor: not-allowed;\n  color: rgb(185, 184, 184);\n  background: rgba(69, 3, 59, 0.5);\n}\n.checked * {\n  cursor: not-allowed!important;\n  /* pointer-events: none!important; */\n}\nh4 {\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n}\n.clipboard-message {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  color: #fff;\n  background-color: rgb(137, 17, 136);\n  border-radius: 5px;\n  z-index: 5;\n  font-size: 1.5em;\n  padding: .5em;\n  border: 1px solid #000;\n}\n.modal-address {\n  text-decoration: underline;\n}\n.modal-address:hover {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/checklist/checklist.component.html":
/*!****************************************************!*\
  !*** ./src/app/checklist/checklist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h2>To Check</h2>\n</div>\n<div class=\"clipboard-message\" *ngIf=\"clipboardMessage\">\n  Copied to clipboard\n</div>\n<div class=\"checklist-container\">\n  <div class=\"checklist-item\" *ngFor=\"let object of userGeoObjects\" [ngClass]=\"!object.visited ? 'toCheck' : 'checked'\">\n    <div class=\"checklist-content\">\n      <h4>{{object.name}}</h4>\n      <p class=\"modal-address\" (click)=\"copyMessage(object?.address)\" value=\"click to copy\">{{ object?.address }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/checklist/checklist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/checklist/checklist.component.ts ***!
  \**************************************************/
/*! exports provided: ChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistComponent", function() { return ChecklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChecklistComponent = /** @class */ (function () {
    function ChecklistComponent(authService) {
        this.authService = authService;
    }
    ChecklistComponent.prototype.ngOnInit = function () {
        this.getUserObjects();
    };
    ChecklistComponent.prototype.getUserObjects = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            // Filter User Personalized Objects by visited: bool property
            // this.userGeoObjects = profile.user.geoObjects.filter(object => {
            //   if (!object.visited) {
            //     return object;
            //   }
            // });
            _this.userGeoObjects = profile.user.geoObjects;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ChecklistComponent.prototype.copyMessage = function (val) {
        this.appearClipboardMessage();
        var selBox = document.createElement('textarea');
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
    };
    ChecklistComponent.prototype.appearClipboardMessage = function () {
        var _this = this;
        if (this.clipboardMessage) {
            return;
        }
        else {
            this.clipboardMessage = true;
            setTimeout(function () { _this.clipboardMessage = false; }, 3000);
        }
    };
    ChecklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checklist',
            template: __webpack_require__(/*! ./checklist.component.html */ "./src/app/checklist/checklist.component.html"),
            styles: [__webpack_require__(/*! ./checklist.component.css */ "./src/app/checklist/checklist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ChecklistComponent);
    return ChecklistComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: .5em;\n  border-top: 1px solid rgba(46, 46, 46, 0.7);\n  color: rgba(46, 46, 46, 0.6);\n  text-align: right;\n  letter-spacing: .1em;\n  text-transform: lowercase;\n  padding-right: 2em;\n}\n.footer a {\n  color: darkred;\n  text-transform: capitalize;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  - Developed by <a href=\"https://andriikost-portfolio.herokuapp.com\" target=\"_blank\">Delian Digital</a> in 2019 -\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h2 {\n  color: darkred;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: left;\n  padding: 0 1em;\n}\n.landing-content {\n  margin-top: 23px;\n  border-top: 2px solid rgb(139,0,139);\n  display: block;\n}\n.action-btn {\n  padding: 15px;\n  margin-left: 10px;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid rgba(138, 17, 138, 0.5);\n}\n.action-btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background: rgb(138, 17, 137);\n}\n.intro, .rules, .action {\n  padding: 0.8em;\n}\n.action {\n  border-top: 1px solid rgba(138, 17, 138, 0.4);\n  color: darkred;\n  background-color: #f6f6f6c0;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 1.2em;\n  padding: 1em 2em;\n  letter-spacing: .1em\n}\n"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>MadCity GeoTour</h2>\n</div>\n<div class=\"landing-content\">\n  <div class=\"intro\">\n    <h4>What's this application about.</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  </div>\n  <div class=\"action\">\n    <h4>Interested? Sign in!</h4>\n    <div class=\"2-btn\">\n      <button class=\"action-btn\" [routerLink]=\"['/register']\">Register</button>\n      <button class=\"action-btn\" [routerLink]=\"['/login']\">Log In</button>\n    </div>\n  </div>\n  <div class=\"rules\">\n    <h4>The rules are.</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h2 {\n  color: darkred;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: left;\n  padding: 0 1em;\n}\n.login-form {\n  border: 1px solid rgb(160, 159, 159);\n  border-radius: 3px;\n  margin: auto;\n  width: 50%;\n  padding: 2em 2em 5em 2em;\n}\n.login-form div {\n  padding: .5em;\n}\ninput {\n  margin-right: 20%;\n  margin-left: 1em;\n  font-size: 1.2em;\n  border-radius: 5px;\n  border: 1px solid rgba(138, 17, 138, 0.5);\n  float: right;\n}\n.login-form {\n  font-size: 1.2em;\n  letter-spacing: .05em;\n}\n.action-btn {\n  padding: 15px;\n  margin-left: 10px;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid rgba(138, 17, 138, 0.5);\n  float: left;\n  width: 30%;\n}\n.action-btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background: rgb(138, 17, 137);\n}\n.user-help {\n  padding: 1em;\n  font-weight: 100;\n  text-align: center;\n  letter-spacing: .05em;\n  font-weight: 100;\n  font-size: 1.1em;\n  color: rgba(51, 51, 51, 0.8);\n}\n.user-help span {\n  text-decoration: underline;\n  color: darkred;\n}\n.user-help span:hover {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>Login</h2>\n</div>\n<div class=\"login-form\">\n  <form (submit)=\"onLoginSubmit()\">\n    <div>\n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n    <div>\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <input type=\"submit\" class=\"action-btn\" value=\"Login\">\n  </form>\n</div>\n<div class=\"user-help\">\n  <h4>Don't have an account? <span [routerLink]=\"['/register']\">Register now!</span></h4>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router, spinner) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.spinner = spinner;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.flashMessage.show('You are already logged in', { cssClass: 'alert-success', timeout: 5000 });
            this.spinner.show();
            this.router.navigate(['map']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['map']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/checkin/checkin.component.css":
/*!***************************************************!*\
  !*** ./src/app/map/checkin/checkin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check-in {\n  position: relative;\n  bottom: 0;\n  right:0;\n  left:0;\n  top: 0;\n  background: \trgb(139,0,139);\n  color: white;\n  text-align: center;\n  padding: 10px;\n  text-transform: uppercase;\n  font-size: 1.5em;\n}\n.check-in:hover {\n  cursor: pointer;\n  background: rgb(75,0,130);\n}\n"

/***/ }),

/***/ "./src/app/map/checkin/checkin.component.html":
/*!****************************************************!*\
  !*** ./src/app/map/checkin/checkin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"check-in\" (click)=\"handleCheckInClick()\">\n  Check in\n</div>\n<!-- <button (click)=\"testHandleClick()\">CHANGE LOCATION CHICAGO</button> -->\n"

/***/ }),

/***/ "./src/app/map/checkin/checkin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/map/checkin/checkin.component.ts ***!
  \**************************************************/
/*! exports provided: CheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinComponent", function() { return CheckinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_check_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/check-in.service */ "./src/app/services/check-in.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckinComponent = /** @class */ (function () {
    function CheckinComponent(checkInService, spinner) {
        this.checkInService = checkInService;
        this.spinner = spinner;
        this.handleCoordinatesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleGeoObjectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Send notification to map component
        this.handleNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CheckinComponent.prototype.ngOnInit = function () {
    };
    CheckinComponent.prototype.handleCheckInClick = function () {
        var _this = this;
        this.spinner.show();
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.currentLatitude = position.coords.latitude;
            _this.currentLongtitude = position.coords.longitude;
            _this.handleCoordinatesChange.emit([_this.currentLatitude, _this.currentLongtitude]);
            _this.performGeolocationCheckIn();
        });
    };
    CheckinComponent.prototype.performGeolocationCheckIn = function () {
        var _this = this;
        // Instance of all objects
        var geoObjectsForCheckin = this.geoObjects;
        // Closest object
        var closestObject;
        // Closest object distance
        var closestObjectDistance;
        // Final closest object
        geoObjectsForCheckin.map(function (cur) {
            // Assign current object to be the closest if it's undefined
            if (closestObject === undefined) {
                closestObject = cur;
            }
            // calculate the distance between object and a user and store it in const
            var distanceBetweenObjectAndUser = _this.checkInService
                .calculateDistance(_this.currentLatitude, _this.currentLongtitude, cur.coords.latitude, cur.coords.longitude);
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
            // Build notification
            this.checkInService.handleCheckIn(closestObject);
            var notification = 'WOOOHOOHOOO you found  ==> ' + closestObject.name + ' on the ' + closestObject.address;
            this.handleNotification.emit(notification);
            this.spinner.hide();
        }
        else {
            // Build notification
            var notification = 'Cant find any objects around you. Please move closer.';
            this.handleNotification.emit(notification);
            this.spinner.hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CheckinComponent.prototype, "currentLongtitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CheckinComponent.prototype, "currentLatitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CheckinComponent.prototype, "handleCoordinatesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CheckinComponent.prototype, "geoObjects", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CheckinComponent.prototype, "handleGeoObjectChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CheckinComponent.prototype, "handleNotification", void 0);
    CheckinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkin',
            template: __webpack_require__(/*! ./checkin.component.html */ "./src/app/map/checkin/checkin.component.html"),
            styles: [__webpack_require__(/*! ./checkin.component.css */ "./src/app/map/checkin/checkin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_check_in_service__WEBPACK_IMPORTED_MODULE_1__["CheckInService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], CheckinComponent);
    return CheckinComponent;
}());



/***/ }),

/***/ "./src/app/map/counter/counter.component.css":
/*!***************************************************!*\
  !*** ./src/app/map/counter/counter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 5px;\n  background: #fff;\n  z-index: 20;\n}\n"

/***/ }),

/***/ "./src/app/map/counter/counter.component.html":
/*!****************************************************!*\
  !*** ./src/app/map/counter/counter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"counter\">\n  <h4 *ngIf=\"count\">TO CHECK: {{ count }}</h4>\n</div>\n"

/***/ }),

/***/ "./src/app/map/counter/counter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/map/counter/counter.component.ts ***!
  \**************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
        this.count = this.userGeoObjects.length;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CounterComponent.prototype, "userGeoObjects", void 0);
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/map/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/map/counter/counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 90vh;\n}\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-counter *ngIf=\"userGeoObjects\" [userGeoObjects]=\"userGeoObjects\"></app-counter>\n<div class=\"map-container\">\n  <app-modal-window\n    *ngIf=\"modalWindow\"\n    (closeModal)=\"receiveCloseModal($event)\"\n    [notification]=\"notification\"\n    [geoObject]=\"currentObject\"></app-modal-window>\n  <agm-map [latitude]=\"currentLatitude\" [longitude]=\"currentLongtitude\" [zoom]=\"mapZoom\">\n    <!-- GEO OBJECTS MARKERS -->\n    <agm-marker *ngFor=\"let object of userGeoObjects\"\n      [latitude]=\"object.coords.latitude\"\n      [longitude]=\"object.coords.longitude\"\n      [title]=\"object._id\"\n      [iconUrl]=\"objectMarker\"\n      (markerClick)=\"handleMarkerClick($event)\">\n    </agm-marker>\n    <!-- USER MARKER -->\n    <agm-marker\n      [latitude]=\"currentLatitude\"\n      [longitude]=\"currentLongtitude\"\n      [iconUrl]=\"userMarker\"></agm-marker>\n    <!-- RESTRAUNTS MARKERS -->\n    <agm-marker\n      [latitude]=\"43.0784683\"\n      [longitude]=\"-89.3790745\"\n      [iconUrl]=\"restaurantMarker\">\n      <agm-info-window [disableAutoPan]=\"true\">\n        <p><strong>Bandung Indonesian Restaurant</strong></p>\n        <p>If you like Thai food, this is one of the best options in the area!</p>\n        <p><a href=\"https://www.google.com/maps/dir/43.0939636,-89.5286603/Bandung+Indonesian+Restaurant,+600+Williamson+St,+Madison,+WI+53703/@43.06514,-89.5185158,12z/data=!3m1!4b1!4m17!1m6!3m5!1s0x0:0xe4f0bb1e343ab52b!2sBandung+Indonesian+Restaurant!8m2!3d43.0770449!4d-89.3744043!4m9!1m1!4e1!1m5!1m1!1s0x8806536cba5ae4bd:0xe4f0bb1e343ab52b!2m2!1d-89.374404!2d43.0770448!3e0\" target=\"_blank\">\n          600 Williamson St, Madison, WI 53703</a></p>\n      </agm-info-window></agm-marker>\n      <agm-marker\n      [latitude]=\"43.079741\"\n      [longitude]=\"-89.369614\"\n      [iconUrl]=\"restaurantMarker\">\n      <agm-info-window [disableAutoPan]=\"true\">\n        <p><strong>Fuegos - Steak Tapas Vegan</strong></p>\n        <p>A mixed pan-Latin menu of small plates & vegan options as well as grilled steaks & tacos.</p>\n        <p><a href=\"https://www.google.com/maps/dir/43.0939636,-89.5286603/Fuegos+-+Steak+Tapas+Vegan,+904+Williamson+St,+Madison,+WI+53703/@43.0771493,-89.3746985,15.19z/data=!4m17!1m6!3m5!1s0x0:0xf2741786a5773f42!2sFuegos+-+Steak+Tapas+Vegan!8m2!3d43.0797598!4d-89.3696085!4m9!1m1!4e1!1m5!1m1!1s0x8806537272eab295:0xf2741786a5773f42!2m2!1d-89.369608!2d43.0797595!3e2\" target=\"_blank\">\n          904 Williamson St, Madison, WI 53703</a></p>\n      </agm-info-window></agm-marker>\n      <!-- RESTROOM MARKERS -->\n      <agm-marker\n      [latitude]=\"43.0719164\"\n      [longitude]=\"-89.3841777\"\n      [iconUrl]=\"restroomMarker\">\n      <agm-info-window [disableAutoPan]=\"true\">\n        <p><strong>Public Restroom</strong> at Downtown Madison Visitor Center</p>\n        <p><a href=\"https://www.google.com/maps/dir/43.0939636,-89.5286603/Downtown+Madison+Visitor+Center,+452+State+St,+Madison,+WI+53703/@43.06514,-89.5185158,12z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x880653364026ba71:0x8ddc6352c7214890!2m2!1d-89.3927526!2d43.0749703!3e2\" target=\"_blank\">\n          452 State St, Madison, WI 53703</a></p>\n      </agm-info-window></agm-marker>\n\n  </agm-map>\n  <app-checkin\n  *ngIf=\"currentLatitude && currentLongtitude && userGeoObjects\"\n  [(geoObjects)]=\"userGeoObjects\"\n  [(currentLatitude)]=\"currentLatitude\"\n  [(currentLongtitude)]=\"currentLongtitude\"\n  (handleCoordinatesChange)=\"changed($event)\"\n  (handleNotification)=\"notificationChanged($event)\"></app-checkin>\n</div>\n<ngx-spinner\nbdColor = \"rgba(1,51,51,0.8)\"\nsize = \"large\"\ncolor = \"#FADA5E\"\ntype = \"pacman\"\n></ngx-spinner>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geoObject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/geoObject.service */ "./src/app/services/geoObject.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    function MapComponent(geoObjectService, spinner, authService) {
        this.geoObjectService = geoObjectService;
        this.spinner = spinner;
        this.authService = authService;
        this.modalWindow = false;
        this.userMarker = 'assets/pedestrian-walking.svg';
        this.objectMarker = 'assets/map-pin.svg';
        this.restaurantMarker = 'assets/restaurant.svg';
        this.restroomMarker = 'assets/toilet.svg';
        this.mapZoom = 10;
    }
    MapComponent.prototype.ngOnInit = function () {
        // Show spinner the first thing
        this.spinner.show();
        this.getUserObjects();
        this.defineCoords();
    };
    MapComponent.prototype.changed = function (newValue) {
        console.log('newValue', newValue);
        this.currentLatitude = newValue[0];
        this.currentLongtitude = newValue[1];
    };
    MapComponent.prototype.getUserObjects = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            // Filter User Personalized Objects by visited: bool property
            _this.userGeoObjects = profile.user.geoObjects.filter(function (object) {
                if (!object.visited) {
                    return object;
                }
            });
            // console.log('AFTER FILTER ===> ', this.userGeoObjects);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    MapComponent.prototype.defineCoords = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.currentLatitude = position.coords.latitude;
            _this.currentLongtitude = position.coords.longitude;
            // Hide spinner after getting coordinates
            _this.spinner.hide();
        });
    };
    MapComponent.prototype.notificationChanged = function (event) {
        // Set notification
        this.notification = event;
        // Open modal window
        if (this.modalWindow === true) {
            return;
        }
        else if (this.notification !== '') {
            this.modalWindow = true;
        }
    };
    MapComponent.prototype.handleMarkerClick = function (event) {
        var _this = this;
        var id = event.title;
        this.userGeoObjects.map(function (object) {
            if (object._id === id) {
                _this.currentObject = object;
                if (_this.modalWindow === true) {
                    return;
                }
                else {
                    _this.modalWindow = true;
                }
            }
        });
    };
    MapComponent.prototype.receiveCloseModal = function ($event) {
        this.modalWindow = false;
        this.notification = '';
        this.currentObject = null;
        this.filterByPositionFalse();
    };
    MapComponent.prototype.filterByPositionFalse = function () {
        this.userGeoObjects = this.userGeoObjects.filter(function (object) {
            if (!object.visited) {
                return object;
            }
        });
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.userGeoObjects = [];
        this.currentObject = undefined;
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_services_geoObject_service__WEBPACK_IMPORTED_MODULE_1__["GeoObjectService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/modal-window/modal-window.component.css":
/*!*************************************************************!*\
  !*** ./src/app/map/modal-window/modal-window.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-window {\n  z-index: 10;\n  position:fixed;\n  padding:0;\n  margin:0;\n\n  top:0;\n  left:0;\n\n  width: 100%;\n  height: 100%;\n  background:rgba(255,255,255,0.8);\n}\n.modal-content {\n  max-width: 75%;\n  margin: 100px auto 0 auto;\n  padding: 25px;\n  background: #fff;\n  border: 1px solid rgb(195,68,75);\n}\n.btn-warning {\n  background: rgb(195,68,75);\n  color: #fff;\n  margin: 0 auto;\n  padding: 15px;\n  border-radius: 3px;\n  border: 1px solid rgb(133, 39, 44);\n  font-size: 1.2em;\n  text-transform: lowercase;\n}\n.btn-warning:hover {\n  background: rgb(133, 39, 44);\n  cursor: pointer;\n}\n.clipboard-message {\n  position: absolute;\n  top: 40%;\n  left: 40%;\n  color: #fff;\n  background-color: rgb(137, 17, 136);\n  border-radius: 5px;\n  z-index: 5;\n  font-size: 1.5em;\n  padding: .5em;\n  border: 1px solid #000;\n}\n.modal-address {\n  text-decoration: underline;\n}\n.modal-address:hover {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/map/modal-window/modal-window.component.html":
/*!**************************************************************!*\
  !*** ./src/app/map/modal-window/modal-window.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal-window\">\n  <div class=\"modal-content\">\n    <h3>{{ geoObject?.name }}</h3>\n    <h3 *ngIf=\"notification !== ''\">{{ notification }}</h3>\n    <div class=\"clipboard-message\" *ngIf=\"clipboardMessage\">\n        Copied to clipboard\n    </div>\n    <p class=\"modal-address\" (click)=\"copyMessage(geoObject?.address)\" value=\"click to copy\">{{ geoObject?.address }}</p>\n    <p *ngIf=\"geoObject\">Best angel for picture: South-western side of the building</p>\n    <button class=\"btn-warning\" (click)=\"close()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/map/modal-window/modal-window.component.ts":
/*!************************************************************!*\
  !*** ./src/app/map/modal-window/modal-window.component.ts ***!
  \************************************************************/
/*! exports provided: ModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowComponent", function() { return ModalWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalWindowComponent = /** @class */ (function () {
    function ModalWindowComponent() {
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalWindowComponent.prototype.ngOnInit = function () {
    };
    ModalWindowComponent.prototype.close = function () {
        this.closeModal.emit(false);
    };
    ModalWindowComponent.prototype.copyMessage = function (val) {
        this.appearClipboardMessage();
        var selBox = document.createElement('textarea');
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
    };
    ModalWindowComponent.prototype.appearClipboardMessage = function () {
        var _this = this;
        if (this.clipboardMessage) {
            return;
        }
        else {
            this.clipboardMessage = true;
            setTimeout(function () { _this.clipboardMessage = false; }, 3000);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalWindowComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalWindowComponent.prototype, "geoObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalWindowComponent.prototype, "notification", void 0);
    ModalWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-window',
            template: __webpack_require__(/*! ./modal-window.component.html */ "./src/app/map/modal-window/modal-window.component.html"),
            styles: [__webpack_require__(/*! ./modal-window.component.css */ "./src/app/map/modal-window/modal-window.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalWindowComponent);
    return ModalWindowComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-menu{\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 15px;\n  background: #fff;\n  z-index: 20;\n}\n\n.container {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.menu-content .container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 15px 15px 0 0;\n  z-index: 20;\n}\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n/* Rotate first bar */\n\n.change .bar1 {\n  -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;\n  transform: rotate(-45deg) translate(-9px, 6px) ;\n}\n\n/* Fade out the second bar */\n\n.change .bar2 {\n  opacity: 0;\n}\n\n/* Rotate last bar */\n\n.change .bar3 {\n  -webkit-transform: rotate(45deg) translate(-8px, -8px) ;\n  transform: rotate(45deg) translate(-8px, -8px) ;\n}\n\n/* MENU CONTENT */\n\n.menu-content {\n  background: #fff;\n  width: 28vh;\n  height: 100vh;\n  position: absolute;\n  right: 0;\n  top: 0;\n  border-left: 1px solid #000;\n}\n\n.menu-list {\n  margin-top: 80px;\n}\n\n.menu-list ul {\n  margin: 0;\n  padding: 0;\n}\n\n.menu-list li {\n  list-style: none;\n  padding: 10px 15px;\n  font-size: 1.2em;\n  text-transform: uppercase;\n}\n\n.menu-list li:hover {\n  cursor: pointer;\n  background: #eee;\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-menu\">\n    <div class=\"container\" (click)=\"changeStyleClass()\" [ngClass]=\"status ? 'change' : null\">\n        <div class=\"bar1\"></div>\n        <div class=\"bar2\"></div>\n        <div class=\"bar3\"></div>\n      </div>\n    <div *ngIf=\"status\" class=\"menu-content\">\n        <div class=\"container\" (click)=\"changeStyleClass()\" [ngClass]=\"status ? 'change' : null\">\n            <div class=\"bar1\"></div>\n            <div class=\"bar2\"></div>\n            <div class=\"bar3\"></div>\n          </div>\n          <div class=\"menu-list\">\n            <ul>\n              <li *ngIf=\"authService.loggedIn()\"\n                [routerLink]=\"['/profile']\"\n                [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">Profile</li>\n              <li *ngIf=\"authService.loggedIn()\"\n                [routerLink]=\"['/checklist']\"\n                [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">Checklist</li>\n              <li *ngIf=\"authService.loggedIn()\"\n                [routerLink]=\"['/map']\"\n                [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">Map</li>\n              <li [routerLink]=\"['/rules']\"\n                [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">Rules</li>\n              <li *ngIf=\"!authService.loggedIn()\"\n                [routerLink]=\"['/register']\"\n                [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">Register</li>\n              <li *ngIf=\"!authService.loggedIn()\"\n                [routerLink]=\"['/login']\"\n                [routerLinkActive]=\"['active']\"\n                [routerLinkActiveOptions]=\"{exact:true}\">Login</li>\n                <li *ngIf=\"authService.loggedIn()\"\n                (click)=\"onLogoutClick()\">Logout</li>\n            </ul>\n          </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.status = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.changeStyleClass = function () {
        this.status = !this.status;
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h2 {\n  color: darkred;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: center;\n  padding: 1em;\n}\n.user-section h2 {\n  text-transform: capitalize;\n}\n.user-section span {\n  color: rgb(138, 17, 137);\n}\n.user-settings {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n}\n.username , .email {\n  padding-top: 1em;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  border: 1px solid #eee;\n  width: 75%;\n  text-align: center;\n  font-weight: 300;\n}\n.action-btn {\n  padding: 15px;\n  font-size: 1em;\n  border-radius: 5px;\n}\n.action-btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background: rgb(138, 17, 137);\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h2>Profile</h2>\n</div>\n\n<div *ngIf=\"user\" class=\"user-section\">\n    <h2 class=\"page-header\">Hello, <span>{{user.name}}</span></h2>\n    <div class=\"user-settings\">\n      <div class=\"username\">\n          <h4>Username: {{user.username}}</h4>\n          <button class=\"action-btn\">Change Username</button>\n      </div>\n      <div class=\"email\">\n          <h4>Email: {{user.email}}</h4>\n          <button class=\"action-btn\">Change Email</button>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h2 {\n  color: darkred;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: left;\n  padding: 0 1em;\n}\n.register-form {\n  border: 1px solid rgb(160, 159, 159);\n  font-size: 1.2em;\n  letter-spacing: .05em;\n  border-radius: 3px;\n  margin: auto;\n  width: 50%;\n  padding: 2em 2em 5em 2em;\n}\n.register-form div {\n  padding: .5em;\n}\ninput {\n  margin-right: 20%;\n  margin-left: 1em;\n  font-size: 1.2em;\n  border-radius: 5px;\n  border: 1px solid rgba(138, 17, 138, 0.5);\n  float: right;\n}\n.action-btn {\n  padding: 15px;\n  margin-left: 10px;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid rgba(138, 17, 138, 0.5);\n  width: 30%;\n  float: left;\n}\n.action-btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background: rgb(138, 17, 137);\n}\n.user-help {\n  padding: 1em;\n  font-weight: 100;\n  text-align: center;\n  letter-spacing: .05em;\n  font-weight: 100;\n  font-size: 1.1em;\n  color: rgba(51, 51, 51, 0.8);\n}\n.user-help span {\n  text-decoration: underline;\n  color: darkred;\n}\n.user-help span:hover {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>Register</h2>\n</div>\n<div class=\"register-form\">\n  <form (submit)=\"onRegisterSubmit()\">\n    <div>\n      <label>Name</label>\n      <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\">\n    </div>\n    <div>\n        <label>Username</label>\n        <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\">\n      </div>\n      <div>\n          <label>Email</label>\n          <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control\">\n        </div>\n        <div>\n            <label>Password</label>\n            <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\">\n        </div>\n        <input type=\"submit\" class=\"action-btn\" value=\"Submit\">\n  </form>\n</div>\n<div class=\"user-help\">\n  <h4>Have an account? <span [routerLink]=\"['/login']\">Login in</span></h4>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_geoObject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/geoObject.service */ "./src/app/services/geoObject.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router, geoObjectService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.geoObjectService = geoObjectService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getObjects();
    };
    RegisterComponent.prototype.getObjects = function () {
        var _this = this;
        this.geoObjectService.getAllObjects().subscribe(function (objects) {
            _this.geoObjectsForUser = objects;
            console.log(objects);
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            geoObjects: this.geoObjectsForUser
        };
        console.log(user);
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Congratulations! You are now registered.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Ooops! Something went wrong...', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_geoObject_service__WEBPACK_IMPORTED_MODULE_5__["GeoObjectService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rules/rules.component.css":
/*!*******************************************!*\
  !*** ./src/app/rules/rules.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header h2 {\n  color: darkred;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: center;\n  padding: 1em;\n}\nh4 {\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n}\n.header h2 {\n  color: darkred;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: left;\n  padding: 0 1em;\n}\n.landing-content {\n  margin-top: 23px;\n  border-top: 2px solid rgb(139,0,139);\n  display: block;\n}\n.action-btn {\n  padding: 15px;\n  margin-left: 10px;\n  font-size: 1em;\n  border-radius: 5px;\n  border: 1px solid rgba(138, 17, 138, 0.5);\n}\n.action-btn:hover {\n  cursor: pointer;\n  color: #fff;\n  background: rgb(138, 17, 137);\n}\n.intro, .rules, .action {\n  padding: 0.8em;\n}\n.action {\n  border-top: 1px solid rgba(138, 17, 138, 0.4);\n  color: darkred;\n  background-color: #f6f6f6c0;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 1.2em;\n  letter-spacing: .1em\n}\n"

/***/ }),

/***/ "./src/app/rules/rules.component.html":
/*!********************************************!*\
  !*** ./src/app/rules/rules.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>Rules</h2>\n</div>\n<div class=\"landing-content\">\n  <div class=\"intro\">\n    <h4>The rules are.</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  </div>\n  <div class=\"rules\">\n    <h4>Some more rules.</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/rules/rules.component.ts":
/*!******************************************!*\
  !*** ./src/app/rules/rules.component.ts ***!
  \******************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/rules/rules.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const url = 'http://localhost:8000/';
var url = 'https://madcitygeotour.herokuapp.com/';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        console.log('REGISTER AUTH USER => ', user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url + 'users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url + 'users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(url + 'users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.tagGeoObject = function (object, profileID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var newGeoObject = object;
        newGeoObject.visited = true;
        return this.http.get(url + 'users/' + profileID + '/geotag/' + object.id, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Check if user logged in (if token is not expired)
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/check-in.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/check-in.service.ts ***!
  \**********************************************/
/*! exports provided: CheckInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInService", function() { return CheckInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const url = 'http://localhost:8000/users/';
var url = 'https://madcitygeotour.herokuapp.com/users/';
var CheckInService = /** @class */ (function () {
    function CheckInService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    CheckInService.prototype.calculateDistance = function (latitude, longtitude, objLat, objLon) {
        var R = 6378.137; // Radius of earth in KM
        var dLat = objLat * Math.PI / 180 - latitude * Math.PI / 180;
        var dLon = objLon * Math.PI / 180 - longtitude * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(latitude * Math.PI / 180) * Math.cos(objLat * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return Math.round((d * 1000 * 3.2808));
    };
    CheckInService.prototype.handleCheckIn = function (object) {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.authService.tagGeoObject(object, profile.user._id).subscribe(function (data) {
                console.log('handleCheckIn => ', data);
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CheckInService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CheckInService);
    return CheckInService;
}());



/***/ }),

/***/ "./src/app/services/geoObject.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/geoObject.service.ts ***!
  \***********************************************/
/*! exports provided: GeoObjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoObjectService", function() { return GeoObjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeoObjectService = /** @class */ (function () {
    function GeoObjectService(http) {
        this.http = http;
    }
    GeoObjectService.prototype.getUserObjects = function () {
        // const url ='http://localhost:8000/profile';
        var url = 'https://madcitygeotour.herokuapp.com/profile';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserObjects', [])));
    };
    GeoObjectService.prototype.getAllObjects = function () {
        // const url = 'http://localhost:8000/geo-objects/';
        var url = 'https://madcitygeotour.herokuapp.com/geo-objects/';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAllObjects', [])));
    };
    // Handle Errors
    GeoObjectService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    GeoObjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeoObjectService);
    return GeoObjectService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/const/API.js":
/*!**************************!*\
  !*** ./src/const/API.js ***!
  \**************************/
/*! exports provided: GOOGLE_MAPS_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_MAPS_API", function() { return GOOGLE_MAPS_API; });
const GOOGLE_MAPS_API = 'AIzaSyDsq1nyutN_hjPBdbl6kfhrOJD-TxasmlM';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andriikost/Desktop/Angular/MadCityGeoTour/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map