<script>
    let search = "";
    let selectedCategory = "all";
    let selectedMedia = "all";

    const recipes = [
        {
            id: "super-mario",
            title: "Tagliatelles crémeuses aux champignons",
            movie: "Super Mario Bros",
            category: "Plat principal",
            image: "/img-card-sct-1/champignon.jpg",
        },
        {
            id: "petite-sirene",
            title: "Poisson rôti et légumes au four",
            movie: "La Petite Sirène",
            category: "Plat principal",
            image: "/img-card-sct-1/poisson.jpg",
        },
        {
            id: "ratatouille",
            title: "Ratatouille provençale aux légumes",
            movie: "Ratatouille",
            category: "Plat principal",
            image: "/img-card-sct-1/ratatouille.webp",
        },
        {
            id: "soupe-choux",
            title: "Soupe aux choux traditionnelle",
            movie: "La Soupe aux Choux",
            category: "Plat principal",
            image: "/img-card-sct-1/choux.png",
        },
        {
            id: "charlie-chocolaterie",
            title: "Moelleux au chocolat et caramel",
            movie: "Charlie et la Chocolaterie",
            category: "Dessert",
            image: "/img-card-sct-1/moelleux.jpg",
        },
        {
            id: "odyssee-pi",
            title: "Riz au curry et lait de coco",
            movie: "L'Odyssée de Pi",
            category: "Plat principal",
            image: "/img-card-sct-1/rizCurry.jpeg",
        },
        {
            id: "vice-versa",
            title: "Cupcakes colorés des émotions",
            movie: "Vice-Versa",
            category: "Dessert",
            image: "/img-card-sct-1/emotion.jpg",
        },
        {
            id: "doctor-who",
            title: "Tourte du Tardis au poulet",
            movie: "Doctor Who",
            category: "Plat principal",
            image: "/img-home/who.webp",
        },
        {
            id: "ne-quelque-part",
            title: "Makrouts traditionnels aux dattes",
            movie: "Né quelque part",
            category: "Dessert",
            image: "/img-home/né.jpg",
        },
        {
            id: "aquaman",
            title: "Risotto crémeux aux fruits de mer",
            movie: "Aquaman",
            category: "Plat principal",
            image: "/img-card-sct-1/aquaman1.webp",
        },
        {
            id: "aquaman-2",
            title: "Saumon rôti au citron et aux herbes",
            movie: "Aquaman 2",
            category: "Plat principal",
            image: "/img-card-sct-1/aquaman2.webp",
        },
        {
            id: "alice",
            title: "Scones anglais et confiture de fraises",
            movie: "Alice au pays des merveilles",
            category: "Dessert",
            image: "/img-card-sct-1/alice.webp",
        },
        {
            id: "simpson",
            title: "Donuts américains glacés",
            movie: "Les Simpson le film",
            category: "Dessert",
            image: "/img-card-sct-1/simpson.webp",
        },
        {
            id: "vaiana",
            title: "Poké bowl au saumon et à la mangue",
            movie: "Vaiana",
            category: "Plat principal",
            image: "/img-card-sct-1/vaiana.webp",
        },
        {
            id: "vaiana-2",
            title: "Poulet coco à l'ananas",
            movie: "Vaiana 2",
            category: "Plat principal",
            image: "/img-card-sct-1/vaiana2.webp",
        },
        {
            id: "toy-story",
            title: "Pizza cow-boy au poulet barbecue",
            movie: "Toy Story",
            category: "Plat principal",
            image: "/img-card-sct-1/toysStory.jpg",
        },
        {
            id: "pirates-caraibes",
            title: "Ragoût du pirate au bœuf et légumes",
            movie: "Pirates des Caraïbes",
            category: "Plat principal",
            image: "/img-card-sct-1/pdc1.webp",
        },
        {
            id: "pirates-caraibes-2",
            title: "Crevettes épicées au citron vert",
            movie: "Pirates des Caraïbes 2",
            category: "Plat principal",
            image: "/img-card-sct-1/pdc2.jpeg",
        },
        {
            id: "pirates-caraibes-3",
            title: "Poulet rôti aux épices des Caraïbes",
            movie: "Pirates des Caraïbes 3",
            category: "Plat principal",
            image: "/img-card-sct-1/pdc3.webp",
        },
        {
            id: "pirates-caraibes-4",
            title: "Tarte tropicale coco et ananas",
            movie: "Pirates des Caraïbes 4",
            category: "Dessert",
            image: "/img-card-sct-1/pdc4.webp",
        },
        {
            id: "raiponce",
            title: "Cookies dorés aux noisettes",
            movie: "Raiponce",
            category: "Dessert",
            image: "/img-card-sct-1/raiponce.jpg",
        },
        {
            id: "rio",
            title: "Feijoada brésilienne simplifiée",
            movie: "Rio",
            category: "Plat principal",
            image: "/img-card-sct-1/rio1.jpg",
        },
        {
            id: "rio-2",
            title: "Brigadeiros brésiliens au chocolat",
            movie: "Rio 2",
            category: "Dessert",
            image: "/img-card-sct-1/rio2.jpg",
        },
        {
            id: "epic",
            title: "Salade forestière aux pommes et noix",
            movie: "Epic",
            category: "Entrée",
            image: "/img-card-sct-1/epic.jpg",
        },
        {
            id: "ralph",
            title: "Cupcakes arcade aux bonbons",
            movie: "Le Monde de Ralph",
            category: "Dessert",
            image: "/img-card-sct-1/lmdr.jpg",
        },
        {
            id: "coco",
            title: "Tamales mexicains au poulet",
            movie: "Coco",
            category: "Plat principal",
            image: "/img-card-sct-1/coco.jpeg",
        },
        {
            id: "soul",
            title: "Pizza new-yorkaise aux légumes",
            movie: "Soul",
            category: "Plat principal",
            image: "/img-card-sct-1/soul.jpeg",
        },
        {
            id: "harry-potter-1",
            title: "Tarte à la mélasse",
            movie: "Harry Potter à l'école des sorciers",
            category: "Dessert",
            image: "/img-card-sct-1/harry1.jpg",
        },
        {
            id: "harry-potter-2",
            title: "Petits chaussons à la citrouille",
            movie: "Harry Potter et la chambre des secrets",
            category: "Dessert",
            image: "/img-card-sct-1/harry2.jpg",
        },
        {
            id: "harry-potter-3",
            title: "Chocolat chaud à la cannelle",
            movie: "Harry Potter et le prisonnier d'Azkaban",
            category: "Dessert",
            image: "/img-card-sct-1/harry3.webp",
        },
        {
            id: "harry-potter-4",
            title: "Cupcakes dorés du tournoi",
            movie: "Harry Potter et la coupe de feu",
            category: "Dessert",
            image: "/img-card-sct-1/harry4.webp",
        },
        {
            id: "harry-potter-5",
            title: "Tourte anglaise au bœuf et pommes de terre",
            movie: "Harry Potter et l'ordre du Phénix",
            category: "Plat principal",
            image: "/img-card-sct-1/harry5.jpg",
        },
        {
            id: "harry-potter-6",
            title: "Pudding anglais au caramel",
            movie: "Harry Potter et le prince de sang-mêlé",
            category: "Dessert",
            image: "/img-card-sct-1/harry6.jpg",
        },
        {
            id: "harry-potter-7-1",
            title: "Velouté de potiron aux épices",
            movie: "Harry Potter et les reliques de la mort - Partie 1",
            category: "Entrée",
            image: "/img-card-sct-1/harry7.1.avif",
        },
        {
            id: "harry-potter-7-2",
            title: "Gâteau magique au chocolat noir",
            movie: "Harry Potter et les reliques de la mort - Partie 2",
            category: "Dessert",
            image: "/img-card-sct-1/harry7.2.webp",
        },
        {
            id: "grinch",
            title: "Sablés verts de Noël à la vanille",
            movie: "Le Grinch",
            category: "Dessert",
            image: "/img-card-sct-1/grinch.jpg",
        },
        {
            id: "petite-sirene-entree",
            title: "Saladier de crabe et mangue",
            movie: "La Petite Sirène",
            category: "Entrée",
            image: "/img-card-sct-1/poisson.jpg",
        },
        {
            id: "doctor-who-entree",
            title: "Velouté du Tardis",
            movie: "Doctor Who",
            category: "Entrée",
            image: "/img-home/who.webp",
        },
        {
            id: "super-mario-plat",
            title: "Pizza Toad aux champignons",
            movie: "Super Mario Bros",
            category: "Plat principal",
            image: "/img-card-sct-1/champignon.jpg",
        },
        {
            id: "pirates-caraibes-plat",
            title: "Poulet épicé aux épices des Caraïbes",
            movie: "Pirates des Caraïbes",
            category: "Plat principal",
            image: "/img-card-sct-1/pdc3.webp",
        },
        {
            id: "odyssee-pi-plat",
            title: "Riz au curry tropical",
            movie: "L'Odyssée de Pi",
            category: "Plat principal",
            image: "/img-home/odyssé.webp",
        },
        {
            id: "vice-versa-dessert",
            title: "Gâteau des émotions coloré",
            movie: "Vice-Versa",
            category: "Dessert",
            image: "/img-home/vice versa.jpg",
        },
        {
            id: "pirates-caraibes-dessert",
            title: "Tarte tropicale coco et ananas",
            movie: "Pirates des Caraïbes",
            category: "Dessert",
            image: "/img-card-sct-1/pdc4.webp",
        },
        {
            id: "loki-1",
            title: "Tarte aux pommes et à la cannelle",
            movie: "Loki - saison 1",
            category: "Dessert",
            image: "/img-card-sct-1/loki1.jpg",
        },
        {
            id: "loki-2",
            title: "Cheesecake marbré chocolat et vanille",
            movie: "Loki - saison 2",
            category: "Dessert",
            image: "/img-card-sct-1/loki2.jpg",
        },
        {
            id: "aquaman-entree-1",
            title: "Salade de mangue et crevettes",
            movie: "Aquaman",
            category: "Entrée",
            image: "/img-card-sct-1/aquaman1.webp",
        },
        {
            id: "aquaman-entree-2",
            title: "Velouté de légumes de la mer",
            movie: "Aquaman",
            category: "Entrée",
            image: "/img-card-sct-1/aquaman2.webp",
        },
        {
            id: "aquaman-plat-1",
            title: "Risotto crémeux aux fruits de mer",
            movie: "Aquaman",
            category: "Plat principal",
            image: "/img-card-sct-1/aquaman1.webp",
        },
        {
            id: "aquaman-plat-2",
            title: "Saumon rôti au citron et aux herbes",
            movie: "Aquaman",
            category: "Plat principal",
            image: "/img-card-sct-1/aquaman2.webp",
        },
        {
            id: "aquaman-plat-3",
            title: "Poisson coco au curry tropical",
            movie: "Aquaman",
            category: "Plat principal",
            image: "/img-card-sct-1/aquaman1.webp",
        },
        {
            id: "aquaman-dessert-1",
            title: "Crème brûlée tropicale",
            movie: "Aquaman",
            category: "Dessert",
            image: "/img-card-sct-1/aquaman2.webp",
        },
        {
            id: "aquaman-dessert-2",
            title: "Coco panna cotta au caramel",
            movie: "Aquaman",
            category: "Dessert",
            image: "/img-card-sct-1/aquaman1.webp",
        },
        {
            id: "alice-dessert-1",
            title: "Scones anglais et confiture",
            movie: "Alice au pays des merveilles",
            category: "Dessert",
            image: "/img-card-sct-1/alice.webp",
        },
        {
            id: "alice-dessert-2",
            title: "Petits gâteaux aux fruits rouges",
            movie: "Alice au pays des merveilles",
            category: "Dessert",
            image: "/img-card-sct-1/alice.webp",
        },
        {
            id: "simpson-dessert-1",
            title: "Donuts glacés au chocolat",
            movie: "Les Simpson le film",
            category: "Dessert",
            image: "/img-card-sct-1/simpson.webp",
        },
        {
            id: "simpson-dessert-2",
            title: "Gâteau au sucre et au caramel",
            movie: "Les Simpson le film",
            category: "Dessert",
            image: "/img-card-sct-1/simpson.webp",
        },
        {
            id: "vaiana-entree-1",
            title: "Salade de mangue et avocat",
            movie: "Vaiana",
            category: "Entrée",
            image: "/img-card-sct-1/vaiana.webp",
        },
        {
            id: "vaiana-entree-2",
            title: "Soupe de poisson aux herbes",
            movie: "Vaiana",
            category: "Entrée",
            image: "/img-card-sct-1/vaiana2.webp",
        },
        {
            id: "vaiana-plat-1",
            title: "Poké bowl au saumon",
            movie: "Vaiana",
            category: "Plat principal",
            image: "/img-card-sct-1/vaiana.webp",
        },
        {
            id: "vaiana-plat-2",
            title: "Poulet coco à l'ananas",
            movie: "Vaiana",
            category: "Plat principal",
            image: "/img-card-sct-1/vaiana2.webp",
        },
        {
            id: "vaiana-plat-3",
            title: "Riz au curry tropical",
            movie: "Vaiana",
            category: "Plat principal",
            image: "/img-card-sct-1/vaiana.webp",
        },
        {
            id: "vaiana-dessert-1",
            title: "Parfait coco et fruits",
            movie: "Vaiana",
            category: "Dessert",
            image: "/img-card-sct-1/vaiana2.webp",
        },
        {
            id: "vaiana-dessert-2",
            title: "Tarte à la noix de coco",
            movie: "Vaiana",
            category: "Dessert",
            image: "/img-card-sct-1/vaiana.webp",
        },
        {
            id: "toy-story-plat-1",
            title: "Pizza cowboy au poulet BBQ",
            movie: "Toy Story",
            category: "Plat principal",
            image: "/img-card-sct-1/toysStory.jpg",
        },
        {
            id: "toy-story-plat-2",
            title: "Burger aux oignons caramélisés",
            movie: "Toy Story",
            category: "Plat principal",
            image: "/img-card-sct-1/toysStory.jpg",
        },
        {
            id: "toy-story-plat-3",
            title: "Pâtes au fromage et basilic",
            movie: "Toy Story",
            category: "Plat principal",
            image: "/img-card-sct-1/toysStory.jpg",
        },
        {
            id: "toy-story-dessert-1",
            title: "Cookies aux morceaux de chocolat",
            movie: "Toy Story",
            category: "Dessert",
            image: "/img-card-sct-1/toysStory.jpg",
        },
        {
            id: "toy-story-dessert-2",
            title: "Petit gâteau au yaourt",
            movie: "Toy Story",
            category: "Dessert",
            image: "/img-card-sct-1/toysStory.jpg",
        },
        {
            id: "raiponce-dessert-1",
            title: "Cookies dorés aux noisettes",
            movie: "Raiponce",
            category: "Dessert",
            image: "/img-card-sct-1/raiponce.jpg",
        },
        {
            id: "raiponce-dessert-2",
            title: "Tarte aux pommes et cannelle",
            movie: "Raiponce",
            category: "Dessert",
            image: "/img-card-sct-1/raiponce.jpg",
        },
        {
            id: "rio-plat-1",
            title: "Feijoada brésilienne simplifiée",
            movie: "Rio",
            category: "Plat principal",
            image: "/img-card-sct-1/rio1.jpg",
        },
        {
            id: "rio-plat-2",
            title: "Poulet grillé aux épices",
            movie: "Rio",
            category: "Plat principal",
            image: "/img-card-sct-1/rio1.jpg",
        },
        {
            id: "rio-dessert-1",
            title: "Brigadeiros au chocolat",
            movie: "Rio",
            category: "Dessert",
            image: "/img-card-sct-1/rio2.jpg",
        },
        {
            id: "rio-dessert-2",
            title: "Bûche de coco et chocolat",
            movie: "Rio",
            category: "Dessert",
            image: "/img-card-sct-1/rio2.jpg",
        },
        {
            id: "epic-entree-1",
            title: "Salade forestière aux pommes",
            movie: "Epic",
            category: "Entrée",
            image: "/img-card-sct-1/epic.jpg",
        },
        {
            id: "epic-entree-2",
            title: "Velouté de légumes verts",
            movie: "Epic",
            category: "Entrée",
            image: "/img-card-sct-1/epic.jpg",
        },
        {
            id: "ralph-dessert-1",
            title: "Cupcakes aux bonbons",
            movie: "Le Monde de Ralph",
            category: "Dessert",
            image: "/img-card-sct-1/lmdr.jpg",
        },
        {
            id: "ralph-dessert-2",
            title: "Brownies aux éclats de chocolat",
            movie: "Le Monde de Ralph",
            category: "Dessert",
            image: "/img-card-sct-1/lmdr.jpg",
        },
        {
            id: "coco-plat-1",
            title: "Tamales mexicains au poulet",
            movie: "Coco",
            category: "Plat principal",
            image: "/img-card-sct-1/coco.jpeg",
        },
        {
            id: "coco-plat-2",
            title: "Bowl de riz et haricots",
            movie: "Coco",
            category: "Plat principal",
            image: "/img-card-sct-1/coco.jpeg",
        },
        {
            id: "coco-plat-3",
            title: "Tacos épicés au poulet",
            movie: "Coco",
            category: "Plat principal",
            image: "/img-card-sct-1/coco.jpeg",
        },
        {
            id: "soul-plat-1",
            title: "Pizza new-yorkaise aux légumes",
            movie: "Soul",
            category: "Plat principal",
            image: "/img-card-sct-1/soul.jpeg",
        },
        {
            id: "soul-plat-2",
            title: "Pâtes au parmesan et basilic",
            movie: "Soul",
            category: "Plat principal",
            image: "/img-card-sct-1/soul.jpeg",
        },
        {
            id: "soul-plat-3",
            title: "Salade chaude aux légumes grillés",
            movie: "Soul",
            category: "Plat principal",
            image: "/img-card-sct-1/soul.jpeg",
        },
        {
            id: "grinch-dessert-1",
            title: "Sablés verts de Noël",
            movie: "Le Grinch",
            category: "Dessert",
            image: "/img-card-sct-1/grinch.jpg",
        },
        {
            id: "grinch-dessert-2",
            title: "Biscuits à la vanille et sucre",
            movie: "Le Grinch",
            category: "Dessert",
            image: "/img-card-sct-1/grinch.jpg",
        },
    ];

    function getFilteredRecipes() {
        const searchValue = search.trim().toLowerCase();

        return recipes.filter((recipe) => {
            const matchesSearch =
                recipe.title.toLowerCase().includes(searchValue) ||
                recipe.movie.toLowerCase().includes(searchValue);

            const matchesCategory =
                selectedCategory === "all" ||
                recipe.category === selectedCategory;

            const matchesMedia =
                selectedMedia === "all" ||
                recipe.movie === selectedMedia;

            return matchesSearch && matchesCategory && matchesMedia;
        });
    }
