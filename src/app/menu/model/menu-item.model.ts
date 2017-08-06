export class MenuItem {
  index: number;
  link: string;
  label: string;
  selected: boolean;
  visible: boolean;

  constructor(index: number, link: string, label: string, selected: boolean, visible: boolean) {
    this.index = index;
    this.link = link;
    this.label = label;
    this.selected = selected;
    this.visible = visible;
  }
}
