const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user',
  password: 'testi',
  database: 'arviointi'
});
module.exports = connection;