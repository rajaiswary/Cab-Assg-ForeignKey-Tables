const express = require("express");
const parser = require("body-parser");
const userRoutes = require("./routes/accountRoutes");
const adminRoutes = require("./routes/adminRoutes");
const driverRoutes = require("./routes/driverRoutes");
const paymentRoutes = require("./routes/paymentRoutes")
const path = require("path");
const { engine } = require("express-handlebars");
const expressHandlebars = require("express-handlebars");
const cookieSession = require("cookie-session");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(parser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(
  cookieSession({
    name: "session",
    keys: ["sdhfgsjhfgjshfgjhs"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(userRoutes);
app.use(adminRoutes);
app.use(driverRoutes);

app.use(paymentRoutes)
app.listen(80);
