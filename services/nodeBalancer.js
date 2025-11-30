const DB = require("../database/connect");

class NodeBalancer {
    static pickNode() {
        const db = DB.load();
        // placeholder: pick node with fewest servers
        return db.nodes ? db.nodes[0] : null;
    }

    static assignServer(serverId) {
        const node = this.pickNode();
        if (!node) throw new Error("No nodes available");
        node.servers = node.servers || [];
        node.servers.push(serverId);
        DB.save(DB.load());
        return node;
    }
}

module.exports = NodeBalancer;
