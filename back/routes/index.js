const express = require("express");
const router = express.Router();
const productRouter = require("./products");
const userRouter = require("./users");
const cartRouter = require("./cart");
const searchRouter = require("./search")
const reviewsRouter = require("./reviews")

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/search", searchRouter)
router.use("/reviews", reviewsRouter)

module.exports = router;
