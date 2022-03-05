const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  const query = 
    `SELECT "name", "movie_id" 
    FROM "genres"
    JOIN "movies_genres"
    ON "movies_genres"."genre_id" = "genres"."id";`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

});

module.exports = router;