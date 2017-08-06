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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
require('rxjs/Rx');
var AuthenticatedHttp = (function () {
    function AuthenticatedHttp(http) {
        this.http = http;
    }
    AuthenticatedHttp.prototype.createHeaders = function (headers) {
        var token = sessionStorage.getItem('pcsssoToken');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        else {
            var cookieToken = ng2_cookies_1.Cookie.get('pcssso');
            if (cookieToken != null) {
                headers.append('Authorization', 'Bearer ' + cookieToken);
            }
        }
        headers.set('Content-Type', 'application/json;charset=UTF-8');
    };
    AuthenticatedHttp.prototype.get = function (url) {
        var headers = new http_1.Headers();
        this.createHeaders(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    AuthenticatedHttp.prototype.post = function (url, data) {
        var headers = new http_1.Headers();
        this.createHeaders(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    AuthenticatedHttp.prototype.delete = function (url) {
        var headers = new http_1.Headers();
        this.createHeaders(headers);
        return this.http.delete(url, {
            headers: headers
        });
    };
    AuthenticatedHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthenticatedHttp);
    return AuthenticatedHttp;
}());
exports.AuthenticatedHttp = AuthenticatedHttp;
//# sourceMappingURL=authenticated.http.js.map