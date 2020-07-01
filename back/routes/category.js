const express = require("express");
const router = express.Router();
const { Category, Product } = require('../models')
const { getCategory, addCategory, getCategories } = require('../controllers/categoryControllers')

// /api/category

router.get('/', getCategories)

router.get('/:category', getCategory)

router.post('/', addCategory)

module.exports = router;