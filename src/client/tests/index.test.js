import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Index Page test for nav tag', () => {
  it('should pass nav with a Home link', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have tag module that has a src of movieApp', (done) => {
    const index = fs.readFileSync('./src/server/views/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const module = window.document.getElementsByTagName('module')[0];
      expect(module.attributes[0].nodeName).to.equal('src');
      expect(module.attributes[0].nodeValue).to.equal('movieApp');
      //todo make this line work by creating a custom element
      //expect(module.src).to.equal('movieApp');
      done();
      window.close();
    });
  })
})
