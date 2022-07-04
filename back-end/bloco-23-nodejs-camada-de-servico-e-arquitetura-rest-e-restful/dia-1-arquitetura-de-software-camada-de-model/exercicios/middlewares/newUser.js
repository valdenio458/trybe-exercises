const User = require('../models/User');

const newUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
    
  const result = await User.createUser(firstName, lastName, email, password)
  
  return res.status(201).json(result)

}

module.exports = newUser;