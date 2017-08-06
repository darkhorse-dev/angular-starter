import { Http } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { ClientConfig } from "../model/client-config";
export declare class ConfigService {
    private http;
    clientConfig: ClientConfig;
    constructor(http: Http);
    getClientConfig(): Observable<ClientConfig>;
    private extractData(res);
}
