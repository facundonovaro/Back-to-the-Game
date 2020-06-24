const express = require("express");
const router = express.Router();
const {
  addToCart,
  findAllCart,
  deleteOrder,
  updateOrder,
} = require("../controllers/cartControllers");

router.post("/", addToCart);

router.get("/:id", findAllCart);

router.delete("/:orderId/:userId", deleteOrder);

router.patch("/", updateOrder);

module.exports = router;
