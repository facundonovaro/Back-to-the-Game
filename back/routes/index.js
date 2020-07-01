const express = require("express");
const router = express.Router();
const productRouter = require("./products");
const userRouter = require("./users");
const cartRouter = require("./cart");
const searchRouter = require("./search")
const checkoutRouter = require("./checkout")
const categoryRouter = require("./category");
const reviewsRouter = require("./reviews")

// /api
router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/checkout", checkoutRouter)
router.use("/search", searchRouter);
router.use("/category", categoryRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
