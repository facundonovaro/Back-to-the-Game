const express = require("express");
const router = express.Router();
const { addToCart, findAllCart, deleteOrder, updateOrder, assignCart } = require("../controllers/cartControllers");

// /api/cart

router.post("/", addToCart);

router.post("/local", assignCart)

router.get("/", findAllCart);

router.delete("/:orderId", deleteOrder);

router.patch("/", updateOrder);

module.exports = router;
