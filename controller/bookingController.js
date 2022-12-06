const Book = require('../model/booking');


module.exports.booking = (req,res,next)=>{
    res.render('booking')
}


module.exports.bookingPost = async(req,res,next)=>{
    const {pickup,destination,date,time,cars} = req.body;

    await Book.create({
        pickup : pickup,
        destination : destination,
        date : date,
        time : time,
        cabtype : cars
    });
    res.render('booking');
}