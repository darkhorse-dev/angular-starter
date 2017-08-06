"use strict";
var MenuItem = (function () {
    function MenuItem(index, link, label, selected, visible) {
        this.index = index;
        this.link = link;
        this.label = label;
        this.selected = selected;
        this.visible = visible;
    }
    return MenuItem;
}());
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu-item.model.js.map