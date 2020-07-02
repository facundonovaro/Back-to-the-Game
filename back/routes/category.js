const express = require("express");
const router = express.Router();
const { Category, Product } = require('../models')
const { getCategory, newCategory } = require('../controllers/categoryControllers')


// /api/category

router.get('/:category', getCategory)

router.post('/', newCategory)

module.exports = router;