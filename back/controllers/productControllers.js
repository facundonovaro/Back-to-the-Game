const { Product } = require('../models')

export const findProduct = (req, res) => {
    Product.findByPk
}