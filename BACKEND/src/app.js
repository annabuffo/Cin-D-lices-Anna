import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

import routes from "./routes/indexRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim());

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        message: "Trop de tentatives. Réessayez dans 15 minutes.",
    },
});

app.use(helmet());

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
                return;
            }

            callback(null, true);
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json({ limit: "1mb" }));

app.use("/api/auth", authLimiter, authRoutes);
app.use("/api", routes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API Ciné Délices opérationnelle",
        status: "ok",
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: "Route introuvable.",
    });
});

export default app;