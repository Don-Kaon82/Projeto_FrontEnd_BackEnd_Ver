const mysql =  require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_db"
});

module.exports = pool;
