"use strict";
var Menu = (function () {
    function Menu() {
        this.menuItems = [];
        this.items = [];
    }
    Menu.prototype.addMenuItem = function (menuItem) {
        this.items.push(menuItem);
        this.sortMenuItems();
    };
    Menu.prototype.sortMenuItems = function () {
        this.menuItems = this.items.sort(function (menuItem1, menuItem2) {
            return menuItem1.index - menuItem2.index;
        });
    };
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=menu.model.js.map