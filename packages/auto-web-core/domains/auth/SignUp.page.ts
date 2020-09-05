import PageObject from '../../pageobject/PageObject';
import AbstractPageObject from '../../pageobject/AbstractPageObject';
import { FindByV2 } from '../../browser/locators/FindBy';
import { Element } from '../../index';

@PageObject({
  url: 'sign-up',
})
class SignUpPage extends AbstractPageObject {
  @FindByV2("[placeholder='Tên']")
  private firstNameInput: Element;

  @FindByV2("[placeholder='Họ và tên đệm']")
  private lastNameInput: Element;

  @FindByV2('#SIGN_UP_birthday > div > i')
  private iconCalendarPicker: Element;

  @FindByV2("input[placeholder='Ngày sinh'].ant-calendar-input")
  private birthdayCalendarPicker: Element;

  @FindByV2("[id='SIGN_UP_gender']")
  private genderDropDownList: Element;

  @FindByV2("[placeholder='Số di động hoặc email']")
  private emailOrPhoneInput: Element;

  @FindByV2("[placeholder='Mật khẩu']")
  private passwordInput: Element;

  @FindByV2("[placeholder='Xác nhận mật khẩu']")
  private passwordConfInput: Element;

  @FindByV2("[id=SIGN_UP_agreement] input[class='ant-checkbox-input']")
  private termsCheckBox: Element;

  @FindByV2(
    '/html/body/div[2]/section/section/div/div/div/div[2]/div/div/div/div/form/button'
  )
  private signUpBtn: Element;

  clickTermsCheckBox() {
    this.termsCheckBox.click();
  }

  addBirthday(birthday: string) {
    this.iconCalendarPicker.click();
    this.birthdayCalendarPicker.addValue(birthday);
  }

  chooseGender(gender: string) {
    this.genderDropDownList.click();
    const ariaControls = this.genderDropDownList
      .$('[aria-controls]')
      .getAttribute('aria-controls');
    this.$(`[id='${ariaControls}']`).$(`li=${gender}`).click();
  }

  signUp(
    firstName: string,
    lastName: string,
    birthday: string,
    gender: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    this.firstNameInput.setValue(firstName);
    this.lastNameInput.setValue(lastName);
    this.emailOrPhoneInput.setValue(email);
    this.passwordInput.setValue(password);
    this.passwordConfInput.setValue(confirmPassword);
    this.addBirthday(birthday);
    this.chooseGender(gender);
    this.clickTermsCheckBox();
    this.signUpBtn.click();
  }
}
