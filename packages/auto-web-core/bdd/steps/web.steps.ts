import { When, Given } from 'cucumber';
import { driver, expect } from '../../browser';
import { PageObjectHolder } from '../../pageobject/PageObject';
import { Then } from 'cucumber';

Given(/^I visit (.*) page$/, async function (page: string) {
  const pageCfg = PageObjectHolder[page];
  this.page = new pageCfg.page();
  this.page.goto(pageCfg.cfg.url);
});

Then(/^I am notified (.*)$/, function (message: string) {
  expect(driver.$(`div=${message}`)).toBeDisplayed();
});

Then(/^I may see (.*)$/, function (message: string) {
  expect(driver.$(`[href="${message}"]`)).toBeDisplayed();
});

Then('I get http code successfully', function () {
  return true;
});

Then('I success to get verified code', function () {
  return true;
});

Then('I success to verify code', function () {
  return true;
});
