const express = require("express");
const router = express.Router();
const  {findAllProducts, findProduct, addProduct, updateProduct, deleteProduct}  = require('../controllers/productControllers');
const {addReview} = require('../controllers/reviewControllers')
// /api/products

router.get('/:id', findProduct)

router.get('/', findAllProducts)

router.post('/', addProduct)

router.patch('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.post("/:id/reviews", addReview)

module.exports =  router

