import Element from '../element/Element';
import { Matcher, Config, WaitUntilOptions, Timeouts } from '@wdio/sync';

export default interface IDriver {
  config: Config;

  getClientDriver(): any;

  $(selector: string | Function | Matcher): Element;

  goto(path: string): void;

  title(): string;

  getUrl(): string;

  setWindowSize(width: number, height: number): null | object;

  pause(milliseconds: number): void;

  waitUntil(condition: () => Boolean, options?: WaitUntilOptions): boolean;

  setTimeout(timeouts: Timeouts): void;
}
