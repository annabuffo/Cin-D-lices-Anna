<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let recipe = null;
    let loading = true;
    let error = "";

    let isFavorite = false;


    function getRecipeId() {
        const hash =
            window.location.hash;

        const parts =
            hash.split("/");

        return parts[parts.length - 1];
    }


    function getFavoriteIds() {
        try {
            const favorites =
                JSON.parse(
                    localStorage.getItem(
                        "cin_delices_favorites"
                    ) || "[]"
                );

            return Array.isArray(favorites)
                ? favorites.map(Number)
                : [];

        } catch (error) {
            console.error(error);

            return [];
        }
    }


    function checkFavorite() {
        if (!recipe) {
            return;
        }

        const favorites =
            getFavoriteIds();

        isFavorite =
            favorites.includes(
                Number(recipe.id)
            );
    }


    function toggleFavorite() {
        if (!recipe) {
            return;
        }

        let favorites =
            getFavoriteIds();

        const recipeId =
            Number(recipe.id);


        if (
            favorites.includes(recipeId)
        ) {
            favorites =
                favorites.filter(
                    (id) =>
                        id !== recipeId
                );

            isFavorite = false;

        } else {
            favorites.push(recipeId);

            isFavorite = true;
        }


        localStorage.setItem(
            "cin_delices_favorites",
            JSON.stringify(favorites)
        );
    }


    async function loadRecipe() {
        const recipeId =
            getRecipeId();


        if (!recipeId) {
            error =
                "Recette introuvable.";

            loading = false;

            return;
        }


        try {
            const response =
                await fetch(
                    `${API_URL}/api/recipes/${recipeId}`
                );


            if (!response.ok) {
                throw new Error(
                    "Erreur chargement recette"
                );
            }


            recipe =
                await response.json();


            checkFavorite();


        } catch (err) {
            console.error(err);

            error =
                "Impossible de charger la recette.";

        } finally {
            loading = false;
        }
    }


    function getIngredients() {
        if (!recipe?.ingredients) {
            return [];
        }

        return recipe.ingredients
            .split("\n")
            .map((item) =>
                item.trim()
            )
            .filter(Boolean);
    }


    function getInstructions() {
        if (!recipe?.instructions) {
            return [];
        }

        return recipe.instructions
            .split("\n")
            .map((item) =>
                item.trim()
            )
            .filter(Boolean);
    }


    onMount(() => {
        loadRecipe();
    });
</script>


