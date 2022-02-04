import { Role, Selector, t } from 'testcafe';
import * as dotenv from 'dotenv';
import { env } from 'process';
require('dotenv').config()

//Create User Role.
export const user = Role('https://giphy.com/login', async t => {
    await login(process.env.USER_NAME, process.env.PASSWORD)
});

async function login(userName, password) {
  const cookiesNotice = Selector('button').withAttribute('id', 'didomi-notice-agree-button');

  if(await cookiesNotice.exists)
    await t.click(cookiesNotice);

  await t
    .typeText(Selector('input').withAttribute('type', 'email'), userName)
    .typeText(Selector('input').withAttribute('type', 'password'), password)
    .click(Selector('button').withText('Log in'));
};
