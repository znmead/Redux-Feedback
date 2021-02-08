const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows); // gets all entries from feedback db for admin page
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', async (req, res) => {
    const client = await pool.connect();

    try {
        const {
            feeling,
            understanding,
            support,
            comments
        } = req.body;
        await client.query('BEGIN')
        const insertFeedback = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comments]);
        const feedbackId = insertFeedback.rows[0].id;

        await client.query('COMMIT')
        console.log(req.body);
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /feedback', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});








module.exports = router;