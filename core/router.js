const express = require("express");
const authRoutes = require("../routes/auth");
const orderRoutes = require("../routes/order");
const pteroRoutes = require("../routes/ptero");
const paymentRoutes = require("../routes/payment");
const adminRoutes = require("../routes/admin");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/order", orderRoutes);
router.use("/ptero", pteroRoutes);
router.use("/payment", paymentRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
