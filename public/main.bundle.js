webpackJsonp([1,4],{

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        var userStr = localStorage.getItem('user');
        var profile = JSON.parse(userStr);
        return this.http.get('profile/' + profile.id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getID = function () {
        var userStr = localStorage.getItem('user');
        var profile = JSON.parse(userStr);
        return profile.id;
    };
    AuthService.prototype.getUsername = function () {
        var userStr = localStorage.getItem('user');
        var profile = JSON.parse(userStr);
        return profile.username;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/auth.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(687),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_addpost_addpost_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_addlink_addlink_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_post_post_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_auth_guard__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_post_post_component__["a" /* PostComponent */] },
    { path: 'newpost', component: __WEBPACK_IMPORTED_MODULE_9__components_addpost_addpost_component__["a" /* AddpostComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'newlink', component: __WEBPACK_IMPORTED_MODULE_10__components_addlink_addlink_component__["a" /* AddlinkComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_addpost_addpost_component__["a" /* AddpostComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_addlink_addlink_component__["a" /* AddlinkComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_post_post_component__["a" /* PostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__guard_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddlinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddlinkComponent = (function () {
    function AddlinkComponent(router, postService, authService, flashMessage, validateService) {
        this.router = router;
        this.postService = postService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    AddlinkComponent.prototype.ngOnInit = function () {
    };
    AddlinkComponent.prototype.addLink = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Log in to add link', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        this.author = this.authService.getUsername();
        this.user = this.authService.getID();
        var link = {
            title: this.title,
            link: this.link,
            authorId: this.user,
            user: this.author
        };
        if (!this.validateService.validateLink(link)) {
            this.flashMessage.show("Please fill all the field", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.postService.addLink(link).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                _this.router.navigate(['/newlink']);
            }
        });
        this.link = "";
        this.title = "";
    };
    AddlinkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addlink',
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === 'function' && _e) || Object])
    ], AddlinkComponent);
    return AddlinkComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/addlink.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddpostComponent = (function () {
    function AddpostComponent(router, postService, authService, flashMessage, validateService) {
        this.router = router;
        this.postService = postService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    AddpostComponent.prototype.ngOnInit = function () {
    };
    AddpostComponent.prototype.addPost = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Log in to add post', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        this.user = this.authService.getID();
        this.author = this.authService.getUsername();
        var post = {
            title: this.title,
            content: this.textAreaValue,
            authorId: this.user,
            user: this.author
        };
        if (!this.validateService.validatePost(post)) {
            this.flashMessage.show("Please fill all the field", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.postService.addPost(post).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                _this.router.navigate(['/newpost']);
            }
        });
        this.title = "";
        this.textAreaValue = "";
    };
    AddpostComponent.prototype.doTextAreaValueChange = function (ev) {
        this.textAreaValue = ev.target.value;
    };
    AddpostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === 'function' && _e) || Object])
    ], AddpostComponent);
    return AddpostComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/addpost.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(postService, authService, validateService, flashMessage, router) {
        this.postService = postService;
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            console.log(posts);
        });
    };
    HomeComponent.prototype.incrementVotes = function (post) {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Log in to add vote', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        var userID = this.authService.getID();
        if (this.validateService.alreadyVoted(post, userID)) {
            this.flashMessage.show('Already voted', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        this.postService.addVote(post, userID).subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            _this.postService.getPosts().subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    };
    HomeComponent.prototype.decrementVotes = function (post) {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Log in to add vote', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        var userID = this.authService.getID();
        if (this.validateService.alreadyVoted(post, userID)) {
            this.flashMessage.show('Already voted', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        this.postService.removeVote(post, userID).subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            _this.postService.getPosts().subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    };
    HomeComponent.prototype.onSelectPost = function (post) {
        this.router.navigate(['post/', post._id]);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(690),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/home.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeData(data.token, data.user);
                _this.flashMessage.show('You are logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(691),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/login.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You re logout', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        this.username = "";
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(692),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostComponent = (function () {
    function PostComponent(postService, authService, validateService, flashMessage, router, route) {
        this.postService = postService;
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.postService.getPost(this.id).subscribe(function (post) {
            _this.post = post;
        });
    };
    PostComponent.prototype.onCommentSubmit = function () {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Log in to add comment', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        var author = this.authService.getUsername();
        var comment = {
            authorUsername: author,
            comment: this.comment,
        };
        this.postService.postComment(comment, this.id).subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            _this.postService.getPost(_this.id).subscribe(function (post) {
                _this.post = post;
            });
        });
        this.comment = "";
    };
    PostComponent.prototype.decrementVotes = function (comment) {
        var _this = this;
        var userID = this.authService.getID();
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Log in to add vote', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        if (this.validateService.alreadyVoted(comment, userID)) {
            this.flashMessage.show('Already voted', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        this.postService.removeCommentVote(comment, userID).subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            _this.postService.getPost(_this.id).subscribe(function (post) {
                _this.post = post;
            });
        });
    };
    PostComponent.prototype.incrementVotes = function (comment) {
        var _this = this;
        var userID = this.authService.getID();
        if (!this.authService.loggedIn()) {
            this.flashMessage.show('Log in to add vote', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        if (this.validateService.alreadyVoted(comment, userID)) {
            this.flashMessage.show('Already voted', { cssClass: 'alert-success', timeout: 3000 });
            return false;
        }
        this.postService.addCommentVote(comment, userID).subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            _this.postService.getPost(_this.id).subscribe(function (post) {
                _this.post = post;
            });
        });
    };
    PostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(693),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/post.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(authService, postService, flashMessage, router) {
        this.authService = authService;
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.profile = data;
        });
    };
    ProfileComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.postService.deletePost(id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/']);
            }
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(694),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/profile.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, router, flashMessage, validateService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please fill email properly", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(695),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/register.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/environment.js.map

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n\tmargin-top: 10px;\r\n}\r\n.btn {\r\n\twidth: 50px;\r\n\tmargin:auto;\r\n}"

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == "" || user.username == "" || user.password == "" || user.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == "" || user.password == "") {
            return false;
        }
    };
    ValidateService.prototype.validateLink = function (link) {
        if (link.link == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePost = function (post) {
        var content = post.content;
        if (content == "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.alreadyVoted = function (post, user) {
        return post.votersID.some(function (voter) {
            return voter == user;
        });
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/validate.service.js.map

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n\tmargin-top: 10px;\r\n}\r\ntextarea {\r\n\twidth: 100%;\r\n\theight: 300px;\r\n}\r\n.btn {\r\n\twidth: 50px;\r\n\tmargin:auto;\r\n}"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.addPosts {\r\nfloat: right;\r\nwidth: 20%;\r\nmargin-top: 35px;\r\nborder-left: 1px solid #454545;\r\n}\r\n.postsView {\r\nfloat: left; \r\nwidth: 80%;\r\n}\r\n\r\n.btn-default{\r\n margin-top: 5%;\r\n width: 80%;\r\n margin-left: 10%;\r\n}\r\n.btn-primary-outline:hover{\r\n\r\n}\r\n.post a {\r\n\tcolor: #989b9f;\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n}\r\n.post a:hover{\r\n\tcolor: #a90606;\r\n}\r\n.btn-default:nth-child(2){\r\nmargin-bottom: 5%;\t\r\n}\r\n.votes {\r\n\twidth: 10%;\r\n\tfloat:left;\r\n}\r\n.post {\r\n\twidth: 90%;\r\n\tfloat: right;\r\n\tmargin: auto;\r\n\theight: 100%;\r\n\tmargin-top: 10px;\r\n}\r\n.postsView {\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.votes span {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n}\r\n.author {\r\n\tcolor:#a90606;\r\n}\r\n.arrows {\r\n\tfont-size: 2rem;\r\n\tcursor: pointer;\r\n}\r\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n\ttext-align: center;\r\n}\r\nform {\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n}"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "li {\r\n\tlist-style: none;\r\n}\r\n\r\n.postView {\r\n\twidth: 80%;\r\n\tmargin: auto;\r\n\tmargin-top: 65px;\r\n}\r\n.post section p {\r\n\ttext-align: justify;\r\n\ttext-justify: inter-word;\t\r\n}\r\n.post section h2 {\r\n\ttext-align: center;\r\n}\r\n.postLine{\r\n\tcontent: \"\";\r\n\tdisplay:block;\r\n\twidth: 30%;\r\n\tmargin: 50px auto 0 auto;\r\n\tborder-bottom: 1px dotted #454545;\r\n}\r\n.comments {\r\n\tmargin-top: 10%;\r\n\tdisplay: block;\r\n}\r\n.comments h4 {\r\n\ttext-align: center;\r\n}\r\nform {\r\n\ttext-align: center;\r\n}\r\n.comments input[name=\"comment\"]{\r\n\tmargin: auto;\r\n\twidth: 50%;\r\n\tmargin-bottom: 30px;\r\n}\r\n.postAuthor strong{\r\n\tcolor:#a90606;\r\n}\r\n.points {\r\n\twidth: 5%;\r\n\tfloat:left;\r\n}\r\n.points span {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n}\r\n.commentView {\r\nwidth: 95%;\r\nfloat: right;\r\nmargin: auto;\r\nheight: 100%;\r\nmargin-top: 10px;\r\n}\r\n.commentList {\r\nmargin-top: 1%;\r\nmin-height: 75px;\r\nfloat: left;\r\nwidth: 100%;\r\n}\r\n.commentList:after {\r\n\tclear: both;\r\n\tdisplay: block;\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n}"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n\ttext-align: center;\r\n}\r\nform {\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n}"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"addLink()\">\n<div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Title\" [(ngModel)]=\"title\" name=\"title\"></div>\n<div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder = \"Link\" [(ngModel)]=\"link\" name=\"link\"></div>\n<div class=\"form-group\"><button type=\"submit\" class=\"btn btn-default\" value=\"submit\">Add</button></div>\n</form>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"addPost()\">\n<div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"title\" [(ngModel)]=\"title\" name=\"title\"></div>\n<div class=\"form-group\"><textarea type=\"text\" class=\"form-control\" placeholder = \"Content\" (change)=\"doTextAreaValueChange($event)\" name=\"content\">{{textAreaValue}}</textarea></div>\n<div class=\"form-group\"><button type=\"submit\" class=\"btn btn-default\">Add</button></div>\n</form>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"addPosts\">\n<a class=\"btn btn-default\" [routerLink]='[\"/newpost\"]'>Add Post</a>\n<a class=\"btn btn-default\" [routerLink]='[\"/newlink\"]'>Add Link</a>\n</div>\n<div *ngFor=\"let post of posts\" class=\"postsView\">\n\t<div class=\"votes\">\n\t<span class=\"arrows\" (click)=\"incrementVotes(post)\">▲</span>\n\t<span>{{post.votes}}</span>\n\t<span class=\"arrows\" (click)=\"decrementVotes(post)\">▼</span>\n\t</div>\n  <div class=\"post\"><a *ngIf=\"post.link\" href={{post.link}} (click)=\"onSelectPost(post)\" target=\"_blank\"><h4>{{post.title}}</h4></a>\n  <a *ngIf=\"!post.link\" (click)=\"onSelectPost(post)\"><h4>{{post.title}}</h4></a>\n  <div><h6> added {{post.date}} by <span class=\"author\">{{post.author}}</span></h6></div>\n  <div><h6>{{post.comments}} comments</h6></div>\n  </div>\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n<div class=\"form-group\">\n<label>Username</label>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n</div>\n<div class=\"form-group\">\n<label>Password</label>\n<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n</div>\n<input type=\"submit\" class=\"btn btn-default\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapsed\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">reddit app</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        \t<ul class=\"nav navbar-nav navbar-left\">\n        \t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]='[\"/\"]'>Home</a></li>\n        \t</ul>\n        \t<ul class=\"nav navbar-nav navbar-right\">\n        \t\t<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['profile']\" >Profile</a></li>\n\n        \t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['login']\">Login</a></li>\n\n        \t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['register']\">Register</a>\n        \t\t</li>\t\t\n                <li *ngIf=\"authService.loggedIn()\"><a (click)='onLogoutClick()' href=\"#\">Logout</a>\n                </li>   \n        \t</ul>\n        </div>\n    </div>\n</nav>        \t\t\n\n\n\n\n\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"postView\">\n<section class=\"postContent\">\n<h2>{{post[0][0].title}}</h2>\n<p>{{post[0][0].content}}</p>\n</section>\n<div class=\"postLine\"></div>\n<section class=\"comments\"><h4>Comments</h4>\n<form (submit)=\"onCommentSubmit()\">\n\t<input type=\"text\" [(ngModel)]=\"comment\" name=\"comment\" placeholder=\"Add comment...\">\n\t<input type=\"submit\" name=\"submit\" class=\"btn btn-default\">\n</form>\n\t<div *ngFor=\"let comment of post[1]\" class=\"commentList\">\t\t\n\t\t<div class=\"commentView\">\t\n\t\t<li class=\"postAuthor\">\n\t\t<strong> {{comment.authorUsername}}\n\t\t</strong> <i>{{comment.date}}</i>\n\t\t</li>\n\t\t<li>{{comment.comment}}</li>\n\t\t</div>\n\t\t<div class=\"points\">\n\t\t<span (click)=\"incrementVotes(comment)\">▲</span>\n\t\t<span>{{comment.votes}}</span>\t\t\n\t\t<span (click)=\"decrementVotes(comment)\">▼</span>\n\t\t</div>\n\t</div>\n<div class=\"lastLine\"></div>\n</section>\n</div>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"profile\">\n\t<h2 class=\"page-header\">{{profile[0][0].username}}</h2>\n\t<ul class=\"list-group\" *ngFor=\"let post of profile[1]\">\n\t\t<li class=\"list-group-item\">{{post.title}}<a class=\"btn btn-danger\" (click)=\"onDeleteClick(post._id)\">delete</a></li>\n\t</ul>\n</div>\t"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n\n<form (submit)=\"onRegisterSubmit()\">\n<div class=\"form-group\">\n\t<label>Username</label>\n\t<input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\">\n</div>\n<div class=\"form-group\">\n\t<label>Email</label>\n\t<input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\">\n</div>\n<div class=\"form-group\">\n\t<label>Password</label>\n\t<input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\">\n</div>\n<input type=\"submit\" value=\"Submit\" class=\"btn btn-default\" >\n</form>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getPosts = function () {
        return this.http.get('home').map(function (res) { return res.json(); });
    };
    PostService.prototype.addPost = function (newPost) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('newpost', newPost, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.addLink = function (newLink) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('newpost', newLink, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.deletePost = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('delete/' + id).map(function (res) { return res.json(); });
    };
    PostService.prototype.addVote = function (post, userID) {
        var user = {
            id: userID
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('upvote/' + post._id, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.removeVote = function (post, userID) {
        var user = {
            id: userID
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('downvote/' + post._id, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.getPost = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('post/' + id).map(function (res) { return res.json(); });
    };
    PostService.prototype.postComment = function (comment, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('post/' + id, comment, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.removeCommentVote = function (comment, userID) {
        var id = {
            voterID: userID
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('commentdown/' + comment._id, id, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.addCommentVote = function (comment, userID) {
        var id = {
            voterID: userID
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('commentup/' + comment._id, id, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PostService);
    return PostService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Karol/Desktop/Angular/redditclone/angular-src/src/post.service.js.map

/***/ })

},[715]);
//# sourceMappingURL=main.bundle.map