const Book = require('../model/booking');


module.exports.booking = (req,res,next)=>{
    // console.log(req.session)
    res.render('booking')
}


module.exports.bookingPost = async(req,res,next)=>{
    const {pickup,destination,date,time,cars} = req.body;
    console.log(req.session.userId)
    let data = req.session.userId;
    await Book.create({
        pickup : pickup,
        destination : destination,
        date : date,
        time : time,
        cabtype : cars,
        userId:data
    });
    res.redirect('/payment');  
}