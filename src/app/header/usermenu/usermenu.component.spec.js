/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var usermenu_component_1 = require('./usermenu.component');
var authentication_service_1 = require("../../shared/services/authentication.service");
describe('Component: Menu', function () {
    it('should create an instance', testing_1.inject([authentication_service_1.AuthenticationService], function (authenticationService) {
        var component = new usermenu_component_1.UsermenuComponent(authenticationService);
        expect(component).toBeTruthy();
    }));
});
//# sourceMappingURL=usermenu.component.spec.js.map