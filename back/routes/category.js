const express = require("express");
const router = express.Router();
const { Category, Product } = require('../models')
const getCategory = require('../controllers/categoryControllers')

// /api/category

router.get('/:category', getCategory)

module.exports = router;