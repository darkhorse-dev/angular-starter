import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {ClientConfig} from "../model/client-config";
import {User} from "../model/user";
import {Cookie} from "ng2-cookies/ng2-cookies";
import {ConfigService} from "./config.service";
import {AuthenticatedHttp} from "./authenticated.http";

@Injectable()
export class AuthenticationService {
  private token:string;
  private userSource = new Subject<User>();
  user = this.userSource.asObservable();
  currentUser: User=null;

  private configSource = new Subject<ClientConfig>();
  clientConfig = this.configSource.asObservable();
  config:ClientConfig = null;

  private status:number = null;

  constructor(private http:Http, private authenticatedHttp:AuthenticatedHttp, private configService:ConfigService) {
    console.log('Authentcationserver constructed');
    this.startup();
  }

  logout() {
    console.log('logging out');
    this.user = null;
    Cookie.set('pcssso', '' ,-1);
    sessionStorage.removeItem('pcsssotoken');
    this.authenticatedHttp.post('/security-api/logout','').subscribe(
        result => location.href = this.config.homePageUrl,
        error =>{
          console.warn('logout failed');
          location.href = this.config.homePageUrl
        }
    );
  }

  isAuthenticated() {
    return this.user !== null;
  }

  private updateUser(user:User) {
    this.userSource.next(user);
    this.currentUser=user;
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("failed to get UserProfile: " + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getUserProfile():Observable<User> {
    return this.authenticatedHttp.get('/security-api/userprofile')
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res:Response) {
    console.log(res);
    let body = res.json();
    if (body.success) {
      let result = body.result;
      return new User(result.fullName, result.organisationShortname, result.organisationFullname, result.roles, result.organisationTypes, result.language);
    } else {
      return null;
    }
  }

  private getUserProfileAndClientConfig() {
    this.getUserProfile()
      .subscribe(
        user => {
          this.updateUser(user);
          this.getClientConfig();
        },
        error => this.errorHandling(error)
      );
  }

  private getClientConfig() {
    this.configService.getClientConfig()
      .subscribe(
        config => {
          this.configSource.next(config);
          this.config = config;
        },
        error => this.errorHandling(error)
      );
  }

  startup():any {
      this.token = Cookie.get('pcssso');
      if (this.token !== null) {
        this.getUserProfileAndClientConfig();
      } else {
        this.token = sessionStorage.getItem('pcsssotoken');
        if (this.token !== null) {
          if (this.user != null)
            this.getUserProfileAndClientConfig();
        } else {
          this.configService.getClientConfig()
            .subscribe(
              config => location.href = config.homePageUrl
            );
        }
      }
  }

  private errorHandling(errorResponse:Response) {
    let status = errorResponse.status;
    if (status === 401 || status === 403) {
      this.configService.getClientConfig()
        .subscribe(
          config => location.href = config.homePageUrl,
          error => this.errorHandling(error)
        );
    } else {
      console.log('Service not avalailable, status: ' + status);
    }
  }
}
