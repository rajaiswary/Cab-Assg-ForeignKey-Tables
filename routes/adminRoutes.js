const express = require('express');
const controller = require('../controller/adminController');
const {route} = require('./accountRoutes');

const router = express.Router();



router.get('/fetchData',controller.fetchData);
module.exports = router;
