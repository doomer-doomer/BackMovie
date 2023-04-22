const Pool = require('pg').Pool;
//Your .env loaction 
require('dotenv').config({path:'C:/Users/Dell/Documents/Tejas/MoviesApp/.env'})
const pool = new Pool({
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    host:process.env.MYHOST,//localhost
    port:process.env.MYPORT,
    database:process.env.DATABASE
});

module.exports = pool;