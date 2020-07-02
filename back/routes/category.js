const express = require("express");
const router = express.Router();
const { Category, Product } = require('../models')
const { getCategory, newCategory, getCategories } = require('../controllers/categoryControllers')


router.get('/', getCategories)

router.get('/:category', getCategory)

router.post('/', newCategory)

module.exports = router;