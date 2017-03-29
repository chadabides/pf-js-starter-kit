
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
//import bodyParser from 'body-parser';

//Import Web Pack Here
import webpack from 'webpack';
import config from '../webpack.config.dev';
import moment from 'moment';




const port = 3000;
const app = express();
// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used
// for signing the cookies.

app.use(cookieParser('foobars'));
// parses json, x-www-form-urlencoded, and multipart/form-data
//app.use(bodyParser());

app.get('/rememberme', function(req, res){
  if (req.cookies.remember) {
    let age = moment(req.cookies.remember, "YYYY-MM-DD h:mm:ss a").fromNow();
    res.send(`Remembered :). Click to <a href="/forget">forget</a>!.
    Cookie will expire ${age}`);
  } else {
    res.send(`<form method="post"><p>Check to <label>
      <input type="checkbox" name="remember"/> remember me</label>
      <input type="submit" value="Submit"/></p></form>`);
  }
});

app.get('/forget', function(req, res){
  res.clearCookie('remember');
  res.redirect('back');
});

app.post('/rememberme', function(req, res){
  var minute = 60 * 1000;
  if (req.body.remember) res.cookie('remember', moment(minute + Date.now()), {maxAge: minute });
  res.redirect('back');
});


//Add Example Code Here for L6
app.get('/mypage', (req, res) => {
  let response = "<h1>HTTP Request Headers</h1>";
  for (let requestHeader in req.headers)
  {
      response += `<p> ${requestHeader}: ${req.headers[requestHeader]} </p>`;
  }

   response +=  `<h1>Query String Parameters</h1>
    <p>Enter a URL like:</p>
    <a href=\"http://localhost:3000/mypage?firstname=Jane&lastname=Smith&age=30\">
    "http://localhost:3000/mypage?firstname=Jane&lastname=Smith&age=30" </a>`;
  if (req.query) {
   for(let q in req.query)
   {
      response += `<p> ${q}: ${req.query[q]} </p>`;
   }
   res.send(response);
  }  else {
      res.status(404).send('You did not enter a Query Parameter !');
  }



});






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

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {

});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
