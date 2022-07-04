const isValidLastName = require('../services/validationLastName');

const lastName = (req,res,next) => {
  const { lastName } = req.body;
  const result = isValidLastName(lastName); //* false ou true

if(!result){
  return res.status(400).json({
    error: true,
    message: `O campo 'lastName' deve ser obrigatório.`
})

}
next();

}

module.exports = lastName;