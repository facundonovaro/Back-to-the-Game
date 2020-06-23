const { Product } = require('../models')

const findProduct = (req, res) => {
    Product.findByPk({
        where: {
            id: req.params.id
        }
    })
    .then(product => res.send(product))
}

module.exports = findProduct