const mysql = require("mysql");
const e = require("express");

const connection = mysql.createConnection({
  // we are using a method that is looking for an object, with a specific key
  host: "localhost", // optimal for futur deployement
  port: 3306, // never change this value
  user: "root", // never change it
  password: "Hello135", // it is better to use a .env file to not expose our password
  database: "todo_db", // the db we created in workbench
});

module.exports = connection;
