const express = require("express");
const router = express.Router();
const  {findProduct, addProduct, updateProduct, deleteProduct, findAllProducts}  = require('../controllers/productControllers');
const {addReview} = require('../controllers/reviewControllers')
// /api/products

router.get('/:id', findProduct)

router.get('/', findAllProducts)

router.post('/', addProduct)

router.patch('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports =  router

