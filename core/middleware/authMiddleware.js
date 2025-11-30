const jwt = require("jsonwebtoken");
const env = require("../env");

module.exports = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1] || req.cookies?.access;
    if(!token) return res.status(401).json({ success: false, message: "No token provided" });

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err) {
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};
