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
var authentication_service_1 = require("../../shared/services/authentication.service");
var UsermenuComponent = (function () {
    function UsermenuComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    UsermenuComponent.prototype.ngOnInit = function () {
        this.user = this.authenticationService.currentUser;
    };
    UsermenuComponent.prototype.isAuthenticated = function () {
        return this.user != null;
    };
    UsermenuComponent.prototype.isCurrentLanguage = function (language) {
        return this.user.language === language;
    };
    UsermenuComponent.prototype.changeLanguage = function (language) {
        this.authenticationService.currentUser.language = language;
    };
    UsermenuComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    UsermenuComponent = __decorate([
        core_1.Component({
            selector: 'pb-usermenu',
            template: "<ul class=\"usermenu\">\n    <li class=\"user-actions\" *ngIf=\"!isAuthenticated()\">\n        <h2>\n            <a href=\"#/login\" i18n=\"Login\">Login</a>\n        </h2>\n        <ul>\n            <li>\n              <span class=\"user-role\" i18n=\"general-switch-language\">\n                <span i18n=\"Switch language\">Switch language</span>\n                <span><a *ngIf=\"!isCurrentLanguage('nl')\" (click)=\"changeLanguage('nl')\" i18n=\"Dutch\">Dutch</a></span>\n                <span><a *ngIf=\"!isCurrentLanguage('en')\" (click)=\"changeLanguage('en')\" i18n=\"English\">English</a></span>\n              </span>\n            </li>\n        </ul>\n    </li>\n\n    <li class=\"user-actions\" *ngIf=\"isAuthenticated()\">\n        <h2>{{user.name}}</h2>\n        <ul>\n            <li>\n                <span class=\"user-organisation\">{{user.organisation}}</span>\n            </li>\n            <li>\n                <span class=\"user-role\">\n                    <span i18n=\"Switch language\">Switch language</span>\n                    <span><a *ngIf=\"user.language!=='nl'\" (click)=\"changeLanguage('nl')\" i18n=\"Dutch\">Dutch</a></span>\n                    <span><a *ngIf=\"user.language!=='en'\" (click)=\"changeLanguage('en')\" i18n=\"English\">English</a></span>\n                </span>\n            </li>\n            <li class=\"logout\"><a (click)=\"logout()\" i18n=\"Log out\">Log out</a></li>\n        </ul>\n    </li>\n</ul>",
            styles: [
                ".usermenu {  float: right;}\n        .usermenu li {  float: left;  margin: 0;}\n        .usermenu h2 a {  color: #FFF;  background-color: transparent;}\n        .usermenu li h2 {  display: block;  color: #FFF;  padding: 21px 10px;  font-size: 13px;  -webkit-transition: All 0s ease;  -moz-transition: All 0s ease;  -o-transition: All 0s ease;  transition: All 0s ease;  text-decoration: none;  cursor: pointer;}\n        .usermenu li a:hover, .usermenu li:hover, .usermenu li:hover a, .usermenu li:hover h2 {  color: #333;  background-color: #FFF;}\n        .user-actions {  width: 180px;  padding-right: 20px;  position: relative;  background: transparent url(\"images/white_down_arrow.gif\") no-repeat 172px center;}\n        .user-actions:hover {  background: transparent url(\"images/down_arrow.gif\") no-repeat 172px center;}\n        .user-actions h2 {  margin: 0;  font-size: 13px;  border: none;  color: #FFF;  text-transform: capitalize;  line-height: 8px;}\n        .user-actions .user-organisation {  display: block;  margin: 0 10px 0;  font-size: 12px;  color: #666;}\n        .user-actions .user-role {  display: block;  margin: 0 10px 5px;  font-size: 11px;  color: #999;  font-weight: normal;}\n        .user-actions .logout{  border-top: solid 1px #CCC;  padding: 10px 0 0 0;}\n        .user-actions h2,.user-actions .user-organisation,.user-actions .user-role { position: relative;  overflow: hidden;  text-overflow: ellipsis;  white-space: nowrap;}\n        .user-role span{  display: block;}\n        .user-actions ul {  display: none;  width: 100%;  position: absolute;  background: #FFF;  right: 0;  z-index: 9999;  border-bottom: solid 2px #999;  box-shadow: 0 5px 5px #666;}\n        .user-actions:hover ul {  display: block;}\n        .user-actions ul li {  margin: 0;  float: none;}\n        .user-actions li a {  padding: 5px;  margin: 5px 10px;  font-size: 12px;  color: #333;  display: inherit;}\n        .user-actions li a:hover {  background: #DDD;}"
            ],
            inputs: ['user']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], UsermenuComponent);
    return UsermenuComponent;
}());
exports.UsermenuComponent = UsermenuComponent;
//# sourceMappingURL=usermenu.component.js.map