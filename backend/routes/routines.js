const express = require('express');
const router = express.Router();
const pool = require('../database');
const authenticateToken = require('../middleware/authenticateToken');

// Add a new routine
// router.post('/', authenticateToken, async (req, res) => {
//     const { dayOfWeek, timeOfDay, products } = req.body;
//     const userId = req.user.id;

//     try {
//         // Insert new routine
//         const routineResult = await pool.query(
//             'INSERT INTO Routines (user_id, day_of_week, time_of_day) VALUES ($1, $2, $3) RETURNING id',
//             [userId, dayOfWeek, timeOfDay]
//         );

//         const routineId = routineResult.rows[0].id;

//         // Insert products into RoutineProducts
//         for (let i = 0; i < products.length; i++) {
//             const productId = products[i];
//             await pool.query(
//                 'INSERT INTO RoutineProducts (routine_id, product_id, "order") VALUES ($1, $2, $3)',
//                 [routineId, productId, i + 1]
//             );
//         }

//         res.status(201).send('Routine created successfully');
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// Fetch routines for a user
router.get('/', authenticateToken, async (req, res) => {
    const id = req.user.id;
    const day = req.query.day;
    const time = req.query.time;
    console.log(day, time, id);
    try {
        const routines = await pool.query(
            `SELECT
                rp.product_id,
                p.brand AS brand,
                p.name AS name,
                p.category AS category,
                rp.order
            FROM
                public."Routines" r
            JOIN
                public."RoutineProducts" rp ON r.id = rp.routine_id
            JOIN
                public."Products" p ON rp.product_id = p.product_id
            WHERE
                r.user_id = $1 AND r.day = $2 AND r.time = $3
            ORDER BY
                r.day, r.time, rp.order`,
            [id, day, time]
        );

        res.json(routines.rows);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ message: err })
    }
});

module.exports = router;
