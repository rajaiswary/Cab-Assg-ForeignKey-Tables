const express = require('express');
const {} = require('sequelize');
const cc = require('../controller/driverController');


const router = express.Router();


router.get('/driver',cc.driverRegister);
router.post('/driver',cc.driverRegisterPost);

router.get('/driverlogin',cc.driverLogin);
router.post('/driverlogin',cc.driverLoginPost);


router.get('/driver-update/:id',cc.update);
router.post('/driver-update/:id',cc.updatePost);


router.get('/delete/:id',cc.delete);



module.exports = router;