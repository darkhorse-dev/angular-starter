/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import {Menu, MenuItem} from "./";

describe('Notification', () => {
    it('should create an instance', () => {
        expect(new Menu()).toBeTruthy();
    });

    it('should return menuItems sorted by index', () => {
        let menu : Menu  = new Menu();
        menu.addMenuItem(new MenuItem(2, '/' ,'Home', true, true));
        menu.addMenuItem(new MenuItem(1, '/' ,'Go', true, true));
        let menuItems :MenuItem[]=menu.menuItems;
        expect(menuItems[0].index).toBe(1);
        expect(menuItems[1].index).toBe(2);
    });

});
