const express = require("express");
const router = express.Router();
const { Category, Product } = require("../models");
const {
  getCategory,
  newCategory,
  getCategories,
} = require("../controllers/categoryControllers");

router.get("/", getCategories);

router.post("/", newCategory);

router.get("/:category", getCategory);

module.exports = router;
