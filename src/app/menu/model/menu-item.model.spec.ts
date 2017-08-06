/* tslint:disable:no-unused-variable */

import {MenuItem} from "./menu-item.model";

describe('MenuItem', () => {
    it('should create an instance', () => {
        expect(new MenuItem(1, '/', 'Home', true, true)).toBeTruthy();
    });
});
