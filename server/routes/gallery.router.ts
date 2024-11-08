const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET /gallery
router.get('/', (req, res) => {
  const sqlQueryText = `
  SELECT * FROM "gallery"
  ORDER BY "id";
`
pool.query(sqlQueryText)
  .then((result: any) => {
      console.log('result', result.rows);
      res.send(result.rows);
  }).catch((err: any) => {
      res.sendStatus(500);
      console.log('error in server get route', err);
  })
});

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

module.exports = router;
