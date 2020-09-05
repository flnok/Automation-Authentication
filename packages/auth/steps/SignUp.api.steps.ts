import { When } from 'cucumber';

When(/^I fill information and send$/, async function () {
  const url: string = 'http://qc-api.atalink.com.vn/auth/sign_up';
  const body = {
    first_name: 'Huynhh',
    last_name: 'Anhh',
    birthday: '1997-12-24',
    gender: 'Male',
    email: 'Astonsvillatis2_Dash123@gmail.com',
    password: '$2a$10$5xpWOscZ7wuF.6VpC10use5KHUdB5wJBUqMYoUwih8QrKA//JK8Ui',
  };
  await this.page.signUp(url, body);
});

When(/^I request to get code$/, async function () {
  const url: string =
    'http://qc-api.atalink.com.vn/internal/test/auth/find_verify_email_code';
  const email = 'Astonsvillatis2_Dash123@gmail.com';
  const body = {
    email: email,
    type: 'sign_up',
    user_id: '',
  };
  await this.page.getCode(url, body);
});

When(/^I request to verify code$/, async function () {
  const url: string = 'http://qc-api.atalink.com.vn/auth/verify_email';
  const email = 'Astonsvillatis2_Dash123@gmail.com';
  const body = {
    user_id: '{{user_id}}',
    email: email,
    password: '$2a$10$5xpWOscZ7wuF.6VpC10use5KHUdB5wJBUqMYoUwih8QrKA//JK8Ui',
    code: '{{somecodehere}}',
    is_signed_in: 'true',
  };
  await this.page.verifyCode(url, body);
});
