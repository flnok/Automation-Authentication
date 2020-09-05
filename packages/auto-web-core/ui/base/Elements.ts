import { Element } from '../../index';

export default class Elements {
  constructor(private el: Element) {}

  selected(index: number) {
    this.el.$$('label')[index].click();
  }
}
