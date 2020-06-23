const { Product } = require('../models')

const findProduct = (req, res) => {
    Product.findByPk
}

module.exports= {findProduct}