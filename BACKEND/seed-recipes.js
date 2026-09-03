import "dotenv/config";

import sequelize from "./src/database/database.js";
import {
    Recipe,
    User,
    Category,
    Media,
} from "./src/models/index.js";

async function seedRecipes() {
    try {
        await sequelize.authenticate();

        console.log("✅ Connexion PostgreSQL réussie.");

        const user = await User.findOne({
            where: { email: "user@cinedelices.com" },
        });

        if (!user) {
            throw new Error("Utilisateur ChefCinema introuvable.");
        }

        const plat = await Category.findOne({
            where: { name: "Plat" },
        });

        const dessert = await Category.findOne({
            where: { name: "Dessert" },
        });

        const boisson = await Category.findOne({
            where: { name: "Boisson" },
        });

        const ratatouille = await Media.findOne({
            where: { title: "Ratatouille" },
        });

        const harryPotter = await Media.findOne({
            where: {
                title: "Harry Potter à L'école des Sorciers",
            },
        });

        const petiteSirene = await Media.findOne({
            where: { title: "La petite sirène" },
        });

        const mario = await Media.findOne({
            where: { title: "Super Mario Bros" },
        });

        if (
            !plat ||
            !dessert ||
            !boisson ||
            !ratatouille ||
            !harryPotter ||
            !petiteSirene ||
            !mario
        ) {
            throw new Error(
                "Une catégorie ou un média est introuvable."
            );
        }

        const demoRecipes = [
            {
                title: "Ratatouille provençale",
                description:
                    "Une ratatouille inspirée du célèbre film.",
                ingredients:
                    "1 courgette\n1 aubergine\n2 tomates\n1 poivron\nHerbes de Provence",
                instructions:
                    "Couper les légumes.\nFaire revenir les légumes.\nAjouter les herbes.\nLaisser mijoter.",
                difficulte: "Facile",
                prep_time: 20,
                cook_time: 35,
                user_id: user.id,
                category_id: plat.id,
                media_id: ratatouille.id,
                image_url: null,
            },
            {
                title: "Bièraubeurre",
                description:
                    "Une boisson inspirée de l'univers Harry Potter.",
                ingredients:
                    "Lait\nCaramel\nVanille\nCrème fouettée",
                instructions:
                    "Faire chauffer le lait.\nAjouter le caramel et la vanille.\nServir avec la crème.",
                difficulte: "Facile",
                prep_time: 10,
                cook_time: 5,
                user_id: user.id,
                category_id: boisson.id,
                media_id: harryPotter.id,
                image_url: null,
            },
            {
                title: "Boisson bleue des océans",
                description:
                    "Une boisson fraîche inspirée de La Petite Sirène.",
                ingredients:
                    "Limonade\nSirop bleu\nCitron\nGlaçons",
                instructions:
                    "Verser la limonade.\nAjouter le sirop.\nAjouter le citron et les glaçons.",
                difficulte: "Facile",
                prep_time: 5,
                cook_time: 0,
                user_id: user.id,
                category_id: boisson.id,
                media_id: petiteSirene.id,
                image_url: null,
            },
            {
                title: "Gâteau étoile Mario",
                description:
                    "Un dessert inspiré de l'univers Super Mario.",
                ingredients:
                    "Farine\nSucre\nŒufs\nBeurre\nVanille",
                instructions:
                    "Préparer la pâte.\nVerser dans un moule.\nCuire au four.\nDécorer.",
                difficulte: "Moyen",
                prep_time: 25,
                cook_time: 30,
                user_id: user.id,
                category_id: dessert.id,
                media_id: mario.id,
                image_url: null,
            },
        ];

        for (const recipe of demoRecipes) {
            const exists = await Recipe.findOne({
                where: {
                    title: recipe.title,
                    user_id: user.id,
                },
            });

            if (!exists) {
                await Recipe.create(recipe);

                console.log(`✅ ${recipe.title}`);
            } else {
                console.log(
                    `ℹ️ ${recipe.title} existe déjà.`
                );
            }
        }

        console.log("🎉 Recettes de démonstration ajoutées.");
    } catch (error) {
        console.error("❌ Erreur :", error);
    } finally {
        await sequelize.close();
    }
}

seedRecipes();