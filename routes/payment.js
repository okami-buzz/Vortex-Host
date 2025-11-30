const express = require("express");
const PaymentController = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Payment Routes
router.post("/qris", authMiddleware, PaymentController.qris);
router.post("/stripe", authMiddleware, PaymentController.stripe);
router.post("/paypal", authMiddleware, PaymentController.paypal);

module.exports = router;
