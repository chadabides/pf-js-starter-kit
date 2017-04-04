import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

  describe('movies template', () => {
  it('should have h1 that says Movies List:', (done) => {
    const index = fs.readFileSync('./src/client/app/views/movies.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Movies List:");
      done();
      window.close();
    });
  })
})

//MovieSerive Test Go Here
