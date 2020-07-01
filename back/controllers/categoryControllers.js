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

const addCategory = (req, res) => {
    Category.create(req.body)
    .then(category => res.send(category))
}

const getCategories = (req, res) => {
    Category.findAll()
    .then(categories => res.send(categories))
}

module.exports = { getCategory, addCategory, getCategories };