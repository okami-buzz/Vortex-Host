import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import pteroRoutes from "./routes/ptero.js";
import paymentRoutes from "./routes/payment.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'secret123', resave: false, saveUninitialized: false }));
app.use("/static", express.static("static"));
app.use("/ui", express.static("ui"));

// Routes
app.use("/auth", authRoutes);
app.use("/order", orderRoutes);
app.use("/ptero", pteroRoutes);
app.use("/payment", paymentRoutes);
app.use("/admin", adminRoutes);

// Home
app.get("/", (req, res) => res.sendFile("./ui/index.html", { root: "." }));

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 3000, () => console.log("Server running"));
});
