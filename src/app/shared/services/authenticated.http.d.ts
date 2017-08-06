import {Http, Headers} from '@angular/http';
import {Cookie} from 'ng2-cookies/ng2-cookies'
import 'rxjs/Rx';
export declare class AuthenticatedHttp{
    private http;
    constructor(http: Http);
    createHeaders(headers:Headers);
    get(url : string);
    post(url: string , data :any);
    delete(url :string);
}
