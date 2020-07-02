const { Category, Product } = require('../models');

const getCategory = (req, res) => {

    Category.findAll({
        where: {
            name: req.params.category,
        },
        include: [{
            model: Product,
        }]
    })
        .then(products => res.send(products))
}

const newCategory = (req, res) => {
    Product.findOne({
        where: {
            id: req.body.productId,
        }
    }).then((findProduct) => {
        const product = findProduct;
        Category.create(req.body)
            .then(category => {
                product.setCategory(category)
            })
    }).then((category) => {
        res.status(200).json(category)
    })
}


module.exports = { getCategory, newCategory };