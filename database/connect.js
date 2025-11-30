const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const env = require("../core/env");

let localDBFile = path.join(__dirname, "local.json");

// Connect to MongoDB
mongoose.connect(env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("[DB] MongoDB connected"))
    .catch(err => console.log("[DB] MongoDB connection failed:", err));

module.exports = {
    mongoose,
    load() {
        if (!fs.existsSync(localDBFile)) fs.writeFileSync(localDBFile, JSON.stringify({ users: [], orders: [], servers: [], nodes: [] }));
        return JSON.parse(fs.readFileSync(localDBFile));
    },
    save(data) {
        fs.writeFileSync(localDBFile, JSON.stringify(data, null, 2));
    }
};
