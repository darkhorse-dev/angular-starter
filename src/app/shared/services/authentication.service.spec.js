/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var authentication_service_1 = require("./authentication.service");
describe('Authorisation Service', function () {
    beforeEach(function () {
        testing_1.addProviders([authentication_service_1.AuthenticationService]);
    });
    it('should ...', testing_1.inject([authentication_service_1.AuthenticationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=authentication.service.spec.js.map