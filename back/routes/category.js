const express = require("express");
const router = express.Router();
const { Category, Product } = require('../models')
const { getCategory } = require('../controllers/categoryControllers')

router.get('/:category', (req, res) => {
    

    Category.findOne({
        where: {
            name: req.params.category,
            include: [{
                model: Product,
            }]
        }
    })
    .then(products => res.send(products))
})

module.exports = router;