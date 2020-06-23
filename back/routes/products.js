const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const findProduct = require('../controllers/productControllers')

// /api/products

router.get('/:id', findProduct)

module.exports = router;
=======
const  findAllProducts  = require('../controllers/productControllers');
// /api/products


router.get('/', findAllProducts)

module.exports =  router
>>>>>>> eeb82908ed455e43e3337e034afd4ad5ac651f45
