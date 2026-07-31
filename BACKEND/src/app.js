import express from "express";
import routes from "./routes/indexRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API CinéDélices opérationnelle");
});

export default app;