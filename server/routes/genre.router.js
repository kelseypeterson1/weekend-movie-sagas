const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// GET route
router.get('/:id', (req, res) => {
  console.log('req.params is', req.params)
  let movieId = req.params.id;
  console.log(`Looking for genre for movie id:`, movieId);

  let query = 
  `SELECT "name", "movie_id" 
  FROM "genres"
  JOIN "movies_genres"
  ON "movies_genres"."genre_id" = "genres"."id"
  WHERE "movies_genres"."movie_id" = $1;`;

  pool.query(query, [movieId])
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting genre`, error);
      res.sendStatus(500);
    });
}); // end GET route

module.exports = router;

// GET route
router.get('/', (req, res) => {
  console.log('Looking for movie genres');

  let query = 
  `SELECT * FROM "genres";`;

  pool.query(query)
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      console.log(`Error getting all genres`, error);
      res.sendStatus(500);
    });
}); // end GET route

module.exports = router;