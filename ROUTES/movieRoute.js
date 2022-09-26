const express = require("express");
const getMovies = require("../CONTROLLERS/movieController").getMovies;
const addMovie = require("../CONTROLLERS/movieController").addMovie;

const router = express.Router();

router.get("/" , getMovies);
router.post("/add" , addMovie);

module.exports = router;