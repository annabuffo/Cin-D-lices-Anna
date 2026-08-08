import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

import routes from "./routes/indexRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        message: "Trop de tentatives. Réessayez dans 15 minutes."
    }
});

app.use(helmet());

app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

app.use(express.json({ limit: "1mb" }));

app.use("/api/auth", authLimiter, authRoutes);
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("API CinéDélices opérationnelle");
});

export default app;