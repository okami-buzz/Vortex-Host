const express = require("express");
const OrderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Order Routes
router.post("/create", authMiddleware, OrderController.createOrder);
router.get("/user/:userId", authMiddleware, OrderController.getUserOrders);

module.exports = router;
