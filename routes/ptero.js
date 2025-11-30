const express = require("express");
const PteroController = require("../controllers/pteroController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Pterodactyl Server Management
router.get("/list", authMiddleware, PteroController.listServers);
router.delete("/delete/:id", authMiddleware, adminMiddleware, PteroController.deleteServer);
router.post("/approve", authMiddleware, adminMiddleware, PteroController.approveServer);

module.exports = router;
