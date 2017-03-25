"use strict";
const express = require("express");
const mongodb = require("mongodb");
const db_1 = require("../data/db");
let router = express.Router();
// ADD OR EDIT MOVIE
router.post('/', (req, res) => {
    let movie = req.body;
    movie._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection('movies').save(req.body).then((newMovie) => {
        res.json(newMovie);
    });
});
// GET MOVIES
router.get('/', (req, res) => {
    db_1.default.db.collection('movies').find().toArray().then((movies) => {
        res.json(movies);
    });
});
// DELETE MOVIE
router.delete('/:id', (req, res) => {
    let movieId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('movies').remove({ _id: movieId }).then(() => {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
