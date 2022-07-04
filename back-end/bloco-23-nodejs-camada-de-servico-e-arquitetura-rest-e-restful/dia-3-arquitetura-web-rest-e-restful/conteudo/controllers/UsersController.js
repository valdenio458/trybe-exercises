const userModel = require('../models/Users');

const listAll = (_req, res) => {
  try {
    const data = userModel.getAll()
    
    return res.status(200).json(data)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Algo deu errado!'})
    
  }

}

module.exports = {
  listAll
}