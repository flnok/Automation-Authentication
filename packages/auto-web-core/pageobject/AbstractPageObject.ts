import { Matcher } from '@wdio/sync';
import IPageObject from './IPageObject';
import { driver } from '../browser';
import Element from '../browser/element/Element';

export default abstract class AbstractPageObject implements IPageObject {
  $(selector: string | Function | Matcher): Element {
    return driver.$(selector);
  }

  title(): string {
    return driver.title();
  }

  getUrl(): string {
    return driver.getUrl();
  }

  goto(path: string): void {
    return driver.goto(path);
  }

  wait(milliseconds: number | 3000): void {
    return driver.pause(milliseconds);
  }
}
