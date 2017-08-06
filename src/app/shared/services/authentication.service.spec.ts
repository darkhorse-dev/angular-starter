/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import {AuthenticationService} from "./authentication.service";

describe('Authorisation Service', () => {
  beforeEach(() => {
    addProviders([AuthenticationService]);
  });
  it('should ...',
      inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
