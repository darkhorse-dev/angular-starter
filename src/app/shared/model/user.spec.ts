/* tslint:disable:no-unused-variable */

import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('name', 'organisation', 'organisationFullName', ['VisitDeclarant, CargoDeclarant'], ['ote.shipoperator','ote.cargohandlingagent'], 'nl')).toBeTruthy();
  });
});
