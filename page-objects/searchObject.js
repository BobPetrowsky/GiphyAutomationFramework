import { Selector, t } from 'testcafe';
//Page models/components for Search.

class SearchObject {
    constructor () {
      this.searchInput = Selector('div').withAttribute('id','searchbar');
      this.searchButton = Selector('div').withAttribute('data-tid', 'search-bar__button');
    }
    // Function for Search
    async search (input) {
        await t
            .typeText(this.searchInput, input)
            .click(this.searchButton);
    }
}

export default new SearchObject();
