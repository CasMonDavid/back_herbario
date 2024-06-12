const mysql = require("mysql2/promise");

//const app = express();
//const mysql = require("mysql2");
//const cors = require("cors");

//app.use(cors());
//app.use(express.json());

require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    port: process.env.MYSQLPORT,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

module.exports = connection;