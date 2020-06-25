const express = require("express");
const router = express.Router();
const findAllSearchedProducts = require('../controllers/searchController')

router.get("/:name", findAllSearchedProducts)

module.exports = router