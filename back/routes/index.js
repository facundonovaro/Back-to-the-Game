const express = require("express");
const router = express.Router();
const productRouter = require("./products");
const userRouter = require("./users");
const cartRouter = require("./cart");
const searchRouter = require("./search")

// /api
router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/search", searchRouter)

module.exports = router;