<main class="recipe-detail-page">

    {#if loading}

        <div class="message">
            Chargement de la recette...
        </div>


    {:else if error}

        <div class="message error">
            {error}
        </div>


    {:else if recipe}

        <a
            class="back-button"
            href="#/recipes"
        >
            ← RETOUR AUX RECETTES
        </a>


        <section class="recipe-card">

            <div class="recipe-image">


                {#if recipe.image_url}

                    <img
                        src={recipe.image_url}
                        alt={recipe.title}
                    />


                {:else if recipe.media?.image_url}

                    <img
                        src={recipe.media.image_url}
                        alt={recipe.media?.title || recipe.title}
                    />


                {:else}

                    <div class="no-image">
                        🍽️
                        <span>
                            Aucune image
                        </span>
                    </div>

                {/if}

            </div>


            <div class="recipe-main">

                <div class="title-row">

                    <div>

                        <h1>
                            {recipe.title}
                        </h1>


                        <p class="media">
                            🎬
                            {recipe.media?.title ||
                            "Film / Série non renseigné"}
                        </p>

                    </div>


                    <button
                        class:active={isFavorite}
                        class="favorite-button"
                        type="button"
                        on:click={toggleFavorite}
                    >
                        {isFavorite
                            ? "★ FAVORI"
                            : "☆ AJOUTER AUX FAVORIS"}
                    </button>

                </div>


                {#if recipe.description}

                    <p class="description">
                        {recipe.description}
                    </p>

                {/if}


                <div class="infos">

                    <div>
                        <span>Catégorie</span>

                        <strong>
                            {recipe.category?.name ||
                            "Non renseignée"}
                        </strong>
                    </div>


                    <div>
                        <span>Préparation</span>

                        <strong>
                            {recipe.prep_time !== null &&
                            recipe.prep_time !== undefined
                                ? `${recipe.prep_time} min`
                                : "Non renseignée"}
                        </strong>
                    </div>


                    <div>
                        <span>Cuisson</span>

                        <strong>
                            {recipe.cook_time !== null &&
                            recipe.cook_time !== undefined
                                ? `${recipe.cook_time} min`
                                : "Non renseignée"}
                        </strong>
                    </div>


                    <div>
                        <span>Difficulté</span>

                        <strong>
                            {recipe.difficulte ||
                            "Non renseignée"}
                        </strong>
                    </div>

                </div>


                <div class="author">
                    Recette publiée par
                    <strong>
                        {recipe.author?.username ||
                        "Utilisateur"}
                    </strong>
                </div>

            </div>

        </section>


        <section class="recipe-section">

            <h2>
                INGRÉDIENTS
            </h2>


            {#if getIngredients().length > 0}

                <ul>

                    {#each getIngredients() as ingredient}

                        <li>
                            {ingredient}
                        </li>

                    {/each}

                </ul>


            {:else}

                <p>
                    Aucun ingrédient renseigné.
                </p>

            {/if}

        </section>


        <section class="recipe-section">

            <h2>
                INSTRUCTIONS
            </h2>


            {#if getInstructions().length > 0}

                <ol>

                    {#each getInstructions() as instruction}

                        <li>
                            {instruction}
                        </li>

                    {/each}

                </ol>


            {:else}

                <p>
                    Aucune instruction renseignée.
                </p>

            {/if}

        </section>

    {/if}

</main>


<style>

    .recipe-detail-page {
        width: 90%;
        max-width: 1100px;

        margin: 40px auto 70px;
    }


    .back-button {
        display: inline-block;

        margin-bottom: 25px;

        color: #d4af37;

        text-decoration: none;

        font-weight: bold;
    }


    .recipe-card {
        display: grid;

        grid-template-columns:
            380px 1fr;

        overflow: hidden;

        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 10px;
    }


    .recipe-image {
        min-height: 380px;
    }


    .recipe-image img {
        display: block;

        width: 100%;
        height: 100%;

        min-height: 380px;

        object-fit: cover;
    }


    .no-image {
        display: flex;

        flex-direction: column;

        align-items: center;
        justify-content: center;

        gap: 12px;

        width: 100%;
        height: 100%;

        min-height: 380px;

        background-color: #111526;

        color: #d4af37;

        font-size: 55px;
    }


    .no-image span {
        color: #aaa;

        font-size: 15px;
    }


    .recipe-main {
        padding: 35px;
    }


    .title-row {
        display: flex;

        justify-content: space-between;
        align-items: flex-start;

        gap: 20px;
    }


    h1 {
        margin: 0 0 12px;

        color: #d4af37;

        font-size: 32px;
    }


    .media {
        margin: 0;

        color: #ccc;

        font-size: 17px;
    }


    .description {
        margin-top: 30px;

        color: white;

        line-height: 1.7;
    }


    .favorite-button {
        padding: 11px 15px;

        background-color: transparent;

        border: 1px solid #d4af37;
        border-radius: 5px;

        color: #d4af37;

        cursor: pointer;

        font-weight: bold;
    }


    .favorite-button:hover,
    .favorite-button.active {
        background-color: #d4af37;

        color: black;
    }


    .infos {
        display: grid;

        grid-template-columns:
            repeat(2, 1fr);

        gap: 15px;

        margin-top: 35px;
    }


    .infos div {
        padding: 16px;

        background-color: #111526;

        border: 1px solid #292d43;
        border-radius: 6px;
    }


    .infos span {
        display: block;

        margin-bottom: 7px;

        color: #aaa;

        font-size: 13px;
    }


    .infos strong {
        color: white;
    }


    .author {
        margin-top: 30px;

        color: #ccc;
    }


    .author strong {
        color: #d4af37;
    }


    .recipe-section {
        margin-top: 30px;

        padding: 30px;

        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 10px;

        color: white;
    }


    .recipe-section h2 {
        margin-top: 0;

        color: #d4af37;
    }


    .recipe-section ul,
    .recipe-section ol {
        padding-left: 25px;
    }


    .recipe-section li {
        margin: 10px 0;

        line-height: 1.6;
    }


    .message {
        padding: 35px;

        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 8px;

        color: white;

        text-align: center;
    }


    .message.error {
        color: #ff7777;
    }


    @media (max-width: 850px) {

        .recipe-card {
            grid-template-columns: 1fr;
        }


        .recipe-image {
            min-height: 300px;
        }


        .recipe-image img,
        .no-image {
            min-height: 300px;
        }

    }


    @media (max-width: 600px) {

        .recipe-detail-page {
            width: 94%;
        }


        .recipe-main {
            padding: 24px;
        }


        .title-row {
            flex-direction: column;
        }


        .favorite-button {
            width: 100%;
        }


        .infos {
            grid-template-columns: 1fr;
        }


        .recipe-section {
            padding: 22px;
        }

    }

</style>