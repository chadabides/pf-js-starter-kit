/* eslint-disable no-console */
/** Main Client Module Loader for basic SPA
/* This module will load the Config and build page routes*/


//import in styles
import './public/styles/styles.less';
import {default as observable, observe}  from '../server/core/observer.js';
//import in images
import './public/images/film.png';
import './public/images/robot-waving.gif';
import movieApp from './app/movieapp';
//Gets a list of movies and the does stuff functions

//import MovieController from './app/controllers/moviecontroller'

// Load Index view module with sample data
 //let vm =  new MovieController();
 //let movieService = new MovieService();
 let titleHTMl = document.getElementById("headername");
 let movieModule = document.getElementById("movieApp");

 /** @todo movie this to a movie service on the client */
 let movieService = function(callback)
   {
       this.movieData = {};
       var request = new XMLHttpRequest();
       var renderMovieListURL = '/movies/list';
       this.loadurl = function(url){
         // perform a GET request
         request.open('GET', url);
        // handle the response
         request.addEventListener('load', function (evt) {
        // turn off default dehavior
        evt.preventDefault();
        // parse the data from JSON and Store data in object and pass object to callback
        callback(request.responseText);
        });
          // kick off the request
          request.send();
       };
        let getMovieList = ()=>{ return this.loadurl(renderMovieListURL);}
    return {
        getMovieList: getMovieList
    };
}




let loadMovies = (result)=>{
     movieApp.start(movieModule,result);
}

let ms = new movieService(loadMovies);
ms.getMovieList();

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
