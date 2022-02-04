import { Selector, t } from 'testcafe';
//Page models/components for Login page.
class LoginObject {
  constructor () {
    this.emailInput = Selector('input').withAttribute('type', 'email');
    this.passwordInput = Selector('input').withAttribute('type', 'password');

  }
}

export default new LoginObject();
