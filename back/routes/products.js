const express = require("express");
const router = express.Router();
const  findAllProducts  = require('../controllers/productControllers');
// /api/products


router.get('/', findAllProducts)

module.exports =  router