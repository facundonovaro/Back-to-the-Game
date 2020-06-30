const express = require("express")
const router = express.Router()
const {addReview, findAllProductReviews} = require("../controllers/reviewControllers")

router.get("/")

router.get("/:id", findAllProductReviews)

router.post("/", addReview)

router.patch("/id:")

router.delete('/:id')

module.exports = router


