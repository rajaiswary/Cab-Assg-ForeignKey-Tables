const sequelize = require('./db');
const {DataTypes, DATEONLY} = require('sequelize');

const Book = sequelize.define("booking",{
    bookingid : 
    {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    carno :
    {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    pickup : 
    {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    destination : 
    {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    date :
    {
        type : DataTypes.DATEONLY,
        allowNull : false,
    },
    time :
    {
        type : DataTypes.TIME,
        allowNull : false
    },
    cabtype :
    {
        type : DataTypes.STRING(50),
        allowNull : false
    }
});

const Car = sequelize.define('cars',{
    id : 
    {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    carno :
    {
        type : DataTypes.INTEGER,
        allowNull : true

    },
    cabtype :
    {
        type : DataTypes.STRING(50),
        allowNull : true
    }


})

module.exports = Car;
module.exports = Book;