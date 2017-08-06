/* tslint:disable:no-unused-variable */
"use strict";
var _1 = require("./");
describe('Notification', function () {
    it('should create an instance', function () {
        expect(new _1.Menu()).toBeTruthy();
    });
    it('should return menuItems sorted by index', function () {
        var menu = new _1.Menu();
        menu.addMenuItem(new _1.MenuItem(2, '/', 'Home', true, true));
        menu.addMenuItem(new _1.MenuItem(1, '/', 'Go', true, true));
        var menuItems = menu.menuItems;
        expect(menuItems[0].index).toBe(1);
        expect(menuItems[1].index).toBe(2);
    });
});
//# sourceMappingURL=menu.model.spec.js.map