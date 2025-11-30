const OrderService = require("../services/orderService");
const PteroService = require("../services/pterodactylService");

class OrderController {
    static async createOrder(req, res) {
        try {
            const { userId, plan, category, price } = req.body;
            const order = OrderService.create(userId, plan, price, category);

            // Optionally auto-create server
            const serverData = await PteroService.createServer({
                name: `server-${Date.now()}`,
                egg: 1,
                docker_image: "ghcr.io/pterodactyl/yolks:nodejs_18",
                user: process.env.PTERO_USER,
                startup: "npm start",
                limits: { memory: 1024, disk: 5120, cpu: 50 },
                feature_limits: { databases: 1, allocations: 1 }
            });

            order.serverData = serverData;
            res.json({ success: true, order });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }

    static async getUserOrders(req, res) {
        try {
            const { userId } = req.params;
            const orders = OrderService.getUserOrders(userId);
            res.json({ success: true, orders });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
}

module.exports = OrderController;
