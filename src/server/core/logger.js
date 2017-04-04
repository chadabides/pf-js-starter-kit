
import morgan from 'morgan';
//import fs from 'fs';
//import winston from 'winston';
import moment from 'moment';

let instance = null;
//module service with singleton pattern
export default class loggerService{
  get timeStamp(){ return this._timeStamp}

  constructor(){

    if (!instance)
    {
      //Setup Logger
       // to test whether we have singleton or not
      this._timeStamp = this.time;
      let time = ()=>{ return moment().format('YYYY-MM-DD h:mm:ss a')}
      let logger ={
        timeStamp: this._timeStamp,
        time: time,
        dev: morgan('dev')
      }

      instance = logger;
    }
    return instance;
  }


}
