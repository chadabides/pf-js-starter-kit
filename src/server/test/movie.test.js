import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import  {default as MovieService}  from '../api/movieapi';
import {default as Movie} from '../models/movie';
//MovieSerive Test Go Here
let movieService = new MovieService();

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});
describe('MovieServie getMovieList Test', () => {
  it('should pass', () => {
    expect(movieService.get().list.length).to.equal(7);
  });
});
describe('MovieServie addMovie Test', () => {
  it('should pass', () => {
    let addMovie = new Movie(56,'Don Juen','Drama');
    expect(movieService.add(addMovie)).to.equal(true)
  });
});
describe('MovieServie getMovieList Test after addMovie', () => {
  it('should pass', () => {
    expect(movieService.get().list.length).to.equal(8);
  });
});
describe('MovieServie deleteMovie Test', () => {
  it('should pass', () => {
    expect(movieService.delete(56)).to.equal(true)
  });
});
describe('MovieServie getMovieList Test after deleteMovie', () => {
  it('should pass', () => {
    expect(movieService.get().list.length).to.equal(7);
  });
});
describe('MovieServie filter Test', () => {
  it('should pass', () => {
    let fl = movieService.filter((movie)=>{return movie.genre === 'SyFy'; });
    console.log(`Filtered movies:`)
    expect(fl.length).to.equal(5);
  });
});
