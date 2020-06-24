const express = require("express");
const router = express.Router();
const productRouter = require("./products");
const userRouter = require("./users");
const cartRouter = require("./cart");

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/cart", cartRouter);

module.exports = router;
