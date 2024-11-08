const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlQueryText = `
  SELECT * FROM "gallery"
  ORDER BY "id";
`
pool.query(sqlQueryText)
  .then((result) => {
      console.log('result', result.rows);
      res.send(result.rows);
  }).catch((err) => {
      res.sendStatus(500);
      console.log('error in server get route', err);
  })
});

module.exports = router;
