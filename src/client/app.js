/* eslint-disable no-console */
/** Main Client Module Loader for basic SPA
/* This module will load the Config and build page routes*/


//import in styles
import './public/styles/styles.less';

//import in images
import './public/images/film.png';
import './public/images/robot-waving.gif';
//Gets a list of movies and the does stuff functions
import {default as movieService , doSomething, doSomethingElse as doit}  from '../server/api/movieAPI';
import moment from 'moment';

let age = moment("19120414", "YYYYMMDD").fromNow();
console.log('The RMS Titanic sank ' + age);

// Use Service to get movies

let movies = movieService.getMovieList();
for(let movie of movies )
{
    console.log(`Movie Title: ${movie.title} Genre: ${movie.genre} `);
}
//movieService.doSomething();
doSomething();
doit();
doit(true);

//Load Index view module with sample data
 let vm = {title:'Movies',author:'Chad Martin'};

 let titleHTMl = document.getElementById("headername");

 titleHTMl.innerHTML = vm.title ;
