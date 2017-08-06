/* tslint:disable:no-unused-variable */

import { inject } from '@angular/core/testing';


import { UsermenuComponent } from './usermenu.component';
import {AuthenticationService} from "../../shared/services/authentication.service";

describe('Component: Menu', () => {
  it('should create an instance', inject([AuthenticationService], (authenticationService: AuthenticationService) => {
    let component = new UsermenuComponent(authenticationService);
    expect(component).toBeTruthy();
  }));
});
