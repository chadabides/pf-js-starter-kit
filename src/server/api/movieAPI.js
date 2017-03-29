/**
*   This class will be where the you put Client side services
*/
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
//import our Model Here
import Movie from '../models/movie';
export default class MovieService
{
static getMovieList ()
{
  return [
       new Movie(1017109,'The Green Mile','Drama') ,
       new Movie(1017105,'Star Wars','Sy-Fy'),
       new Movie(1017108,'Big','Sy-FY'),
       new Movie(1017104,'Juno','Drama'),
       new Movie(1017106,'I-Robot','Sy-FY'),
       new Movie(4444441,'Logan','Sy-Fy')
    ]
}
}
