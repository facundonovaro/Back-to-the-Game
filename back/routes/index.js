const express = require("express");
const router = express.Router();
const productRouter = require('./products')

/*router.get("/", (req, res, next) => {
  res.sendStatus(200);
});*/

router.use('/products', productRouter)

module.exports = router;
