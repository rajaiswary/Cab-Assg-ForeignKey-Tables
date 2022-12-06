const express = require('express');
const parser = require('body-parser');
const userRoutes = require('./routes/accountRoutes');
const adminRoutes = require('./routes/adminRoutes');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views',"views");


app.use(parser.urlencoded({extended : true}));
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(userRoutes);
app.use(adminRoutes);

app.listen(80);


