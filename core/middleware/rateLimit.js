const rateLimitMap = new Map();

module.exports = (limit=100, interval=60000) => (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    if(!rateLimitMap.has(key)) rateLimitMap.set(key, []);
    const timestamps = rateLimitMap.get(key).filter(t => now - t < interval);
    if(timestamps.length >= limit) return res.status(429).json({ success: false, message: "Too many requests" });
    timestamps.push(now);
    rateLimitMap.set(key, timestamps);
    next();
};
