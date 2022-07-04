const productModel = require('../models/Products');

const listAll = (req,res) => {
  try {
    const data = productModel.getAll()
    
    return res.status(200).json(data)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Algo deu errado!'})
    
  }

}

module.exports = {
  listAll
}