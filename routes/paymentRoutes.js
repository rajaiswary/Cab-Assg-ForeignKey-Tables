// const pay = require('../model/');

const express = require("express");

const router = express.Router();

router.get('/payment',(req,res)=>{
    res.send("<h1>this is the payment page</h1>")
})

module.exports = router;