import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {ClientConfig} from "../model/client-config";

@Injectable()
export class ConfigService {
  clientConfig:ClientConfig = null;

  constructor(private http:Http) {
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("failed to get ClientConfig: " + errMsg); // log to console instead
//    return Observable.throw(errMsg);
    return null;
  }

  getClientConfig():Observable<ClientConfig> {
    return this.http.get( '/referencedata-api/api/clientconfig')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    if (body && body.success) {
      let result = body.result;
      this.clientConfig = new ClientConfig(result.changePasswordUrl, result.homePageUrl);
      return this.clientConfig;
    }
    return null;
  }

}
