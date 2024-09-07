const express = require('express');
const {
    getAllAdhyay,
    getAdhyayByNumber
} = require('../controllers/adhyay.controller.js');

const router = express.Router();

router
    .route('/')
    .get(getAllAdhyay)

router
    .route('/:number')
    .get(getAdhyayByNumber)


module.exports = router;