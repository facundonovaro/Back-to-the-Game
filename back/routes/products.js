const express = require("express");
const router = express.Router();
const {findProduct,findAllProducts }= require('../controllers/productControllers')

// /api/products

router.get('/:id', findProduct)

router.get('/', findAllProducts)

module.exports =  router

