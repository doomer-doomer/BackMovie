const Pool = require('pg').Pool;
//Your .env loaction 
require('dotenv').config()
const pool = new Pool({
    user:process.env.DBUSERNAME,
    password:process.env.DBPASSWORD,
    host:process.env.MYHOST,//localhost
    port:process.env.MYPORT,
    database:process.env.DATABASE
});

console.log(""+process.env.DBPASSWORD)

module.exports = pool;