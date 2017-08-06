/* tslint:disable:no-unused-variable */

import {ClientConfig} from './client-config';

describe('ClientConfig', () => {
  it('should create an instance', () => {
    expect(new ClientConfig('name','url')).toBeTruthy();
  });
});
