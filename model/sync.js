const db = require('./register.js');

// const Booking = require('./booking');
db.User.sync({alter : true});

db.Driver.sync({alter : true});





db.Car.sync({alter : true});
db.Book.sync({alter : true});

// registerUser.sync({alter : true});
// Booking.sync({alter : true});

// register.Driver.sync({alter : true});
// register.Book.sync({alter : true});
// register.Car.sync({alter : true});