const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {

//   const query = 
//     `SELECT "name", "movie_id" 
//     FROM "genres"
//     JOIN "movies_genres"
//     ON "movies_genres"."genre_id" = "genres"."id";`;
//   pool.query(query)
//     .then( result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all genres', err);
//       res.sendStatus(500)
//     })

// });

// POST route
router.post('/', (req, res) => {
  console.log('req.body is', req.body)
  let movieId = req.body.id;
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
}); // end POST route

module.exports = router;