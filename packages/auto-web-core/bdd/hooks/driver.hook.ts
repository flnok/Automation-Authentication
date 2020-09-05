import { BeforeAll } from 'cucumber';

BeforeAll(async function () {
  browser.maximizeWindow();
});
