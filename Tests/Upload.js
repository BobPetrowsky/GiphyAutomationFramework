import { Selector, ClientFunction } from 'testcafe';
import uploadObject from '../page-objects/uploadObject.js';
import { user } from '../Roles/userRole.js';

fixture`Upload a GIF file`
    .page`https://giphy.com/upload`;

test('Uploading a GIF', async t => {

    //Login
    await t.useRole(user)
    //Upload
    await uploadObject.upload('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif')
    //Wait for upload popup to disapear then check url
    await t.expect(uploadObject.gifUploadInfo.exists).notOk({ timeout: 5000 });
    const getLocation = ClientFunction(() => document.location.href);
    //Validate Page Items
    await t
      .expect(getLocation()).contains('https://giphy.com/gifs/')
      .expect(Selector('h1').withText('Animated GIF')).exists;

      //I tried to handle native dialoge but didn't have time to really troubleshoot and figure it out. 
      //.setNativeDialogHandler(() => true)
      //.setFilesToUpload(Selector('input').withAttribute('accept', 'image/gif,video/mp4,video/mov,video/quicktime,youtube,vimeo'), '../GiphyTest/testGif.gif')
      //.click(uploadObject.gifUpload)
      //.click(uploadObject.gifUploadConfirm);

});
