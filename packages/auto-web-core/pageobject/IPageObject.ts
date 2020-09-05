import { Matcher } from '@wdio/sync';
import Element from '../browser/element/Element';

export default interface IPageObject {
  title(): string;
  $(selector: string | Function | Matcher): Element;
  getUrl(): string;
  goto(path: string): void;
  wait(milliseconds: number): void;
}
