import { MenuItem } from "./menu-item.model";
export declare class Menu {
    menuItems: MenuItem[];
    private items;
    constructor();
    addMenuItem(menuItem: MenuItem): void;
    sortMenuItems(): void;
}
