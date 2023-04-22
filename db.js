const Pool = require('pg').Pool;
//Your .env loaction 
require('dotenv').config()
const pool = new Pool({
    user:"postgres",//postgres
    password:"3tKpSAl4W48ta54WCUiL",
    host:"containers-us-west-69.railway.app",//localhost
    port:6426,//5432
    database:"railway"
});


module.exports = pool;