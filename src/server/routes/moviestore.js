import express from 'express';
import  {default as MovieService}  from '../api/movieapi';


let router = express.Router();
let movieService = new MovieService();

router.use((req, res, next) => {
  console.log('invoking movie store route.');
  next();
});

//do not define next if you are not going to use it
router.get('/list', function(req, res) {
    let hmtl = movieService.renderMovieList();
  res.send(hmtl);
});

router.get('/genre/:id', lookupMovie, (req, res) => {
  let movie = res.locals.movie;
  res.send(`The movie Genre is ${movie.genre}.`);
});
router.get('/movie/:id', lookupMovie, (req, res) => {
  let movie = res.locals.movie;
  res.send(`<h3> Movie Title: ${movie.title} Genre:${movie.genre}</h3>`);
});


function lookupMovie(req, res, next) {
  let movieId = req.params['id'];
  let matches = movieService.filter(m => m.id == movieId);
  if (!matches.length) {
  next(`No matching movie for id ${movieId} `);
  } else {
    res.locals.movie = matches[0];
    next();
  }
}
//Error handling
router.use(function (err, req, res, next) {
  console.error('err:Logging Error');
  res.send(`<h1 class='well'>Error: Could not display movie information.</h1>

    ${err}
    `);
  console.error(err);
})


export default router;
