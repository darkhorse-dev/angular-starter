/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('Config Service', () => {
  beforeEach(() => {
    addProviders([ConfigService]);
  });
  it('should ...',
      inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
