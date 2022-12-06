const express = require('express');
const { Model } = require('sequelize');
const controller = require('../controller/accountsController');
const bookingController = require('../controller/bookingController');
const updateUser = require('../controller/useraccountController');

const router = express.Router();


router.get('/',controller.homepage);

router.get('/login',controller.login);
router.post('/login',controller.loginPost);


router.get('/register',controller.register);
router.get('/profile',(req,res)=>{
    let mod = require("../controller/accountsController").data;
    mod = JSON.parse(mod)
    res.render('profile',{data:mod});
});
router.post('/register',controller.registerPost);

router.get('/user-index',updateUser.index);
router.get('/user-index/:id',updateUser.index);

router.get('/booking',bookingController.booking);
router.post('/booking',bookingController.bookingPost);

router.get('/update/:id',updateUser.update);
router.post('/update/:id',updateUser.updatePost);


router.get('/delete/:id',updateUser.delete);


router.get('/admin',controller.admin);
router.post('/admin',controller.loginPost);

module.exports = router;