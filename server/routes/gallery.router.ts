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
      res.send(result.rows);
  }).catch((err: any) => {
      res.sendStatus(500);
      console.log('error in server get route', err);
  })
});

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  
    const sqlQueryText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = ($1);
    `

    const sqlValues = [req.params.id];

    pool.query(sqlQueryText, sqlValues)
    .then((result) => {
        res.sendStatus(200);
        console.log('PUT successful');
    }).catch((err) => {
        res.sendStatus(500);
    })
});

module.exports = router;
