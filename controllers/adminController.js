const OrderService = require("../services/orderService");

class AdminController {
    static async pendingOrders(req, res) {
        const orders = OrderService.getPendingOrders();
        res.json({ success: true, pending: orders });
    }

    static async approveOrder(req, res) {
        const { orderId, serverData } = req.body;
        try {
            const order = OrderService.approveOrder(orderId, serverData);
            res.json({ success: true, order });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
}

module.exports = AdminController;
