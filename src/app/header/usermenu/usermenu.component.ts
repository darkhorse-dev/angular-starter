import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/model/user";
import {AuthenticationService} from "../../shared/services/authentication.service";

@Component({
    selector: 'pb-usermenu',
    template: `<ul class="usermenu">
    <li class="user-actions" *ngIf="!isAuthenticated()">
        <h2>
            <a href="#/login" i18n="Login">Login</a>
        </h2>
        <ul>
            <li>
              <span class="user-role" i18n="general-switch-language">
                <span i18n="Switch language">Switch language</span>
                <span><a *ngIf="!isCurrentLanguage('nl')" (click)="changeLanguage('nl')" i18n="Dutch">Dutch</a></span>
                <span><a *ngIf="!isCurrentLanguage('en')" (click)="changeLanguage('en')" i18n="English">English</a></span>
              </span>
            </li>
        </ul>
    </li>

    <li class="user-actions" *ngIf="isAuthenticated()">
        <h2>{{user.name}}</h2>
        <ul>
            <li>
                <span class="user-organisation">{{user.organisation}}</span>
            </li>
            <li>
                <span class="user-role">
                    <span i18n="Switch language">Switch language</span>
                    <span><a *ngIf="user.language!=='nl'" (click)="changeLanguage('nl')" i18n="Dutch">Dutch</a></span>
                    <span><a *ngIf="user.language!=='en'" (click)="changeLanguage('en')" i18n="English">English</a></span>
                </span>
            </li>
            <li class="logout"><a (click)="logout()" i18n="Log out">Log out</a></li>
        </ul>
    </li>
</ul>`,
    styles: [
        `.usermenu {  float: right;}
        .usermenu li {  float: left;  margin: 0;}
        .usermenu h2 a {  color: #FFF;  background-color: transparent;}
        .usermenu li h2 {  display: block;  color: #FFF;  padding: 21px 10px;  font-size: 13px;  -webkit-transition: All 0s ease;  -moz-transition: All 0s ease;  -o-transition: All 0s ease;  transition: All 0s ease;  text-decoration: none;  cursor: pointer;}
        .usermenu li a:hover, .usermenu li:hover, .usermenu li:hover a, .usermenu li:hover h2 {  color: #333;  background-color: #FFF;}
        .user-actions {  width: 180px;  padding-right: 20px;  position: relative;  background: transparent url("images/white_down_arrow.gif") no-repeat 172px center;}
        .user-actions:hover {  background: transparent url("images/down_arrow.gif") no-repeat 172px center;}
        .user-actions h2 {  margin: 0;  font-size: 13px;  border: none;  color: #FFF;  text-transform: capitalize;  line-height: 8px;}
        .user-actions .user-organisation {  display: block;  margin: 0 10px 0;  font-size: 12px;  color: #666;}
        .user-actions .user-role {  display: block;  margin: 0 10px 5px;  font-size: 11px;  color: #999;  font-weight: normal;}
        .user-actions .logout{  border-top: solid 1px #CCC;  padding: 10px 0 0 0;}
        .user-actions h2,.user-actions .user-organisation,.user-actions .user-role { position: relative;  overflow: hidden;  text-overflow: ellipsis;  white-space: nowrap;}
        .user-role span{  display: block;}
        .user-actions ul {  display: none;  width: 100%;  position: absolute;  background: #FFF;  right: 0;  z-index: 9999;  border-bottom: solid 2px #999;  box-shadow: 0 5px 5px #666;}
        .user-actions:hover ul {  display: block;}
        .user-actions ul li {  margin: 0;  float: none;}
        .user-actions li a {  padding: 5px;  margin: 5px 10px;  font-size: 12px;  color: #333;  display: inherit;}
        .user-actions li a:hover {  background: #DDD;}`
    ],
    inputs: ['user']
})
export class UsermenuComponent implements OnInit {
    public user:User;

    constructor(private authenticationService:AuthenticationService) {
    }

    ngOnInit() {
        this.user = this.authenticationService.currentUser;
    }

    isAuthenticated() {
        return this.user != null;
    }

    isCurrentLanguage(language:String) {
        return this.user.language === language;
    }

    changeLanguage(language:string) {
        this.authenticationService.currentUser.language = language;
    }

    logout() {
        this.authenticationService.logout();
    }

}
