const express = require('express');
const {
    guideHome
} = require('../controllers/guide.controller');

const router = express.Router();


router
    .route('/')
    .get(guideHome)


module.exports = router;