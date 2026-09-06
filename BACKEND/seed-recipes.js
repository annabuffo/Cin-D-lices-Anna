import "dotenv/config";

import sequelize from "./src/database/database.js";

import {
    Recipe,
    User,
    Category,
    Media,
} from "./src/models/index.js";


/*
============================================================
SEED RECIPES COMPLET
============================================================

Pour CHAQUE film / série présent dans la base :

- 2 boissons
- 2 entrées
- 3 plats
- 2 desserts

Soit 9 recettes minimum par média.

Le script :
✅ ne supprime aucune recette existante
✅ conserve les recettes déjà créées
✅ complète uniquement les catégories manquantes
✅ fonctionne automatiquement avec tous les médias de la BDD
✅ peut être relancé sans recréer inutilement les recettes
*/


const TARGETS = {
    Boisson: 2,
    Entrée: 2,
    Plat: 3,
    Dessert: 2,
};


/*
============================================================
MODÈLES DE RECETTES
============================================================
*/


const templates = {


    /*
    ========================================================
    BOISSONS
    ========================================================
    */

    Boisson: [
        {
            name: "Cocktail fruité",
            description:
                "Une boisson fruitée et rafraîchissante inspirée de l'univers de",
            ingredients:
                "Jus d'orange\nJus d'ananas\nCitron vert\nGrenadine\nGlaçons\nMenthe fraîche",
            instructions:
                "Verser les jus dans un grand verre.\nAjouter quelques gouttes de grenadine.\nAjouter le citron vert.\nCompléter avec des glaçons.\nDécorer avec quelques feuilles de menthe.",
            difficulte: "Facile",
            prep_time: 8,
            cook_time: 0,
        },

        {
            name: "Mocktail pétillant",
            description:
                "Un cocktail sans alcool pétillant et coloré inspiré de",
            ingredients:
                "Limonade\nJus de pomme\nCitron\nSirop de fruits\nGlaçons\nFruits frais",
            instructions:
                "Verser le jus de pomme dans un verre.\nAjouter la limonade.\nAjouter le sirop de fruits.\nIncorporer quelques glaçons.\nDécorer avec les fruits frais.",
            difficulte: "Facile",
            prep_time: 7,
            cook_time: 0,
        },
    ],


    /*
    ========================================================
    ENTRÉES
    ========================================================
    */

    Entrée: [
        {
            name: "Bruschettas gourmandes",
            description:
                "Une entrée croustillante et généreuse inspirée de",
            ingredients:
                "Pain de campagne\nTomates\nMozzarella\nHuile d'olive\nBasilic\nSel\nPoivre",
            instructions:
                "Couper le pain en tranches.\nAjouter les tomates et la mozzarella.\nAssaisonner avec l'huile d'olive, le sel et le poivre.\nFaire gratiner quelques minutes.\nAjouter le basilic avant de servir.",
            difficulte: "Facile",
            prep_time: 15,
            cook_time: 10,
        },

        {
            name: "Velouté maison",
            description:
                "Un velouté doux et réconfortant inspiré de",
            ingredients:
                "Carottes\nPommes de terre\nOignon\nBouillon de légumes\nCrème\nSel\nPoivre",
            instructions:
                "Éplucher et couper les légumes.\nFaire revenir l'oignon.\nAjouter les légumes et le bouillon.\nLaisser cuire jusqu'à ce que les légumes soient tendres.\nMixer puis ajouter un peu de crème.",
            difficulte: "Facile",
            prep_time: 15,
            cook_time: 30,
        },
    ],


    /*
    ========================================================
    PLATS
    ========================================================
    */

    Plat: [
        {
            name: "Poulet rôti aux herbes",
            description:
                "Un plat généreux et parfumé inspiré de",
            ingredients:
                "Poulet\nPommes de terre\nCarottes\nAil\nHuile d'olive\nHerbes de Provence\nSel\nPoivre",
            instructions:
                "Préchauffer le four.\nDéposer le poulet dans un plat.\nAjouter les légumes autour.\nAssaisonner avec l'ail, les herbes et l'huile d'olive.\nCuire jusqu'à ce que le poulet soit bien doré.",
            difficulte: "Facile",
            prep_time: 20,
            cook_time: 50,
        },

        {
            name: "Pâtes crémeuses aux champignons",
            description:
                "Un plat de pâtes gourmand et réconfortant inspiré de",
            ingredients:
                "Tagliatelles\nChampignons\nCrème fraîche\nParmesan\nAil\nPersil\nSel\nPoivre",
            instructions:
                "Cuire les pâtes.\nFaire revenir les champignons avec l'ail.\nAjouter la crème.\nIncorporer les pâtes.\nAjouter le parmesan et le persil avant de servir.",
            difficulte: "Facile",
            prep_time: 15,
            cook_time: 20,
        },

        {
            name: "Riz parfumé aux légumes",
            description:
                "Un plat coloré et parfumé inspiré de",
            ingredients:
                "Riz\nPoivron\nCourgette\nCarotte\nOignon\nÉpices\nHuile d'olive\nSel",
            instructions:
                "Faire revenir l'oignon et les légumes.\nAjouter le riz.\nAjouter les épices.\nVerser l'eau nécessaire à la cuisson.\nLaisser cuire jusqu'à absorption complète.",
            difficulte: "Facile",
            prep_time: 15,
            cook_time: 25,
        },
    ],


    /*
    ========================================================
    DESSERTS
    ========================================================
    */

    Dessert: [
        {
            name: "Moelleux au chocolat",
            description:
                "Un dessert chocolaté et gourmand inspiré de",
            ingredients:
                "Chocolat noir\nBeurre\nŒufs\nSucre\nFarine\nVanille",
            instructions:
                "Faire fondre le chocolat avec le beurre.\nAjouter les œufs et le sucre.\nAjouter la farine et la vanille.\nVerser dans un moule.\nCuire au four en gardant le cœur légèrement fondant.",
            difficulte: "Facile",
            prep_time: 15,
            cook_time: 18,
        },

        {
            name: "Tarte fruitée",
            description:
                "Une tarte fraîche et colorée inspirée de",
            ingredients:
                "Pâte sablée\nCrème pâtissière\nFraises\nFramboises\nKiwi\nSucre glace",
            instructions:
                "Cuire la pâte sablée.\nLaisser refroidir.\nAjouter la crème pâtissière.\nDisposer harmonieusement les fruits.\nSaupoudrer légèrement de sucre glace.",
            difficulte: "Moyen",
            prep_time: 25,
            cook_time: 20,
        },
    ],
};


