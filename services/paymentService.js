class PaymentService {
    static async processQRIS(userId, amount) {
        // placeholder QRIS API integration
        return { status: "pending", userId, amount };
    }

    static async processStripe(userId, amount) {
        return { status: "pending", userId, amount };
    }

    static async processPayPal(userId, amount) {
        return { status: "pending", userId, amount };
    }

    static markPaid(paymentId) {
        // update DB/payment status
        return true;
    }
}

module.exports = PaymentService;
