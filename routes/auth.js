const express = require("express");
const AuthController = require("../controllers/authController");
const router = express.Router();

// Auth Routes
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh", AuthController.refreshToken);

module.exports = router;
