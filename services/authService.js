const DB = require("../database/connect");
const jwt = require("jsonwebtoken");
const env = require("../core/env");
const { hash, randomToken } = require("../core/security");

class AuthService {
    static register(email, password) {
        const db = DB.load();
        if (db.users.find(u => u.email === email)) throw new Error("Email exists");
        const user = {
            id: randomToken(8),
            email,
            pass: hash(password),
            tier: "free",
            balance: 0
        };
        db.users.push(user);
        DB.save(db);
        return user;
    }

    static login(email, password) {
        const db = DB.load();
        const user = db.users.find(u => u.email === email && u.pass === hash(password));
        if (!user) throw new Error("Invalid credentials");

        const access = jwt.sign({ id: user.id, tier: user.tier }, env.JWT_ACCESS, { expiresIn: "15m" });
        const refresh = jwt.sign({ id: user.id }, env.JWT_REFRESH, { expiresIn: "30d" });

        return { access, refresh, user };
    }

    static refreshToken(token) {
        const payload = jwt.verify(token, env.JWT_REFRESH);
        const access = jwt.sign({ id: payload.id }, env.JWT_ACCESS, { expiresIn: "15m" });
        return access;
    }
}

module.exports = AuthService;
