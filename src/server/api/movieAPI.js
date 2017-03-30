/**
*   This class will be where the you put Client side services
*/
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
//import our Model Here
import {default as Movie, MovieCollection as movieCollection} from '../models/movie';
export default class MovieService
{
static getMovieList ()
  {
    let movies =  new movieCollection();
    if(movies.length === 0)
      {
         movies.add(new Movie(1017109,'Juno','Drama'));
        movies.add(new Movie(1017105,'Star Wars','SyFy'));
        movies.add(new Movie(1017108,'Big','SyFY'));
        movies.add(new Movie(1017104,'The Lego Movie','Comedy'));
        movies.add(new Movie(1017119,'The Green Mile','SyFy'));
        movies.add(new Movie(1017106,'I-Robot','SyFY'));
        movies.add(new Movie(4444441,'Logan','SyFy'));}

    return movies.list;
  }
static addMovie (movie = new Movie())
{
    let result = false;
  let movies =  new movieCollection();
  movies.add(movie);
  result= true;
  return result;
}
static deleteMovie (id = -1)
{

  let result = false;
  try {
      let movies =  new movieCollection();
       movies.delete(id);
      result = true;
  } catch (e) {
    throw e;//add Error Code
  }

return result;


}

static filterList (filter = (movie)=>{return movie.genre === 'Drama'; }){
let movies =  new movieCollection();
return movies.filter(filter);
}

}
