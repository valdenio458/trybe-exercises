const isValidPassword = require('../services/validationPassword');

const password = (req,res,next) => {
  const { password  } = req.body;
  const result = isValidPassword (password); //* false ou true
  
  if(!result){
    return res.status(400).json({
      error: true,
      message: `O campo 'password' deve ter pelo menos 6 caracteres.`
  })
  }
  next();
}

module.exports = password;