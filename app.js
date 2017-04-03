'use strict';
const express = require("express");
const path = require("path");
const bodyParser= require("body-parser");
const Sequelize= require("sequelize");
const dotenv = require("dotenv");

const adminRouter= require("./routers/adminRouter");

const NODE_ENV= process.env.NODE_ENV ||'development';

if(NODE_ENV ==='development'){
    dotenv.load({path: path.join(__dirname,'.env')});
}

const app = express();// khởi tạo app express
const port = 3000; // cổng
const router = require("./routers/router"); // định tuyến chính

const apiRouter= require("./routers/apiRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/", router);
app.use("/api", apiRouter);
app.use("/admin",adminRouter);
const db= new Sequelize(NODE_ENV.DB_URI);
db.authenticate();









app.listen(port, () => console.log(`Server is running on localhost: ${port}`));