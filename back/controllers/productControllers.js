const { Product } = require('../models')
const { Op } = require("sequelize")


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


const addProduct = (req, res) => {
  Product.create(req.body)
  .then(product => res.send(product))
}

const updateProduct = (req,res) => {
  Product.findByPk(req.params.id)
  .then(product => product.update(req.body))
  .then(updatedProduct => res.send(updatedProduct))
}

const deleteProduct = (req, res) => {
  Product.findByPk(req.params.id)
  .then(product => product.destroy())
  .then(res.send(200))
}

module.exports = {findAllProducts, findProduct, addProduct, updateProduct, deleteProduct}