</script>

<main class="recipes-page">
    <h1>🍽️ TOUTES LES RECETTES</h1>

    <section class="filters">
        <input
            type="search"
            placeholder="Rechercher une recette..."
            bind:value={search}
        />

        <select bind:value={selectedCategory}>
            <option value="all">
                Toutes les catégories
            </option>

            <option value="Entrée">
                Entrée
            </option>

            <option value="Plat principal">
                Plat principal
            </option>

            <option value="Dessert">
                Dessert
            </option>
        </select>

        <select bind:value={selectedMedia}>
            <option value="all">
                Tous les films / séries
            </option>

            {#each recipes as recipe}
                <option value={recipe.movie}>
                    {recipe.movie}
                </option>
            {/each}
        </select>
    </section>

    {#if getFilteredRecipes().length === 0}
        <div class="no-results">
            <h2>Aucune recette trouvée</h2>

            <p>
                Essayez de modifier votre recherche ou vos filtres.
            </p>
        </div>
    {:else}
        <section class="recipes-grid">
            {#each getFilteredRecipes() as recipe}
                <article class="recipe-card">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                    />

                    <div class="card-content">
                        <p class="movie-name">
                            🎬 {recipe.movie}
                        </p>

                        <h2>
                            {recipe.title}
                        </h2>

                        <p class="author">
                            Par Admin
                        </p>

                        <span class="category">
                            {recipe.category}
                        </span>

                        <a
                            class="recipe-link"
                            href={`#/user/recipe/${recipe.id}`}
                        >
                            VOIR LA RECETTE
                        </a>
                    </div>
                </article>
            {/each}
        </section>
    {/if}
</main>

<style>
    .recipes-page {
        width: 95%;
        max-width: 1400px;

        margin: 30px auto 80px;
    }

    .recipes-page h1 {
        text-align: center;

        margin-bottom: 35px;

        color: #d4af37;
    }

    /* FILTRES */

    .filters {
        display: flex;
        flex-direction: column;

        gap: 12px;

        margin-bottom: 40px;
    }

    .filters input,
    .filters select {
        width: 100%;

        padding: 12px;

        background-color: #1c1c35;
        color: white;

        border: 1px solid #444;
        border-radius: 6px;

        outline: none;
    }

    .filters input:focus,
    .filters select:focus {
        border-color: #d4af37;
    }

    /* GRILLE */

    .recipes-grid {
        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 25px;
    }

    /* CARTES */

    .recipe-card {
        overflow: hidden;

        background-color: #1c1c35;

        border: 1px solid #554b27;
        border-radius: 8px;

        display: flex;
        flex-direction: column;
    }

    .recipe-card img {
        width: 100%;
        height: 200px;

        object-fit: cover;
    }

    .card-content {
        padding: 15px;

        display: flex;
        flex-direction: column;

        flex: 1;
    }

    .movie-name {
        margin: 0 0 10px;

        color: #d4af37;

        font-size: 13px;
        font-weight: bold;
    }

    .recipe-card h2 {
        margin: 0 0 12px;

        color: white;

        font-size: 18px;
        text-transform: uppercase;
    }

    .author {
        color: #999;

        margin: 0 0 12px;
    }

    .category {
        display: inline-block;

        width: fit-content;

        padding: 5px 8px;

        background-color: #07558d;
        color: white;

        border-radius: 3px;

        font-size: 12px;
    }

    /* BOUTON RECETTE */

    .recipe-link {
        display: inline-block;

        width: fit-content;

        margin-top: 15px;
        padding: 9px 12px;

        background-color: #d4af37;
        color: black;

        border-radius: 4px;

        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
    }

    .recipe-link:hover {
        background-color: #f0c94d;
    }

    /* AUCUN RESULTAT */

    .no-results {
        padding: 40px;

        background-color: #1c1c35;

        border: 1px solid #554b27;
        border-radius: 8px;

        text-align: center;
    }

    .no-results h2 {
        color: #d4af37;
    }

    .no-results p {
        color: white;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .recipes-page {
            width: 94%;
        }

        .recipes-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .recipes-page {
            width: 95%;

            margin-top: 25px;
        }

        .recipes-page h1 {
            font-size: 25px;
        }

        .recipes-grid {
            grid-template-columns: 1fr;
        }

        .filters {
            width: 100%;
        }

        .filters input,
        .filters select {
            font-size: 16px;
        }

        .recipe-card img {
            height: 200px;
        }

        .recipe-card h2 {
            font-size: 17px;
        }

        .card-content {
            padding: 12px;
        }
    }
</style>