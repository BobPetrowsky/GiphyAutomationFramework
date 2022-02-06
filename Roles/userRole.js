import { Role, Selector, t } from 'testcafe';
import loginObject from '../page-objects/loginObject.js';
require('dotenv').config()

//Create User Role
export const user = Role('https://giphy.com/login', async t => {
    await login(process.env.USER_NAME, process.env.PASSWORD)
});
// Login Function
async function login(userName, password) {
  const cookiesNotice = Selector('button').withAttribute('id', 'didomi-notice-agree-button');
  // Check if coockies notice is on page and if so get rid of it
  if(await cookiesNotice.exists)
    await t.click(cookiesNotice);

  await t
    .typeText(loginObject.emailInput, userName)
    .typeText(loginObject.passwordInput, password)
    .click(loginObject.loginButton);
};
