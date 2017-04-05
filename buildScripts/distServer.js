import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));
app.use('/images', express.static('../dist/images'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(err['status'] || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
  })


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