/*
============================================================
DESCRIPTION DU MÉDIA
============================================================
*/


function createMediaDescription(media) {
    const type =
        media.type === "serie"
            ? "cette série"
            : "ce film";

    return (
        `Découvrez l'univers de ${media.title} ` +
        `et plusieurs recettes inspirées de ${type}.`
    );
}


/*
============================================================
CRÉATION D'UNE RECETTE
============================================================
*/


async function createRecipe({
    media,
    user,
    category,
    template,
    index,
}) {

    /*
     * On ajoute le titre du film / série dans le titre
     * afin d'éviter les doublons entre les médias.
     */

    const title =
        `${template.name} — ${media.title}`;


    /*
     * Sécurité supplémentaire :
     * vérifier que cette recette n'existe pas déjà.
     */

    const existing =
        await Recipe.findOne({
            where: {
                title,
                media_id: media.id,
            },
        });


    if (existing) {
        return false;
    }


    await Recipe.create({

        title,

        description:
            `${template.description} ${media.title}.`,

        ingredients:
            template.ingredients,

        instructions:
            template.instructions,

        difficulte:
            template.difficulte,

        image_url:
            media.image_url || null,

        prep_time:
            template.prep_time,

        cook_time:
            template.cook_time,

        user_id:
            user.id,

        category_id:
            category.id,

        media_id:
            media.id,
    });


    return true;
}


/*
============================================================
SEED PRINCIPAL
============================================================
*/


