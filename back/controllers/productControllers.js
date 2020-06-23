const { Product } = require('../models')

const findProduct = (req, res) => {
    Product.findByPk(req.params.id)
    .then(product => res.send(product))
}

const findAllProducts = (req, res) =>{
    Product.findAll()
    .then((products)=>{
      res.json(products)
    })
}

module.exports = { findAllProducts, findProduct }

