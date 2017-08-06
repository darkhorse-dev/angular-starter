import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Cookie} from 'ng2-cookies/ng2-cookies'
import 'rxjs/Rx';

@Injectable()
export class AuthenticatedHttp{

  constructor(private http: Http) {
  }

  createHeaders(headers:Headers) {
    let token :String =sessionStorage.getItem('pcsssoToken');
    if(token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    else{
      let cookieToken = Cookie.get('pcssso');
      if (cookieToken != null){
        headers.append('Authorization', 'Bearer ' + cookieToken);
      }
    }
    headers.set('Content-Type', 'application/json;charset=UTF-8');
  }


  get(url : string) {
    let headers = new Headers();
    this.createHeaders(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url: string , data :any) {
    let headers = new Headers();
    this.createHeaders(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  delete(url :string) {
    let headers = new Headers();
    this.createHeaders(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }
}
