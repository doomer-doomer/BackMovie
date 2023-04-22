const Pool = require('pg').Pool;
//Your .env loaction 
require('dotenv').config()
const pool = new Pool({
    user:"postgres",
    password:"tejas94843",
    host:localhost,//localhost
    port:5432,
    database:process.env.DATABASE
});


module.exports = pool;