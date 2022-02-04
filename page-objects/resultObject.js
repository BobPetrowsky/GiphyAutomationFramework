import { Selector, t } from 'testcafe';
//Page models/components for Search Results. 
class ResultObject {
    constructor () {
      this.resultsTitle = Selector('h1').withAttribute('class', /Title-sc.*/);
      this.giphyGrid = Selector('#giphy-grid');

    }
}

export default new ResultObject();
