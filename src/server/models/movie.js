/**
* Movie.js this is our model for a movie
*/
//here we define the private property keys
let s_id = Symbol('id');
let s_title = Symbol('title');
let s_genre = Symbol('genre');
let s_thumbnail = Symbol();
export default class Movie
{
  //Getters for Properties
  get id(){return this[s_id]}
  get title(){return this[s_title]}
  get genre(){return this[s_genre]}
  get thumbnail(){return this[s_thumbnail]}
  //Setters for Properties
  constructor(id=0,title="a Movie",genre='Syfy',thumbnail=''){
    this[s_id] = id;
    this[s_title] = title;
    this[s_genre] = genre;
    this[s_thumbnail] = thumbnail;

  }

}
