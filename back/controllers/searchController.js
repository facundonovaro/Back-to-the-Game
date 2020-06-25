const { Product } = require('../models')
const { Op } = require("sequelize")

const findAllSearchedProducts = (req, res) =>{
    Product.findAll({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`
        }
      }
    })
    .then((products)=>{
      res.json(products)
    })
  }

  module.exports = findAllSearchedProducts