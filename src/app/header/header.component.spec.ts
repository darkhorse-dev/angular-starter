/* tslint:disable:no-unused-variable */

import { inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {ConfigService} from "../shared/services/config.service";

describe('Component: Header', () => {
  it('should create an instance', inject([ConfigService], (configService: ConfigService) => {
    let component = new HeaderComponent(configService);
    expect(component).toBeTruthy();
  }));
});
