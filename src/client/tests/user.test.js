import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('user.html Page test', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/client/app/views/users.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  })
})
