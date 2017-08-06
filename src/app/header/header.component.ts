import {Component, OnInit} from "@angular/core";
import {User} from "../shared/model/user";
import {ConfigService} from "../shared/services/config.service";

@Component({
    selector: 'pb-header',
    template: `<div id="mainheader" class="mainheader">
                  <div class="headernav wrapped">
                    <div class="portbase-logo">
                      <a [href]="homepageUrl"><img style="width:19%" src="assets/img/portbase-logo.png" alt="Portbase logo"/></a>
                      <span i18n="Notification management">Notification management</span>
                    </div>
                    <pb-usermenu *ngIf="user" [user]="user"></pb-usermenu>
                  </div>
                </div>`,
    styles: [`.mainheader,.mainheader .wrapped {  background: #004462;}
            .headernav {  height: 50px;}
            .portbase-logo {  float: left;  color: #FFF;  margin: 7px 0;}
            .portbase-logo span {  font-size: 20px;  font-weight: normal;  line-height: 34px;  vertical-align: top;  margin-left: 10px;  padding-left: 15px;  border-left: solid 1px #FFF;}`],
    inputs: ['user']
})
export class HeaderComponent implements OnInit {
    homepageUrl:String;
    public user:User;

    constructor(private configService:ConfigService) {
    }

    ngOnInit() {
        if (this.configService.clientConfig == null) {
            this.configService.getClientConfig().subscribe(
                config => this.homepageUrl = config.homePageUrl
        )
        } else {
            this.homepageUrl = this.configService.clientConfig.homePageUrl;
        }
    }
}
