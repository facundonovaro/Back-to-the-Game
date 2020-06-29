const express = require("express");
const router = express.Router();
const {
  addToCart,
  findAllCart,
  deleteOrder,
  updateOrder,
} = require("../controllers/cartControllers");

router.post("/", addToCart);

router.get("/", findAllCart);

router.delete("/:productId", deleteOrder);

router.patch("/", updateOrder);

module.exports = router;
