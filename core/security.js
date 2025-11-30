const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("./env");

module.exports = {
    hashPassword: async (password) => await bcrypt.hash(password, 10),
    comparePassword: async (password, hash) => await bcrypt.compare(password, hash),
    signToken: (payload, expiresIn="1h") => jwt.sign(payload, env.JWT_SECRET, { expiresIn }),
    verifyToken: (token) => jwt.verify(token, env.JWT_SECRET),
    signRefresh: (payload, expiresIn="7d") => jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn }),
    verifyRefresh: (token) => jwt.verify(token, env.JWT_REFRESH_SECRET)
};
