import express from 'express';

export const startUp = express.Router();

startUp.get('/', (req, res) => {
    res.send('Midterm Project - 19882')
});

