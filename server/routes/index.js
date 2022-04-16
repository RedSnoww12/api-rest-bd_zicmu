//import
const base = require('../../base.json');
const db = require('../db')

//express
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json(base);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.get('/students', async (req, res, next) => {
    try {
        let results = await db.LesStudents();
        res.json(results);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.get('/students/:id', async (req, res, next) => {
    try {
        let results = await db.GetOneStudent(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.get('/cours', async (req, res, next) => {
    try {
        let results = await db.LesCours();
        res.json(results);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})


router.get('/db/:id', async (req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

module.exports = router;