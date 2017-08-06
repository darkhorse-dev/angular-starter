import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../model/menu-item.model";

@Component({
  selector: 'pb-menu-item',
  template: `<li [ngClass]="{'selected':menuItem.selected}" *ngIf="menuItem.visible">
              <a href="" i18n="{{menuItem.label}}">Test</a>
            </li>`,
  inputs: ['menuItem']
})
export class MenuItemComponent implements OnInit {
  public menuItem : MenuItem;
  constructor() {}

  ngOnInit() {
  }

}
