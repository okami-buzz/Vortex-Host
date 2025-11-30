const axios = require("axios");
const env = require("../core/env");

class PteroService {
    static async createServer(opts) {
        const response = await axios.post(`${env.PTERO_URL}/api/application/servers`, opts, {
            headers: {
                Authorization: `Bearer ${env.PTERO_KEY}`,
                "Content-Type": "application/json",
                Accept: "Application/vnd.pterodactyl.v1+json"
            }
        });
        return response.data;
    }

    static async listServers() {
        const response = await axios.get(`${env.PTERO_URL}/api/application/servers`, {
            headers: { Authorization: `Bearer ${env.PTERO_KEY}` }
        });
        return response.data;
    }

    static async deleteServer(id) {
        await axios.delete(`${env.PTERO_URL}/api/application/servers/${id}`, {
            headers: { Authorization: `Bearer ${env.PTERO_KEY}` }
        });
    }
}

module.exports = PteroService;
