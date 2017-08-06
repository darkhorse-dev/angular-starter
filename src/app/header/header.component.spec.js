/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var header_component_1 = require('./header.component');
var config_service_1 = require("../shared/services/config.service");
describe('Component: Header', function () {
    it('should create an instance', testing_1.inject([config_service_1.ConfigService], function (configService) {
        var component = new header_component_1.HeaderComponent(configService);
        expect(component).toBeTruthy();
    }));
});
//# sourceMappingURL=header.component.spec.js.map