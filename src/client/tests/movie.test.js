import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import  {default as movieService}  from '../../server/api/movieAPI';
import {default as Movie} from '../../server/models/movie';



describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});
describe('MovieServie getMovieList Test', () => {
  it('should pass', () => {
    expect(movieService.getMovieCollection().list.length).to.equal(7);
  });
});
describe('MovieServie addMovie Test', () => {
  it('should pass', () => {
    let addMovie = new Movie(56,'Don Juen','Drama');
    expect(movieService.addMovie(addMovie)).to.equal(true)
  });
});
describe('MovieServie getMovieList Test after addMovie', () => {
  it('should pass', () => {
    expect(movieService.getMovieCollection().list.length).to.equal(8);
  });
});
describe('MovieServie deleteMovie Test', () => {
  it('should pass', () => {
    expect(movieService.deleteMovie(56)).to.equal(true)
  });
});
describe('MovieServie getMovieList Test after deleteMovie', () => {
  it('should pass', () => {
    expect(movieService.getMovieCollection().list.length).to.equal(7);
  });
});

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
