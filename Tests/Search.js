import searchObject from '../page-objects/searchObject.js';
import resultObject from '../page-objects/resultObject.js';
import { user } from '../Roles/userRole.js';

fixture`Search`
    .page`https://giphy.com/`;
//Simple search test loging in as a user searching using a function and validating match on results.
test('Simple Search Test', async t => {
    await t.useRole(user);
    await searchObject.search("Hello World");
    await t.expect(resultObject.resultsTitle.innerText).contains('Hello World');
});
