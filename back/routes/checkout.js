const express = require("express");
const router = express.Router();
const {
  updateOrderAdress,
  updateOrderStatus,
  getLastOrders,
  updateStock,
  getAllOrders,
  salesHistory,
  productSales,
} = require("../controllers/checkoutController");

router.patch("/adress", updateOrderAdress);
router.patch("/status", updateOrderStatus);
router.get("/lastorders", getLastOrders);
router.patch("/stock", updateStock);
router.get("/allorders", getAllOrders);
router.get("/saleshistory/:firstDate/:lastDate", salesHistory);
router.get("/productsales/:firstDate/:lastDate", productSales);

module.exports = router;
