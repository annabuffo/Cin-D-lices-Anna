import argon2 from "argon2";

export async function seedDemoData(queryInterface) {
    const hashedPassword = await argon2.hash("password2026");

    // Nettoyage : ordre obligatoire à cause des clés étrangères
    await queryInterface.bulkDelete("comments", null, {});
    await queryInterface.bulkDelete("recipes", null, {});
    await queryInterface.bulkDelete("media", null, {});
    await queryInterface.bulkDelete("categories", null, {});
    await queryInterface.bulkDelete("users", null, {});

    // UTILISATEURS
    await queryInterface.bulkInsert("users", [
        {
            username: "admin",
            email: "admin@cinedelices.com",
            password_hash: hashedPassword,
            role: "admin",
            birth_date: "1990-01-01",
            date_created: new Date(),
        },
        {
            username: "ChefCinema",
            email: "user@cinedelices.com",
            password_hash: hashedPassword,
            role: "user",
            birth_date: "1995-01-01",
            date_created: new Date(),
        },
    ]);

    // CATEGORIES
    await queryInterface.bulkInsert("categories", [
        {
            name: "Entrée",
            description: "Recettes à servir en entrée",
        },
        {
            name: "Plat",
            description: "Plats principaux",
        },
        {
            name: "Dessert",
            description: "Desserts et recettes sucrées",
        },
        {
            name: "Boisson",
            description: "Boissons",
        },
    ]);

    // FILMS / SERIES
    await queryInterface.bulkInsert("media", [
        {
            title: "La petite sirène",
            type: "film",
            image_url: "/img-card-sct-1/sir%C3%A8ne.jpg",
            release_date: "2026-01-01",
            description: "",
        },
        {
            title: "Super Mario Bros",
            type: "film",
            image_url: "/img-home/Mario.jpg",
            release_date: "2022-01-01",
            description: "",
        },
        {
            title: "La soupe aux choux",
            type: "film",
            image_url: "/img-home/La_Soupe_aux_choux.jpg",
            release_date: "2023-01-01",
            description: "",
        },
        {
            title: "Doctor Who",
            type: "serie",
            image_url: "/img-home/who.webp",
            release_date: "2018-01-01",
            description: "",
        },
        {
            title: "Charlie et la chocolaterie",
            type: "film",
            image_url: "/img-home/chocolat.webp",
            release_date: "2005-01-01",
            description: "",
        },
        {
            title: "Vice-Versa",
            type: "film",
            image_url: "/img-home/vice%20versa.jpg",
            release_date: "2015-01-01",
            description: "",
        },
        {
            title: "Né quelque part",
            type: "film",
            image_url: "/img-home/n%C3%A9.jpg",
            release_date: "2018-01-01",
            description: "",
        },
        {
            title: "L'odyssée de Pi",
            type: "film",
            image_url: "/img-home/odyss%C3%A9.webp",
            release_date: "2012-01-01",
            description: "",
        },
        {
            title: "Ratatouille",
            type: "film",
            image_url: "/img-card-sct-1/ratatouille.webp",
            release_date: "2014-01-01",
            description: "",
        },
        {
            title: "Aquaman",
            type: "film",
            image_url: "/img-card-sct-1/aquaman1.webp",
            release_date: "2018-01-01",
            description: "",
        },
        {
            title: "Aquaman 2",
            type: "film",
            image_url: "/img-card-sct-1/aquaman2.webp",
            release_date: "2023-01-01",
            description: "",
        },
        {
            title: "Alice au pays des merveilles",
            type: "film",
            image_url: "/img-card-sct-1/alice.webp",
            release_date: "2010-01-01",
            description: "",
        },
        {
            title: "Les Simpsons le film",
            type: "film",
            image_url: "/img-card-sct-1/simpson.webp",
            release_date: "2007-01-01",
            description: "",
        },
        {
            title: "Vaiana",
            type: "film",
            image_url: "/img-card-sct-1/vaiana.webp",
            release_date: "2016-01-01",
            description: "",
        },
        {
            title: "Vaiana 2",
            type: "film",
            image_url: "/img-card-sct-1/vaiana2.webp",
            release_date: "2024-01-01",
            description: "",
        },
        {
            title: "Toys Story",
            type: "film",
            image_url: "/img-card-sct-1/toysStory.jpg",
            release_date: "1995-01-01",
            description: "",
        },

                {
            title: "Pirates des caraïbe",
            type: "film",
            image_url: "/img-card-sct-1/pdc1.webp",
            release_date: "2003-01-01",
            description: "",
        },
        {
            title: "Pirates des caraïbe 2",
            type: "film",
            image_url: "/img-card-sct-1/pdc2.jpeg",
            release_date: "2006-01-01",
            description: "",
        },
        {
            title: "Pirates des caraïbe 3",
            type: "film",
            image_url: "/img-card-sct-1/pdc3.webp",
            release_date: "2007-01-01",
            description: "",
        },
        {
            title: "Pirates des caraïbes 4",
            type: "film",
            image_url: "/img-card-sct-1/pdc4.webp",
            release_date: "2011-01-01",
            description: "",
        },
        {
            title: "Raiponce",
            type: "film",
            image_url: "/img-card-sct-1/raiponce.jpg",
            release_date: "2010-01-01",
            description: "",
        },
        {
            title: "Rio",
            type: "film",
            image_url: "/img-card-sct-1/rio1.jpg",
            release_date: "2011-01-01",
            description: "",
        },
        {
            title: "Rio 2",
            type: "film",
            image_url: "/img-card-sct-1/rio2.jpg",
            release_date: "2014-01-01",
            description: "",
        },
        {
            title: "Epic",
            type: "film",
            image_url: "/img-card-sct-1/epic.jpg",
            release_date: "2013-01-01",
            description: "",
        },
        {
            title: "Le monde de Ralph",
            type: "film",
            image_url: "/img-card-sct-1/lmdr.jpg",
            release_date: "2012-01-01",
            description: "",
        },
        {
            title: "Coco",
            type: "film",
            image_url: "/img-card-sct-1/coco.jpeg",
            release_date: "2017-01-01",
            description: "",
        },
        {
            title: "Soul",
            type: "film",
            image_url: "/img-card-sct-1/soul.jpeg",
            release_date: "2020-01-01",
            description: "",
        },
        {
            title: "Harry Potter à L'école des Sorciers",
            type: "film",
            image_url: "/img-card-sct-1/harry1.jpg",
            release_date: "2001-01-01",
            description: "",
        },
        {
            title: "Harry Potter et la Chambre des secrets",
            type: "film",
            image_url: "/img-card-sct-1/harry2.jpg",
            release_date: "2002-01-01",
            description: "",
        },
        {
            title: "Harry Potter et le Prisonnier d'Azkaban",
            type: "film",
            image_url: "/img-card-sct-1/harry3.webp",
            release_date: "2004-01-01",
            description: "",
        },
        {
            title: "Harry Potter et la Coupe de feu",
            type: "film",
            image_url: "/img-card-sct-1/harry4.webp",
            release_date: "2005-01-01",
            description: "",
        },
        {
            title: "Harry Potter et l'Ordre du Phénix",
            type: "film",
            image_url: "/img-card-sct-1/harry5.jpg",
            release_date: "2007-01-01",
            description: "",
        },
        {
            title: "Harry Potter et le Prince de sang-mêlé",
            type: "film",
            image_url: "/img-card-sct-1/harry6.jpg",
            release_date: "2009-01-01",
            description: "",
        },
        {
            title: "Harry Potter et les reliques de la mort - 1 ère partie",
            type: "film",
            image_url: "/img-card-sct-1/harry7.1.avif",
            release_date: "2010-01-01",
            description: "",
        },
        {
            title: "Harry Potter et les reliques de la mort - 2 ère partie",
            type: "film",
            image_url: "/img-card-sct-1/harry7.2.webp",
            release_date: "2011-01-01",
            description: "",
        },
        {
            title: "Le Grinch",
            type: "film",
            image_url: "/img-card-sct-1/grinch.jpg",
            release_date: "2000-01-01",
            description: "",
        },
        {
            title: "Loki - saison 1",
            type: "serie",
            image_url: "/img-card-sct-1/loki1.jpg",
            release_date: "2021-01-01",
            description: "",
        },
        {
            title: "Loki - saison 2",
            type: "serie",
            image_url: "/img-card-sct-1/loki2.jpg",
            release_date: "2023-01-01",
            description: "",
        },
    ]);
}

export async function clearDemoData(queryInterface) {
    await queryInterface.bulkDelete("comments", null, {});
    await queryInterface.bulkDelete("recipes", null, {});
    await queryInterface.bulkDelete("media", null, {});
    await queryInterface.bulkDelete("categories", null, {});
    await queryInterface.bulkDelete("users", null, {});
}