import { TableDefinition, When } from 'cucumber';
import faker from 'faker';

When(/^I sign up with the information as below:$/, async function (
  table: TableDefinition
) {
  const password =
    table.rowsHash().password !== 'random'
      ? table.rowsHash().password
      : `${faker.name.firstName()}${faker.internet.color()}`;
  const firstName =
    table.rowsHash().first_name !== 'random'
      ? table.rowsHash().first_name
      : faker.name.firstName();
  const lastName =
    table.rowsHash().last_name !== 'random'
      ? table.rowsHash().last_name
      : faker.name.lastName();
  const birth = table.rowsHash().birthday;
  const gender = table.rowsHash().gender;
  const emailOrPhone = (userName: string) => {
    if (userName === 'random_email') {
      return faker.internet.email();
    } else if (userName === 'random_phone') {
      return `0${faker.finance.amount(100000000, 999999999, 0)}`;
    } else {
      return userName;
    }
  };
  const passwordConf =
    table.rowsHash().confirm_password !== 'random'
      ? table.rowsHash().confirm_password
      : password;
  this.page.signUp(
    firstName,
    lastName,
    birth,
    gender,
    emailOrPhone(table.rowsHash().email_or_phone),
    password,
    passwordConf
  );
});
