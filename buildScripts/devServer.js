
/* eslint-disable no-console*/
/* eslint-disable no-unused-vars */
/** Note this file was designed for front end loading
/* @todo remove the express and other the application specific code
/* to a server side application file and load express there */
//import base libs that you will need for the application
import express from 'express';
import path from 'path';
import open from 'open';
//import other libs
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import moment from 'moment';
//import jsonfileservice';
import{default as jsonfileservice} from "../src/server/routes/utils/jsonfileservice";
//import movies routes
import moviesRoute from '../src/server/routes/moviestore';

//Import Web Pack Here
import webpack from 'webpack';
import config from '../webpack.config.dev';
//stuff for errors
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const jsfileservice = new jsonfileservice();
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())

app.use((req, res, next) => {
  console.log('Time:', moment().format('YYYY-MM-DD h:mm:ss a'))
  next()

});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
//mount movie store list
app.use('/movies', moviesRoute);

// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used
// for signing the cookies.

app.use(cookieParser('foobars'));
// parses json, x-www-form-urlencoded, and multipart/form-data
//app.use(bodyParser());
app.set('view engine', 'ejs');

//Set Up app folders
app.use('/bower_components',express.static('bower_components'));
app.use('/app', express.static('src/client/app'));
app.use('/css', express.static('src/client/public/styles'));
app.use('/images', express.static('src/client/public/images'));

//Get complier
const compiler = webpack(config);
//pass complier to
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//User Functions
app.use('/users', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next)=> {
  //checkForSecretKey function
  let secret = req.query['secret'];
  if (secret !== 'tacos') {
    res.status(401).send('You are not authorized!');
  } else {
    next();
  }
},(req, res)=>{
  var json = jsfileservice.getFile('/../../data/' + 'user.json');
       res.send(json);
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
