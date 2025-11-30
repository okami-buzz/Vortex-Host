const express = require("express");
const AdminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Admin Routes
router.get("/pending", authMiddleware, adminMiddleware, AdminController.pendingOrders);
router.post("/approve", authMiddleware, adminMiddleware, AdminController.approveOrder);

module.exports = router;
