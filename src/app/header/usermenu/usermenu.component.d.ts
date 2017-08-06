import { OnInit } from "@angular/core";
import { User } from "../../shared/model/user";
import { AuthenticationService } from "../../shared/services/authentication.service";
export declare class UsermenuComponent implements OnInit {
    private authenticationService;
    user: User;
    constructor(authenticationService: AuthenticationService);
    ngOnInit(): void;
    isAuthenticated(): boolean;
    isCurrentLanguage(language: String): boolean;
    changeLanguage(language: string): void;
    logout(): void;
}
