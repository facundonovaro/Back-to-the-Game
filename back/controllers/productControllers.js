const { Product } = require('../models')


const findAllProducts = (req, res) =>{
    Product.findAll()
    .then((products)=>{
      res.json(products)
    })
}

module.exports = findAllProducts