const express = require("express");
const router = express.Router();
const {
    updateOrderAdress,
    updateOrderStatus,
    getLastOrders,
} = require("../controllers/checkoutController");

router.patch("/adress", updateOrderAdress);
router.patch("/status", updateOrderStatus);
router.get('/lastorders',getLastOrders )


module.exports = router;
