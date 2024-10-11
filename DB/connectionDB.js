const mysql = require('mysql2');

const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "midterm",
    port: process.env.MYSQL_PORT || 3306,  // Port mặc định bên trong Docker
});

module.exports = connection;
