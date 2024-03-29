
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "node",
    user: "root",
    password: "mysqlroot"
});

module.exports = connection;
