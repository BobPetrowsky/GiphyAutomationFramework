import searchObject from '../page-objects/searchObject.js';
import resultObject from '../page-objects/resultObject.js';
import { user } from '../Roles/userRole.js';

fixture`Search`
    .page`https://giphy.com/`;
// Simple search test loging in as a user searching using a function and validating match on results
test('Simple Search Test', async t => {
    // login user
    await t.useRole(user);
    // Use search function to search input
    await searchObject.search("Hello World");
    // Check the results 
    await t.expect(resultObject.resultsTitle.innerText).contains('Hello World');
});
