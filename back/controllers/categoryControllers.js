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
    console.log(req.body)
    console.log(req.body.productId)
    Product.findOne({
        where: {
            id: req.body.productId,
        }
    }).then((findProduct) => {
        const product = findProduct;
        Category.create(req.body)
            .then(category => {
                product.addCategory(category)
            })
    }).then((category) => {
        res.status(200).json(category)
    })

}

const getCategories = (req, res) => {
    Category.findAll()
        .then(categories => res.send(categories))
}

module.exports = { getCategory, newCategory, getCategories };
