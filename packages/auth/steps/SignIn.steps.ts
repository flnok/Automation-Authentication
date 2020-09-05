import { TableDefinition, When } from 'cucumber';

When(/^I login with the credential information as below:$/, async function (
  table: TableDefinition
) {
  this.page.login(table.rowsHash().username, table.rowsHash().password);
});
