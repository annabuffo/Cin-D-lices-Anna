import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import sequelize from "./src/database/database.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à PostgreSQL réussie.");

        app.listen(PORT, () => {
            console.log(`🚀 Démarrage du serveur sur http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Erreur de connexion à PostgreSQL :", error);
    }
}

startServer();