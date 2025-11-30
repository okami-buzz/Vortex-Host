const nodemailer = require("nodemailer");

class EmailService {
    static async send(to, subject, html) {
        const transporter = nodemailer.createTransport({
            host: "smtp.example.com",
            port: 587,
            auth: { user: "user", pass: "pass" }
        });
        await transporter.sendMail({ from: "Omega Cloud <noreply@example.com>", to, subject, html });
    }
}

module.exports = EmailService;
