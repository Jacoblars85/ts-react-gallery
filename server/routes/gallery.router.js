var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');
// GET /gallery
router.get('/', function (req, res) {
    var sqlQueryText = "\n  SELECT * FROM \"gallery\"\n  ORDER BY \"id\";\n";
    pool.query(sqlQueryText)
        .then(function (result) {
        console.log('result', result.rows);
        res.send(result.rows);
    }).catch(function (err) {
        res.sendStatus(500);
        console.log('error in server get route', err);
    });
});
// PUT /gallery/like/:id
router.put('/like/:id', function (req, res) {
    // code here
});
module.exports = router;
