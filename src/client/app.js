/* eslint-disable no-console */
/** Main Client Module Loader for basic SPA
/* This module will load the Config and build page routes*/


//import in styles
import './public/styles/styles.less';

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
 movieApp.start(movieModule,movieService.getMovieList());

 titleHTMl.innerHTML = 'Movies' ;
