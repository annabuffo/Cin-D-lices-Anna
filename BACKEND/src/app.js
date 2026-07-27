import express from "express";
import routes from  "./routes/indexRoutes.js";
 
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API CinéDélices opérationnelle");
});

export default app;