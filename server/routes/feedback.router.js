const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.get('/', (req, res) => {
//     console.log('GET /post');
//     pool.query('SELECT * from "feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /post', error)
//         res.sendStatus(500);
//     });
// })

router.post('/', (req, res) => {
    let queryText = 
    "INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)";
    pool.query(queryText, 
        [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        })
}); // End POST Route

module.exports = router;