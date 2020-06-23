const express = require("express");
const router = express.Router();
const { findProduct } = require('../controllers/productControllers')
// /api/products

router.get('/:id', findProduct)