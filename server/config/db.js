const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'bandit'
})

module.exports = db;
