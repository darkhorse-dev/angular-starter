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
var config_service_1 = require("../shared/services/config.service");
var HeaderComponent = (function () {
    function HeaderComponent(configService) {
        this.configService = configService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.configService.clientConfig == null) {
            this.configService.getClientConfig().subscribe(function (config) { return _this.homepageUrl = config.homePageUrl; });
        }
        else {
            this.homepageUrl = this.configService.clientConfig.homePageUrl;
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'pb-header',
            template: "<div id=\"mainheader\" class=\"mainheader\">\n                  <div class=\"headernav wrapped\">\n                    <div class=\"portbase-logo\">\n                      <a [href]=\"homepageUrl\"><img src=\"app/images/logo-portbase.png\" alt=\"Portbase logo\"/></a>\n                      <span i18n=\"Notification management\">Notification management</span>\n                    </div>\n                    <pb-usermenu *ngIf=\"user\" [user]=\"user\"></pb-usermenu>\n                  </div>\n                </div>",
            styles: [".mainheader,.mainheader .wrapped {  background: #004462;}\n            .headernav {  height: 50px;}\n            .portbase-logo {  float: left;  color: #FFF;  margin: 7px 0;}\n            .portbase-logo span {  font-size: 20px;  font-weight: normal;  line-height: 34px;  vertical-align: top;  margin-left: 10px;  padding-left: 15px;  border-left: solid 1px #FFF;}"],
            inputs: ['user']
        }), 
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map