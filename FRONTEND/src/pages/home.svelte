<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import Cookies from "../components/cookies.svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let recipes = [];

    let featuredCards = [
        {
            mediaTitle: "La petite sirène",
            displayMedia: "La Petite Sirène",
            fallbackTitle: "Poisson Rôti et Légumes au Four",
            image: "/img-card-sct-1/poisson.jpg",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "Super Mario Bros",
            displayMedia: "Super Mario Bros",
            fallbackTitle: "Tagliatelles crémeuses aux champignons",
            image: "/img-card-sct-1/champignon.jpg",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "Ratatouille",
            displayMedia: "Ratatouille",
            fallbackTitle: "Ratatouille aux légumes",
            image: "/img-card-sct-1/ratatouille.jpg",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "La Soupe Aux Choux",
            displayMedia: "La Soupe Aux Choux",
            fallbackTitle: "Soupe aux choux traditionnelle",
            image: "/img-card-sct-1/choux.png",
            recipeId: null,
            recipeTitle: null,
        },
    ];

    let adventureCards = [
        {
            mediaTitle: "La petite sirène",
            displayMedia: "La Petite Sirène",
            fallbackTitle: "Poisson Rôti et Légumes au Four",
            image: "/img-card-sct-1/sirène.jpg",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "La Soupe Aux Choux",
            displayMedia: "La soupe aux choux",
            fallbackTitle: "Soupe aux choux traditionnelle",
            image: "/img-home/La_Soupe_aux_choux.jpg",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "Doctor Who",
            displayMedia: "Doctor Who",
            fallbackTitle: "Tourte du Tardis",
            image: "/img-home/who.webp",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "Charlie et la chocolaterie",
            displayMedia: "Charlie et la chocolaterie",
            fallbackTitle: "Moelleux au chocolat et caramel",
            image: "/img-home/chocolat.webp",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "Vice Versa",
            displayMedia: "Vice Versa",
            fallbackTitle: "Cupcakes des émotions",
            image: "/img-home/vice versa.jpg",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "Né quelque part",
            displayMedia: "Né quelque part",
            fallbackTitle: "Makrout aux dattes",
            image: "/img-home/né.jpg",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "L'Odyssée de Pi",
            displayMedia: "L'Odyssée de Pi",
            fallbackTitle: "Riz au curry et lait de coco",
            image: "/img-home/odyssé.webp",
            recipeId: null,
            recipeTitle: null,
        },
        {
            mediaTitle: "Super Mario Bros",
            displayMedia: "Super Mario Bros",
            fallbackTitle: "Tagliatelles crémeuses aux champignons",
            image: "/img-home/Mario.jpg",
            recipeId: null,
            recipeTitle: null,
        },
    ];

    let bannerRecipeId = null;
    let bannerRecipeTitle =
        "Tagliatelles crémeuses aux champignons";

    function normalize(value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function findRecipeByMedia(mediaTitle) {
        return recipes.find((recipe) => {
            const recipeMediaTitle =
                recipe.media?.title || "";

            return (
                normalize(recipeMediaTitle) ===
                normalize(mediaTitle)
            );
        });
    }

    function connectCards(cards) {
        return cards.map((card) => {
            const recipe =
                findRecipeByMedia(
                    card.mediaTitle
                );

            return {
                ...card,
                recipeId:
                    recipe?.id || null,
                recipeTitle:
                    recipe?.title || null,
            };
        });
    }

    async function loadRecipes() {
        try {
            const response =
                await fetch(
                    `${API_URL}/api/recipes`
                );

            if (!response.ok) {
                throw new Error(
                    "Impossible de charger les recettes."
                );
            }

            const data =
                await response.json();

            recipes =
                Array.isArray(data)
                    ? data
                    : [];

            featuredCards =
                connectCards(
                    featuredCards
                );

            adventureCards =
                connectCards(
                    adventureCards
                );

            const marioRecipe =
                findRecipeByMedia(
                    "Super Mario Bros"
                );

            if (marioRecipe) {
                bannerRecipeId =
                    marioRecipe.id;

                bannerRecipeTitle =
                    marioRecipe.title;
            }

            console.log(
                "RECETTES HOME :",
                recipes
            );

            console.log(
                "CARTES HOME :",
                featuredCards
            );
        } catch (error) {
            console.error(
                "Erreur Home :",
                error
            );
        }
    }

    onMount(() => {
        loadRecipes();
    });
</script>

<main>
    <section class="banner">
        <div class="banner-content">
            <span class="movie-icon">🎥</span>

            <h2>Super Mario Bros</h2>

            <h3>
                {bannerRecipeTitle}
            </h3>

            <p>
                Plongez dans l'univers de Super Mario Bros
                avec une recette gourmande inspirée du
                célèbre champignon.
            </p>

            <a
                href={
                    bannerRecipeId
                        ? `#/user/recipe/${bannerRecipeId}`
                        : "#/recipes"
                }
                class="banner-button"
            >
                VOIR L'ASSOCIATION RECETTE ET FILM
            </a>
        </div>
    </section>

    <h1 class="title-sct-two">
        À DÉCOUVRIR : AVENTURES CULINAIRES
    </h1>

    <section class="container-card-one">
        {#each featuredCards as card}
            <article class="card">
                <img
                    src={card.image}
                    alt={
                        card.recipeTitle ||
                        card.fallbackTitle
                    }
                />

                <h3>
                    <em>
                        {card.displayMedia} :
                    </em>
                </h3>

                <h2>
                    {card.recipeTitle ||
                        card.fallbackTitle}
                </h2>

                <a
                    href={
                        card.recipeId
                            ? `#/user/recipe/${card.recipeId}`
                            : "#/recipes"
                    }
                >
                    VOIR LA RECETTE
                </a>
            </article>
        {/each}
    </section>

    <div class="footer-film-strip">
        <div class="barre"></div>
    </div>

    <h1 class="title-card">
        PLUS D'AVENTURES CULINAIRES
    </h1>

    <section class="container-card">
        {#each adventureCards as card}
            <article class="card">
                <img
                    src={card.image}
                    alt={card.displayMedia}
                />

                <h2>
                    {card.displayMedia}
                </h2>

                <p>
                    {card.recipeTitle ||
                        card.fallbackTitle}
                </p>

                <a
                    href={
                        card.recipeId
                            ? `#/user/recipe/${card.recipeId}`
                            : "#/recipes"
                    }
                >
                    Voir la recette
                </a>
            </article>
        {/each}
    </section>
</main>

<Cookies />

<style>
    main {
        background-color: black;
    }

    /* BANNIÈRE */

    h1,
    h2,
    h3 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
    }

    .banner {
        height: 400px;

        background-image: url("/img-home/Mario.jpg");
        background-position: center;
        background-size: cover;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        border-top: 5px solid #d4af37;
        border-bottom: 5px solid #d4af37;
    }

    .banner-content {
        width: 35%;
        padding: 30px;

        background-color: rgba(0, 0, 0, 0.7);
    }

    .banner-content h2 {
        font-size: 40px;
        margin: 0;
    }

    .banner-content h3 {
        color: #e95c5c;
        background-color: transparent;
    }

    .banner-content p {
        color: white;
    }

    .banner-button {
        display: inline-block;

        padding: 10px;

        background-color: darkred;
        color: #d4af37;

        border: 2px solid #d4af37;

        text-decoration: none;
    }

    /* TITRES */

    .title-sct-two {
        text-align: center;
        margin: 35px 0;
    }

    .title-card {
        text-align: center;

        color: black;
        background-color: #d4af37;

        margin: 0;
        padding: 30px;
    }

    /* PREMIÈRE SECTION */

    .container-card-one {
        width: 90%;

        margin: 0 auto 40px;
        padding: 15px;

        display: grid;
        grid-template-columns: repeat(4, 1fr);

        gap: 15px;

        border: 2px solid #d4af37;
    }

    /* DEUXIÈME SECTION */

    .container-card {
        padding: 40px 8%;

        display: grid;
        grid-template-columns: repeat(4, 1fr);

        gap: 15px;

        background-color: #d4af37;
    }

    /* CARTES */

    .card {
        background-color: rgb(6, 6, 48);

        padding: 10px;

        display: flex;
        flex-direction: column;
    }

    .card img {
        width: 100%;
        height: 180px;

        object-fit: cover;

        border: 2px solid #d4af37;
    }

    .card h3 {
        color: #e95c5c;
        background-color: rgb(6, 6, 48);
    }

    .card h2 {
        color: black;
        background-color: #d4af37;

        text-align: center;

        padding: 8px;
    }

    .card p {
        color: #d4af37;
        background-color: rgb(6, 6, 48);
    }

    .card a {
        color: #d4af37;

        margin-top: auto;

        background-color: rgb(6, 6, 48);
    }

    /* BARRE FILM */

    .footer-film-strip {
        background-color: #d4af37;

        padding: 8px 0;
    }

    .barre {
        height: 10px;

        background:
            repeating-linear-gradient(
                to right,
                black 0,
                black 12px,
                #d4af37 12px,
                #d4af37 18px
            );
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .banner {
            height: auto;
            min-height: 350px;

            background-position: center;
            background-size: cover;
        }

        .banner-content {
            width: 50%;
            padding: 20px;
        }

        .banner-content h2 {
            font-size: 32px;
        }

        .container-card-one,
        .container-card {
            grid-template-columns:
                repeat(2, 1fr);
        }
    }

    /* MOBILE */

    @media (max-width: 375px) {
        .banner {
            min-height: 500px;

            justify-content: flex-end;
            align-items: flex-end;

            background-position: center;
            background-size: cover;
        }

        .banner-content {
            width: 100%;
            padding: 20px;

            background-color:
                rgba(
                    0,
                    0,
                    0,
                    0.75
                );
        }

        .banner-content h2 {
            font-size: 30px;
        }

        .banner-content h3 {
            font-size: 20px;
        }

        .banner-content p {
            font-size: 14px;
            line-height: 1.5;
        }

        .banner-button {
            display: block;

            text-align: center;

            font-size: 14px;
        }

        .title-sct-two,
        .title-card {
            font-size: 28px;

            padding: 20px 10px;
        }

        .container-card-one {
            width: 95%;

            grid-template-columns: 1fr;

            padding: 10px;
        }

        .container-card {
            grid-template-columns: 1fr;

            padding: 30px 20px;
        }

        .card img {
            height: auto;
            max-height: 260px;
        }

        .card h2 {
            font-size: 22px;
        }

        .card h3 {
            font-size: 18px;
        }
    }
</style>