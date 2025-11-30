const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    pteroId: { type: String, required: true },
    plan: { type: String, required: true },
    node: { type: String, default: null },
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Server", serverSchema);
