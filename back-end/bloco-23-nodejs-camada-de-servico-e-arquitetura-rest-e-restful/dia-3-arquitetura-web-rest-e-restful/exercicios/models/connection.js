const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  password: 'flamengo61', 
  database: 'rest_exercicios'});

module.exports = connection;