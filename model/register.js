const sequelize = require("./db");
const { DataTypes, HasMany } = require("sequelize");
// const Book = require('./booking');

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 18,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "India",
    },
  },
  { timestamps: false }
);

const Driver = sequelize.define("driver", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  licenseno: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  vehicleno: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

const Book = sequelize.define("booking", {
  bookingid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  carno: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pickup: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  cabtype: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  userId:{
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'id',
    }
  }
});

const Car = sequelize.define("cars", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  carno: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cabtype: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});

Driver.hasOne(Car);
Car.belongsTo(Driver);

User.hasMany(Book, { foreignKey: "userId", sourceKey: "id" });
Book.belongsTo(User, { 
    foreignKey: "userId", 
    targetKey: "id"
});

Driver.hasMany(Book);
Book.belongsTo(Driver);

// Car.hasMany(Book);
// Book.belongsTo(Car);


module.exports.Car = Car;
module.exports.Driver = Driver;
module.exports.Book = Book;
module.exports.User = User;
module.exports = {
    Car:Car,
    Book:Book,
    Driver:Driver,
    User:User
}
