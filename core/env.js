require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/omega-hosting",
    JWT_SECRET: process.env.JWT_SECRET || "jwtsecret",
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "refreshsecret",
    PTERO_URL: process.env.PTERO_URL,
    PTERO_KEY: process.env.PTERO_KEY,
    PTERO_USER: process.env.PTERO_USER,
};
