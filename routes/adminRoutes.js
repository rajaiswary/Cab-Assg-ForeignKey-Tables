const express = require('express');
const controller = require('../controller/adminController');
const {route} = require('./accountRoutes');


const router = express.Router();



router.get('/fetchData',controller.fetchData);
router.get('/fetchDataDriver',controller.fetchDataDriver);
router.get('/fetchDataBook',controller.fetchDataBook);


module.exports = router;
