/* tslint:disable:no-unused-variable */
"use strict";
var user_1 = require('./user');
describe('User', function () {
    it('should create an instance', function () {
        expect(new user_1.User('name', 'organisation', 'organisationFullName', ['VisitDeclarant, CargoDeclarant'], ['ote.shipoperator', 'ote.cargohandlingagent'], 'nl')).toBeTruthy();
    });
});
//# sourceMappingURL=user.spec.js.map