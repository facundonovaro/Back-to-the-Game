const express = require("express");
const router = express.Router();
const { findAllProducts, findProduct }  = require('../controllers/productControllers');

// /api/products

router.get('/:id', findProduct)

router.get('/', findAllProducts)

module.exports = router

