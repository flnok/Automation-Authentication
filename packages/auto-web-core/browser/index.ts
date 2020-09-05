import DefaultDriver from './driver/DefaultDriver';
import IDriver from './driver/IDriver';
import BrowserObject = WebdriverIO.BrowserObject;

export const driver: IDriver = new DefaultDriver(browser);

const wrappedExpect = (obj: BrowserObject): any => {
  if (obj instanceof DefaultDriver) {
    return global.expect(driver.getClientDriver());
  }
  return global.expect(obj);
};

export const expect = wrappedExpect as jest.Expect;

