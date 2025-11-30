const WebSocket = require("ws");

module.exports = function initWS(server) {
    const wss = new WebSocket.Server({ server });

    wss.on("connection", ws => {
        console.log("[WS] Client connected");

        ws.on("message", msg => {
            console.log("[WS] Received:", msg.toString());
        });

        ws.send(JSON.stringify({ message: "Welcome to Omega Tier WS" }));
    });

    return wss;
};
