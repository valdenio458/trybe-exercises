
//* Arquivo para criar a querie: 

const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users_crud.users (first_name,last_name, email, password) VALUES (?, ?, ?, ?)';
  return await connection.execute(query,[firstName,lastName, email, password])
  .then(([result]) => ({id: result.insertId, firstName, lastName, email}))
}

module.exports = { 
  createUser
 };
