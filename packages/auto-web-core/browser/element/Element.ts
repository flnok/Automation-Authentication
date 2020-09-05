import { ClickOptions, Matcher } from '@wdio/sync';
export default interface Element {
  $(selector: string | Function | Matcher): Element;
  $$(selector: string | Function | Matcher): Element[];
  click(options?: ClickOptions): void;
  addValue(value: string | number | boolean | object | any[]): void;
  getText(): string;
  getAttribute(attributeName: string): string;
  setValue(value: string | number | boolean | object | any[]): void;
}
