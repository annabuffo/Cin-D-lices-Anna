import "dotenv/config";

import app from "./src/app.js";
import sequelize from "./src/database/database.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });

        console.log("✅ Connexion à PostgreSQL réussie.");

        app.listen(PORT, () => {
            console.log(
                `🚀 Serveur démarré sur http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error("❌ Erreur serveur :", error);
        process.exit(1);
    }
}

startServer();