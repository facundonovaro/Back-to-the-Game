const express = require("express");
const router = express.Router();
const {
    updateOrderAdress,
    updateOrderStatus,
    getLastOrders,
    updateStock,
} = require("../controllers/checkoutController");

router.patch("/adress", updateOrderAdress);
router.patch("/status", updateOrderStatus);
router.get('/lastorders', getLastOrders);
router.patch('/stock', updateStock);


module.exports = router;
