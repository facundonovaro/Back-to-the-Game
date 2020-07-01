const { Product } = require('../models')
const { Op } = require("sequelize")

const findAllSearchedProducts = (req, res) => {
  const searchLower = req.params.name
  let palabra = searchLower.toLowerCase()
  console.log(palabra, "palabra min")
  Product.findAll({
    where: {
      name: {
        [Op.like]: `%${palabra}%`

      }
    }
  })
    .then((products) => {
      res.json(products)
    })
}

module.exports = findAllSearchedProducts