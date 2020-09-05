import PageObject from '../../pageobject/PageObject';
import AbstractPageObject from '../../pageobject/AbstractPageObject';
const axios = require('axios').default;

@PageObject({ url: ' ' })
class SignUpAPIPage extends AbstractPageObject {
  async signUp(path: string, body: string) {
    try {
      const response = await axios.post(path, body);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async getCode(path: string, body: string) {
    try {
      const response = await axios.post(path, body);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async verifyCode(path: string, body: string) {
    try {
      const response = await axios.post(path, body);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
