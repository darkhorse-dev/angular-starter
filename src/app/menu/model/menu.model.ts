import {MenuItem} from "./menu-item.model";
export class Menu {
  public menuItems : MenuItem[] = [];
  private items : MenuItem[] =[];
  constructor() {

  }

  addMenuItem(menuItem:MenuItem){
    this.items.push(menuItem);
    this.sortMenuItems();
  }

  sortMenuItems(){
    this.menuItems = this.items.sort(function(menuItem1 :MenuItem, menuItem2 :MenuItem){
      return menuItem1.index - menuItem2.index;
    });
  }
}
