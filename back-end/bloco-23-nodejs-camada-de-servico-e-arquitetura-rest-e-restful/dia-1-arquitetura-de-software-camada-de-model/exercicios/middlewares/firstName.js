const isValidFirstName = require('../services/validationFirstName');
const firstName = (req, res, next) => {
  const { firstName } = req.body;
  const result = isValidFirstName(firstName); //* false ou true

if(!result){
  return res.status(400).json({
    error: true,
    message: `O campo 'firstName' deve ser obrigatório.`
})
}
next()
}

module.exports = firstName;