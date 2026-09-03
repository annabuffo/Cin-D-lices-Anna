import "dotenv/config";

import sequelize from "./src/database/database.js";
import { seedDemoData } from "./src/seeders/demo-data.js";

async function runSeed() {
    try {
        await sequelize.authenticate();

        console.log("✅ Connexion PostgreSQL réussie.");

        const queryInterface = sequelize.getQueryInterface();

        await seedDemoData(queryInterface);

        console.log("✅ Données Ciné Délices ajoutées avec succès.");
    } catch (error) {
        console.error("❌ Erreur pendant le seeding :", error);
    } finally {
        await sequelize.close();
    }
}

runSeed();