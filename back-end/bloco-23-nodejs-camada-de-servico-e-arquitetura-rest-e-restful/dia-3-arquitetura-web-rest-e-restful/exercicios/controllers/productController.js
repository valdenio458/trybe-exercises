const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const products = await ProductModel.getAll();
  
    return res.status(200).json(products);
    
  } catch (error) {
    console.log(error)

    return res.status(500).json({message: 'Você está fazendo besteira!'});
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await ProductModel.getById(req.params.id);
  
    return res.status(200).json(product);
    
  } catch (error) {
    console.log(error)

    return res.status(500).json({message: 'Você está fazendo besteira!'});
  }
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
  
    const newProduct = await ProductModel.add(name, brand);
  
    return res.status(201).json(newProduct);
    
  } catch (error) {
    return res.status(500).json({message: 'Você está fazendo besteira!'});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
  
    return res.status(200).json(products);
    
  } catch (error) {
    return res.status(500).json({message: 'Você está fazendo besteira!'});
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;

  try {
    const products = await ProductModel.updat(id, name, brand);
    PUT
    return res.status(201).json(products);
    
  } catch (error) {
    return res.status(500).json({message: 'Você está fazendo besteira!'});
  }

});

module.exports = router;