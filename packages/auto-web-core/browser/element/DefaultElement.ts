import { Element as WebdriverIOElement, Matcher } from '@wdio/sync';
import Element from './Element';

class DefaultElement implements Element {
  constructor(private el: WebdriverIOElement) {}

  $(selector: string | Function | Matcher): Element {
    return new DefaultElement(this.el.$(selector));
  }

  $$(selector: string | Function | Matcher): Element[] {
    return [];
  }
  click(options?: WebdriverIO.ClickOptions): void {
    return this.el.click(options);
  }

  addValue(value: string | number | boolean | object | any[]): void {
    return this.el.addValue(value);
  }

  getText(): string {
    return this.el.getText();
  }

  getAttribute(attributeName: string): string {
    return this.el.getAttribute(attributeName);
  }

  setValue(value: string | number | boolean | object | any[]): void {
    return this.el.setValue(value);
  }
}
