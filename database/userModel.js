const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tier: { type: String, default: "free" },
    balance: { type: Number, default: 0 },
    servers: { type: [Object], default: [] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
