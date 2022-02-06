import { Selector, t } from 'testcafe';
//Page models/components for Login page.
class LoginObject {
  constructor () {
    this.emailInput = Selector('input').withAttribute('type', 'email');
    this.passwordInput = Selector('input').withAttribute('type', 'password');
    this.loginButton = Selector('button').withText('Log in');

  }
}

export default new LoginObject();
