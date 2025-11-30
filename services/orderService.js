const DB = require("../database/connect");
const { randomToken } = require("../core/security");

class OrderService {
    static create(userId, plan, price, category) {
        const db = DB.load();
        const order = {
            id: randomToken(8),
            userId,
            plan,
            category,
            price,
            status: "pending",
            serverData: null,
            createdAt: Date.now()
        };
        db.orders.push(order);
        DB.save(db);
        return order;
    }

    static getUserOrders(userId) {
        const db = DB.load();
        return db.orders.filter(o => o.userId === userId);
    }

    static getPendingOrders() {
        const db = DB.load();
        return db.orders.filter(o => o.status === "pending");
    }

    static approveOrder(orderId, serverData) {
        const db = DB.load();
        const order = db.orders.find(o => o.id === orderId);
        if (!order) throw new Error("Order not found");
        order.status = "active";
        order.serverData = serverData;
        DB.save(db);
        return order;
    }
}

module.exports = OrderService;
