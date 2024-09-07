const express = require('express');
const {
    getAllShloks,
    getShlokByChapter,
    getShlokByNumber
} = require('../controllers/shlok.controller.js');

const router = express.Router();

router
    .route('/')
    .get(getAllShloks)

router
    .route('/:chapter')
    .get(getShlokByChapter)

router
    .route('/:chapter/:number')
    .get(getShlokByNumber)


module.exports = router;