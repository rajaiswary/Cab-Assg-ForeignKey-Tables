const db = require('./register.js');

// const Booking = require('./booking');
db.Driver.sync({force : true});
db.Car.sync({force : true});
db.User.sync({force : true});
db.Book.sync({force : true});

// registerUser.sync({alter : true});
// Booking.sync({alter : true});

// register.Driver.sync({alter : true});
// register.Book.sync({alter : true});
// register.Car.sync({alter : true});