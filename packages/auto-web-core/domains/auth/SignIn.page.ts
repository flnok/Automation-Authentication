import PageObject from '../../pageobject/PageObject';
import AbstractPageObject from '../../pageobject/AbstractPageObject';
import { FindByV2 } from '../../browser/locators/FindBy';
import { Element } from '../../index';

@PageObject({
  url: 'sign-in',
})
class SignInPage extends AbstractPageObject {
  @FindByV2('[placeholder="Nhập số di động hoặc email"]')
  private emailInput: Element;

  @FindByV2('[placeholder="Nhập mật khẩu"]')
  private passwordInput: Element;

  @FindByV2(
    '/html/body/div[2]/section/section/div/div/div/div/div[2]/div/div/div/div/div[1]/form/button'
  )
  private loginBtn: Element;

  enterEmail(email: string) {
    this.emailInput.setValue(email);
  }

  enterPassword(pass: string) {
    this.passwordInput.setValue(pass);
  }

  clickSignInButton() {
    this.loginBtn.click();
  }

  login(email: string, password: string) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickSignInButton();
  }
}
