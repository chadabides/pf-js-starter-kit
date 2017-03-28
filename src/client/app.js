/* eslint-disable no-console */
/** Main Client Module Loader for basic SPA
/* This module will load the Config and build page routes*/


//import in styles
import './public/styles/styles.less';

//import in images
import './public/images/film.png';
import './public/images/robot-waving.gif';
//Gets a list of movies and the does stuff functions
import  {default as movieService}  from '../server/api/movieAPI';
//import * as movieService  from '../server/api/movieAPI';
// Use Service to get movies

let movies = movieService.getMovieList();
for(let movie of movies )
{
    console.log(`Movie Title: ${movie.title} Genre: ${movie.genre} `);
}

//Load Index view module with sample data
 let vm = {title:'Movies',author:'Chad Martin'};

 let titleHTMl = document.getElementById("headername");

 titleHTMl.innerHTML = vm.title ;
