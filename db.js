const Pool = require('pg').Pool;
//Your .env loaction 
require('dotenv').config({path:'C:/Users/Dell/Documents/Tejas/MoviesApp/.env'})
const pool = new Pool({
    user:"postgres",
    password:"tejas94843",
    host:"127.0.0.1",
    port:"5432",
    database:"MovieAppUsers"
});

module.exports = pool;