const User = require("../../database/userModel");

module.exports = async (req, res, next) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if(!user || user.role !== "admin") return res.status(403).json({ success: false, message: "Admin access required" });
    next();
};
