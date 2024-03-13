const mysql = require("mysql2");

let config = { host: "localhost", 
user: "root",
password: "christina-13",
database: "C2Wshop"
};

const connection = mysql.createConnection(config);

connection.connect(function (err) {
    if (err) {
        return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
});

module.exports = mysql.createConnection(config);