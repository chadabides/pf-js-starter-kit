/* eslint-disable no-unused-vars */
/** Movie - BaseController
*   This class is the movieController
*/
import moment from 'moment';
//Gets a list of movies and the does stuff functions
import  {default as movieService}  from '../../../server/api/movieAPI';



/** this var is so that we have a Singleton Controller class */
let instance = null;
export default class MovieController
{
  get movies(){
    return this._movies;
  }
  get timeStamp() {return this._timeStamp; }
  constructor(){
  if(!instance){
           instance = this;
           // Use Service to get movies
           this._movies = movieService.getMovieList();
           // to test whether we have singleton or not
           this._timeStamp = moment().format('YYYY-MM-DD h:mm:ss a');
           //@todo: change this to a log statment;
           console.log(`A movie collection was created at ${this.timeStamp}`);
     }


     return instance;

}



filter(){return movieService.filterList();}

deleteMovie (id)  { movieService.deleteMovie(id);}

deleteEvent(id){
 return this.deleteMovie.bind(id);
}

}
