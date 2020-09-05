import IDriver from './IDriver';
import { BrowserObject, Config, Timeouts, WaitUntilOptions } from '@wdio/sync';
import Element from '../element/Element';

export default class DefaultDriver implements IDriver {
  constructor(private driver: BrowserObject) {}

  config: Config = this.driver.config;

  getClientDriver() {
    return this.driver;
  }

  $(selector: string): Element {
    return this.driver.$(selector);
  }

  goto(path: string): void {
    this.driver.url(path);
  }

  title(): string {
    return this.driver.getTitle();
  }

  getUrl(): string {
    return this.driver.getUrl();
  }

  setWindowSize(width: number, height: number): object | null {
    return this.driver.setWindowSize(width, height);
  }

  pause(milliseconds: number): void {
    return this.driver.pause(milliseconds);
  }

  waitUntil(condition: () => Boolean, options?: WaitUntilOptions): boolean {
    return this.driver.waitUntil(condition, options);
  }

  setTimeout(timeouts: Timeouts): void {
    return this.driver.setTimeout(timeouts);
  }
}