async function seedRecipes() {

    try {

        /*
        ====================================================
        CONNEXION
        ====================================================
        */

        await sequelize.authenticate();

        console.log(
            "✅ Connexion PostgreSQL réussie."
        );


        /*
        ====================================================
        UTILISATEUR DE DÉMONSTRATION
        ====================================================
        */

        const user =
            await User.findOne({
                where: {
                    email:
                        "user@cinedelices.com",
                },
            });


        if (!user) {

            throw new Error(
                "Utilisateur user@cinedelices.com introuvable."
            );

        }


        /*
        ====================================================
        CATÉGORIES
        ====================================================
        */

        const categories =
            await Category.findAll();


        const categoryByName =
            new Map(
                categories.map(
                    (category) => [
                        category.name,
                        category,
                    ]
                )
            );


        for (
            const categoryName
            of Object.keys(TARGETS)
        ) {

            if (
                !categoryByName.has(
                    categoryName
                )
            ) {

                throw new Error(
                    `Catégorie introuvable : ${categoryName}`
                );

            }

        }


        /*
        ====================================================
        MÉDIAS
        ====================================================
        */

        const medias =
            await Media.findAll({
                order: [
                    ["id", "ASC"],
                ],
            });


        if (
            medias.length === 0
        ) {

            throw new Error(
                "Aucun film ou série trouvé dans la base."
            );

        }


        console.log("");

        console.log(
            `🎬 ${medias.length} films / séries trouvés.`
        );

        console.log(
            `🎯 Objectif : 9 recettes minimum par média.`
        );

        console.log("");


        let totalCreated = 0;
        let totalAlreadyPresent = 0;
        let descriptionsUpdated = 0;


        /*
        ====================================================
        TRAITEMENT DE CHAQUE FILM / SÉRIE
        ====================================================
        */

        for (
            const media
            of medias
        ) {

            console.log(
                "--------------------------------------------------"
            );

            console.log(
                `🎬 ${media.title}`
            );


            /*
            =================================================
            DESCRIPTION DU FILM / SÉRIE
            =================================================
            */

            if (
                !media.description ||
                !media.description.trim()
            ) {

                await media.update({
                    description:
                        createMediaDescription(
                            media
                        ),
                });

                descriptionsUpdated++;

                console.log(
                    "📝 Description média ajoutée."
                );

            }


            /*
            =================================================
            CHAQUE CATÉGORIE
            =================================================
            */

            for (
                const [
                    categoryName,
                    targetCount,
                ]
                of Object.entries(
                    TARGETS
                )
            ) {

                const category =
                    categoryByName.get(
                        categoryName
                    );


                /*
                 * Compter les recettes existantes
                 * pour ce film + cette catégorie.
                 */

                const existingCount =
                    await Recipe.count({
                        where: {
                            media_id:
                                media.id,

                            category_id:
                                category.id,
                        },
                    });


                /*
                 * Exemple :
                 *
                 * objectif Plat = 3
                 *
                 * si 2 existent :
                 * missing = 1
                 */

                const missing =
                    Math.max(
                        0,
                        targetCount -
                            existingCount
                    );


                if (
                    missing === 0
                ) {

                    console.log(
                        `ℹ️ ${categoryName} : ${existingCount}/${targetCount}`
                    );

                    totalAlreadyPresent +=
                        existingCount;

                    continue;

                }


                console.log(
                    `➕ ${categoryName} : ${existingCount}/${targetCount} → ${missing} à ajouter`
                );


                /*
                 * Liste des modèles disponibles
                 * pour cette catégorie.
                 */

                const categoryTemplates =
                    templates[
                        categoryName
                    ];


                let createdForCategory =
                    0;


                /*
                 * On parcourt les modèles.
                 */

                for (
                    let i = 0;
                    i <
                    categoryTemplates.length;
                    i++
                ) {

                    if (
                        createdForCategory >=
                        missing
                    ) {
                        break;
                    }


                    const created =
                        await createRecipe({

                            media,

                            user,

                            category,

                            template:
                                categoryTemplates[
                                    i
                                ],

                            index: i,

                        });


                    if (created) {

                        createdForCategory++;

                        totalCreated++;

                        console.log(
                            `   ✅ ${categoryTemplates[i].name}`
                        );

                    }

                }


                /*
                 * Cas particulier :
                 *
                 * une recette avec le même titre
                 * pourrait déjà exister.
                 *
                 * On revérifie donc le total réel.
                 */

                let finalCount =
                    await Recipe.count({
                        where: {
                            media_id:
                                media.id,

                            category_id:
                                category.id,
                        },
                    });


                /*
                 * Si jamais il manque encore une recette,
                 * on crée une variante.
                 */

                let variant = 1;


                while (
                    finalCount <
                    targetCount
                ) {

                    const baseTemplate =
                        categoryTemplates[
                            variant %
                                categoryTemplates.length
                        ];


                    const variantTitle =
                        `${baseTemplate.name} ${variant + 1} — ${media.title}`;


                    const alreadyExists =
                        await Recipe.findOne({
                            where: {
                                title:
                                    variantTitle,

                                media_id:
                                    media.id,
                            },
                        });


                    if (
                        !alreadyExists
                    ) {

                        await Recipe.create({

                            title:
                                variantTitle,

                            description:
                                `${baseTemplate.description} ${media.title}.`,

                            ingredients:
                                baseTemplate.ingredients,

                            instructions:
                                baseTemplate.instructions,

                            difficulte:
                                baseTemplate.difficulte,

                            image_url:
                                media.image_url ||
                                null,

                            prep_time:
                                baseTemplate.prep_time,

                            cook_time:
                                baseTemplate.cook_time,

                            user_id:
                                user.id,

                            category_id:
                                category.id,

                            media_id:
                                media.id,
                        });


                        totalCreated++;

                        finalCount++;

                        console.log(
                            `   ✅ ${baseTemplate.name} ${variant + 1}`
                        );

                    }


                    variant++;

                }

            }


            /*
            =================================================
            CONTRÔLE DU TOTAL DU MÉDIA
            =================================================
            */

            const totalForMedia =
                await Recipe.count({
                    where: {
                        media_id:
                            media.id,
                    },
                });


            console.log(
                `✅ Total ${media.title} : ${totalForMedia} recettes`
            );

        }


        /*
        ====================================================
        RÉSUMÉ FINAL
        ====================================================
        */

        const finalRecipeCount =
            await Recipe.count();


        console.log("");

        console.log(
            "=================================================="
        );

        console.log(
            "🎉 SEED RECIPES TERMINÉ"
        );

        console.log(
            "=================================================="
        );

        console.log(
            `🎬 Médias traités : ${medias.length}`
        );

        console.log(
            `➕ Nouvelles recettes créées : ${totalCreated}`
        );

        console.log(
            `📝 Descriptions médias ajoutées : ${descriptionsUpdated}`
        );

        console.log(
            `🍽️ Nombre total de recettes en BDD : ${finalRecipeCount}`
        );

        console.log(
            "✅ Aucune recette existante supprimée."
        );

        console.log(
            "=================================================="
        );


    } catch (error) {

        console.error(
            "❌ Erreur seed-recipes :",
            error
        );


    } finally {

        await sequelize.close();

    }

}


seedRecipes();