import { Selector, t } from 'testcafe';
//Page models/components for Upload.
class UploadObject {
    constructor () {
      this.gifUploadInput = Selector('input').withAttribute('type', 'url');
      this.gifUploadConfirm = Selector('div').withAttribute('class', /GradientButton-sc.*/).withText('Upload to GIPHY');
      this.gifUploadInfo = Selector('div').withText('Add Info');

    }
    // Function for upload
    async upload (input) {
        await t
          .typeText(this.gifUploadInput, input, { paste: true })
          .click(this.gifUploadConfirm);

    }
}

export default new UploadObject();
