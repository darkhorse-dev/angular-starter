import { Component, OnInit } from '@angular/core';
import {Menu} from "../model/menu.model";

@Component({
  selector: 'pb-menu',
  template: `<div id="mainnav" class="main-nav" *ngIf="menu">
                <a class="mobile-menu-trigger" i18n="Menu">Menu</a>
                <ul class="wrapped">
                    <pb-menu-item *ngFor="let menuItem of menu.menuItems" [menuItem]="menuItem"></pb-menu-item>
                </ul>
            </div>`,
  inputs: ['menu']
})
export class MenuComponent implements OnInit {
  public menu : Menu;
  constructor() {}

  ngOnInit() {
  }

}
