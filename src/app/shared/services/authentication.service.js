"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Subject_1 = require("rxjs/Subject");
var user_1 = require("../model/user");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var config_service_1 = require("./config.service");
var authenticated_http_1 = require("./authenticated.http");
var AuthenticationService = (function () {
    function AuthenticationService(http, authenticatedHttp, configService) {
        this.http = http;
        this.authenticatedHttp = authenticatedHttp;
        this.configService = configService;
        this.userSource = new Subject_1.Subject();
        this.user = this.userSource.asObservable();
        this.currentUser = null;
        this.configSource = new Subject_1.Subject();
        this.clientConfig = this.configSource.asObservable();
        this.config = null;
        this.status = null;
        console.log('Authentcationserver constructed');
        this.startup();
    }
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        console.log('logging out');
        this.user = null;
        ng2_cookies_1.Cookie.set('pcssso', '', -1);
        sessionStorage.removeItem('pcsssotoken');
        this.authenticatedHttp.post('/security-api/logout', '').subscribe(function (result) { return location.href = _this.config.homePageUrl; }, function (error) {
            console.warn('logout failed');
            location.href = _this.config.homePageUrl;
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.user !== null;
    };
    AuthenticationService.prototype.updateUser = function (user) {
        this.userSource.next(user);
        this.currentUser = user;
    };
    AuthenticationService.prototype.getUserProfile = function () {
        return this.authenticatedHttp.get('/security-api/userprofile')
            .map(this.extractData);
    };
    AuthenticationService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        if (body.success) {
            var result = body.result;
            return new user_1.User(result.fullName, result.organisationShortname, result.organisationFullname, result.roles, result.organisationTypes, result.language);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.getUserProfileAndClientConfig = function () {
        var _this = this;
        this.getUserProfile()
            .subscribe(function (user) {
            _this.updateUser(user);
            _this.getClientConfig();
        }, function (error) { return _this.errorHandling(error); });
    };
    AuthenticationService.prototype.getClientConfig = function () {
        var _this = this;
        this.configService.getClientConfig()
            .subscribe(function (config) {
            _this.configSource.next(config);
            _this.config = config;
        }, function (error) { return _this.errorHandling(error); });
    };
    AuthenticationService.prototype.startup = function () {
        this.token = ng2_cookies_1.Cookie.get('pcssso');
        if (this.token !== null) {
            this.getUserProfileAndClientConfig();
        }
        else {
            this.token = sessionStorage.getItem('pcsssotoken');
            if (this.token !== null) {
                if (this.user != null)
                    this.getUserProfileAndClientConfig();
            }
            else {
                this.configService.getClientConfig()
                    .subscribe(function (config) { return location.href = config.homePageUrl; });
            }
        }
    };
    AuthenticationService.prototype.errorHandling = function (errorResponse) {
        var _this = this;
        var status = errorResponse.status;
        if (status === 401 || status === 403) {
            this.configService.getClientConfig()
                .subscribe(function (config) { return location.href = config.homePageUrl; }, function (error) { return _this.errorHandling(error); });
        }
        else {
            console.log('Service not avalailable, status: ' + status);
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, authenticated_http_1.AuthenticatedHttp, config_service_1.ConfigService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map