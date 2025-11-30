const PaymentService = require("../services/paymentService");

class PaymentController {
    static async qris(req, res) {
        const { userId, amount } = req.body;
        const result = await PaymentService.processQRIS(userId, amount);
        res.json(result);
    }

    static async stripe(req, res) {
        const { userId, amount } = req.body;
        const result = await PaymentService.processStripe(userId, amount);
        res.json(result);
    }

    static async paypal(req, res) {
        const { userId, amount } = req.body;
        const result = await PaymentService.processPayPal(userId, amount);
        res.json(result);
    }
}

module.exports = PaymentController;
