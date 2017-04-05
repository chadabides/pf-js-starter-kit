/* eslint-disable no-unused-vars */
/** Namespace for Movie App
/* Here is where you build the MovieApp module */
//this allows use to watch for changes to the model and update the view
import MovieController from './controllers/moviecontroller'
//import views here
//import hometemplate from "./views/movies.html";

export default class MovieApp{

static start(baseElement, movieModel)
{

  let controller = new MovieController();
  //load template

  let el = this.buildMovieHomeView(baseElement,movieModel,controller);

  el.showView();


}
static buildMovieHomeView(baseElement, movieModel, movieController){
let movieElement = document.createElement( "div" );
let render = ()=>{
  // Instead of loadmovies We should use templating library
  //  which generates the HTML for our movie entry
  // I just used a function to be simple for this example
  movieElement.innerHTML = movieModel //this.loadmovies(movieModel.list,movieController)
  baseElement.appendChild(movieElement);
}

let show = function () {
  movieElement.style.display = "";
  render();
};

let hide = function () {
  movieElement.style.display = "none";
};

return {
       showView: show,
       hideView: hide
      }

}

static loadmovies(movies,vm)
{

  let moviesTemplate = '';
  if (movies) {
     for(let m of movies)
     {
       /**@todo add button to delete a movie <button>Delete Me</button>
       /* when the button is clicked it will call the Controller */
       let movieItem = `<li>   Movie Title: ${m.title} Genre:${m.genre} </li>
       `;
       moviesTemplate += movieItem
     }
  }
  return `<h1>Movies List:</h1>
  <ul>
   ${moviesTemplate}
  </ul>
  `

}
}
