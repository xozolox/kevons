const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
  host: 'dadabase.c7rbqofdbijz.sa-east-1.rds.amazonaws.com',
  user: 'keypool',
  password: 'mundoparalelo',
  database: 'usuarios',
})

pool.getConnection((err, connection) => {
  if(connection) connection.release();
  console.log('BASE DE DATOS CONECTADA')
  return;
})

pool.query = promisify(pool.query);

module.exports = pool;