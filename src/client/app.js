/* eslint-disable no-console */
/** Main Client Module Loader for basic SPA
/* This module will load the Config and build page routes*/


//import in styles
import './public/styles/styles.less';
import {default as observable, observe}  from '../server/core/observer.js';
//import in images
import './public/images/film.png';
import './public/images/robot-waving.gif';
import movieApp from './app/movieApp.js';
//Gets a list of movies and the does stuff functions
import  {default as movieService}  from '../server/api/movieAPI';
import MovieController from './app/controllers/movieController'

// Load Index view module with sample data
 let vm =  new MovieController();

 let titleHTMl = document.getElementById("headername");
 let movieModule = document.getElementById("movieApp");
 movieApp.start(movieModule,movieService.getMovieCollection());

 titleHTMl.innerHTML = 'Movies' ;


//test of observer class
// this is an observable object
let person = observable({name: 'John', age: 20});

function print () {
  console.log(`${person.name}, ${person.age}`);
}

// this creates an observer function
// outputs 'John, 20' to the console
observe(print);

// outputs 'Dave, 20' to the console
setTimeout(() => person.name = 'Dave', 100);

// outputs 'Dave, 22' to the console
setTimeout(() => person.age = 22, 200);
