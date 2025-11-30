const PteroService = require("../services/pterodactylService");
const OrderService = require("../services/orderService");

class PteroController {
    static async approveServer(req, res) {
        try {
            const { orderId, panelUrl, username, password } = req.body;
            const order = OrderService.approveOrder(orderId, { panelUrl, username, password });
            res.json({ success: true, order });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }

    static async listServers(req, res) {
        try {
            const servers = await PteroService.listServers();
            res.json({ success: true, servers });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }

    static async deleteServer(req, res) {
        try {
            const { id } = req.params;
            await PteroService.deleteServer(id);
            res.json({ success: true });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
}

module.exports = PteroController;
