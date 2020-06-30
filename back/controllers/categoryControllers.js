const { Category, Product } = require('../models');

const getCategory = (req, res) => {
    Category.findOne({
        where: {
            name: req.params.category,
            include: [{
                model: Product,
            }]
        }})
    .then(products => res.send(products))
}

module.exports = getCategory;