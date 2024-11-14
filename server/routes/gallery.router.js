var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');
// GET /gallery
router.get('/', function (req, res) {
    var sqlQueryText = "\n  SELECT * FROM \"gallery\"\n  ORDER BY \"id\";\n";
    pool.query(sqlQueryText)
        .then(function (result) {
        res.send(result.rows);
    }).catch(function (err) {
        res.sendStatus(500);
        console.log('error in server get route', err);
    });
});
// PUT /gallery/like/:id
router.put('/like/:id', function (req, res) {
    var sqlQueryText = "\n    UPDATE \"gallery\"\n    SET \"likes\" = \"likes\" + 1\n    WHERE \"id\" = ($1);\n    ";
    var sqlValues = [req.params.id];
    pool.query(sqlQueryText, sqlValues)
        .then(function (result) {
        res.sendStatus(200);
        console.log('PUT successful');
    }).catch(function (err) {
        res.sendStatus(500);
    });
});
module.exports = router;
