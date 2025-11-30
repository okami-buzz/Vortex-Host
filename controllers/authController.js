const AuthService = require("../services/authService");

class AuthController {
    static async register(req, res) {
        try {
            const { email, password } = req.body;
            const user = AuthService.register(email, password);
            res.json({ success: true, user });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const { access, refresh, user } = AuthService.login(email, password);
            res.cookie("access", access, { httpOnly: true });
            res.cookie("refresh", refresh, { httpOnly: true });
            res.json({ success: true, user });
        } catch (err) {
            res.status(401).json({ success: false, message: err.message });
        }
    }

    static async refreshToken(req, res) {
        try {
            const { refresh } = req.cookies;
            const access = AuthService.refreshToken(refresh);
            res.cookie("access", access, { httpOnly: true });
            res.json({ success: true });
        } catch (err) {
            res.status(403).json({ success: false, message: err.message });
        }
    }
}

module.exports = AuthController;
