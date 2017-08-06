import { OnInit } from "@angular/core";
import { User } from "../shared/model/user";
import { ConfigService } from "../shared/services/config.service";
export declare class HeaderComponent implements OnInit {
    private configService;
    homepageUrl: String;
    user: User;
    constructor(configService: ConfigService);
    ngOnInit(): void;
}
