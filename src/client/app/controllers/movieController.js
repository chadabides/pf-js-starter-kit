/* eslint-disable no-unused-vars */
/** Movie - BaseController
*   This class is the movieController
*/
import moment from 'moment';


/** this var is so that we have a Singleton Controller class */
let instance = null;
export default class MovieController
{
  get timeStamp() {return this._timeStamp; }
  constructor(movieCollection){
  if(!instance){
           // to test whether we have singleton or not
           this._timeStamp = moment().format('YYYY-MM-DD h:mm:ss a');
           //@todo: change this to a log statment;
           console.log(`A movie controller was created at ${this.timeStamp}`);
     }


     return instance;

}
addMovie(){
  //route to add movie view
}
movieList()
{
  //route to home movie view
}
deleteMovie (id)  {
  //route to add movie view
}
editMovie(id){
  //route to edit movie view
}

}
