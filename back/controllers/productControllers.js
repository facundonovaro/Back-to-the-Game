const { Product } = require('../models')

<<<<<<< HEAD
const findProduct = (req, res) => {
    Product.findByPk({
        where: {
            id: req.params.id
        }
    })
    .then(product => res.send(product))
}

module.exports = findProduct
=======

const findAllProducts = (req, res) =>{
    Product.findAll()
    .then((products)=>{
      res.json(products)
    })
}

module.exports = findAllProducts
>>>>>>> eeb82908ed455e43e3337e034afd4ad5ac651f45
