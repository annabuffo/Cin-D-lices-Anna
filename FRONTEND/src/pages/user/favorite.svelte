<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    let favorites = [];
    let isConnected = false;
    let loading = true;

    function getSavedFavorites() {
        try {
            const saved = JSON.parse(
                localStorage.getItem("cin_delices_favorites") || "[]"
            );
            return Array.isArray(saved) ? saved : [];
        } catch {
            return [];
        }
    }

    async function loadFavoriteRecipes() {
        isConnected = Boolean(localStorage.getItem("token"));

        if (!isConnected) {
            favorites = [];
            loading = false;
            return;
        }

        try {
            loading = true;
            const response = await fetch(`${API_URL}/api/recipes`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erreur lors du chargement des recettes.");
            }

            const favoriteIds = getSavedFavorites();
            favorites = Array.isArray(data)
                ? data
                    .filter((recipe) => favoriteIds.includes(String(recipe.id)))
                    .map((recipe) => ({
                        id: recipe.id,
                        title: recipe.title,
                        movie: recipe.media?.title || "Film / Série",
                        description: recipe.description || "Recette inspirée de cette œuvre.",
                        image: recipe.image_url || "/img-card-sct-1/champignon.jpg",
                    }))
                : [];
        } catch (error) {
            console.error(error);
            favorites = [];
        } finally {
            loading = false;
        }
    }

    function removeFavorite(id) {
        const confirmation = window.confirm(
            "Voulez-vous retirer cette recette de vos favoris ?"
        );

        if (!confirmation) {
            return;
        }

        const ids = getSavedFavorites().filter((favoriteId) => String(favoriteId) !== String(id));
        localStorage.setItem("cin_delices_favorites", JSON.stringify(ids));
        loadFavoriteRecipes();
    }

    onMount(() => {
        loadFavoriteRecipes();
    });

    $: if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token !== null && isConnected !== true) {
            loadFavoriteRecipes();
        }
    }
</script>

<main class="favorites-page">

    <h1>⭐ MES FAVORIS</h1>

    <p class="subtitle">
        Retrouvez toutes les recettes que vous avez ajoutées à vos favoris
    </p>

    <section class="favorites-container">

        {#if loading}

            <p class="empty-message">
                Chargement de vos favoris...
            </p>

        {:else if !isConnected}

            <p class="empty-message">
                Connectez-vous pour ajouter des recettes à vos favoris.
            </p>

        {:else if favorites.length === 0}

            <p class="empty-message">
                Vous n'avez aucune recette dans vos favoris.
            </p>

        {:else}

            {#each favorites as favorite}

                <article class="favorite-card">

                    <img
                        src={favorite.image}
                        alt={favorite.title}
                    />

                    <div class="favorite-info">

                        <h2>
                            {favorite.title}
                        </h2>

                        <p class="movie">
                            🎬 {favorite.movie}
                        </p>

                        <p>
                            {favorite.description}
                        </p>

                        <div class="actions">

                            <a href={`#/user/recipe/${favorite.id}`}>
                                VOIR LA RECETTE
                            </a>

                            <button
                                class="remove"
                                type="button"
                                on:click={() => removeFavorite(favorite.id)}
                            >
                                RETIRER DES FAVORIS
                            </button>

                        </div>

                    </div>

                </article>

            {/each}

        {/if}

    </section>

    <div class="back-container">

        <a class="back" href="#/user/profile">
            ← RETOUR AU PROFIL
        </a>

    </div>

</main>

<style>

    .favorites-page {
        width: 90%;
        max-width: 1000px;

        margin: 40px auto;
    }

    /* TITRE */

    .favorites-page h1 {
        color: #d4af37;

        text-align: center;

        margin-bottom: 10px;
    }

    .subtitle {
        color: white;

        text-align: center;

        margin-bottom: 35px;
    }

    /* CONTENEUR */

    .favorites-container {
        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        padding: 20px;
    }

    /* CARTES */

    .favorite-card {
        background-color: #111526;

        padding: 15px;
        margin-bottom: 20px;

        border-radius: 6px;

        display: flex;
        align-items: center;
        gap: 20px;
    }

    .favorite-card:last-child {
        margin-bottom: 0;
    }

    /* IMAGE */

    .favorite-card img {
        width: 180px;
        height: 150px;

        object-fit: cover;

        border: 1px solid #d4af37;
        border-radius: 4px;
    }

    /* INFORMATIONS */

    .favorite-info {
        flex: 1;
    }

    .favorite-info h2 {
        color: #d4af37;

        margin-top: 0;
        margin-bottom: 8px;
    }

    .favorite-info p {
        color: white;

        line-height: 1.5;

        margin: 8px 0;
    }

    .favorite-info .movie {
        color: #e24d4d;
    }

    /* BOUTONS */

    .actions {
        display: flex;
        gap: 10px;

        margin-top: 15px;
    }

    .actions a,
    .remove {
        padding: 10px 15px;

        border-radius: 4px;

        font-weight: bold;

        text-decoration: none;
    }

    .actions a {
        background-color: #d4af37;
        color: black;
    }

    .remove {
        background-color: #e24d4d;
        color: white;

        border: none;

        cursor: pointer;
    }

    /* MESSAGE AUCUN FAVORI */

    .empty-message {
        color: white;

        text-align: center;

        margin: 0;
        padding: 30px 15px;
    }

    /* RETOUR PROFIL */

    .back-container {
        margin-top: 25px;
    }

    .back {
        display: inline-block;

        color: #d4af37;

        text-decoration: none;
    }

    .back:hover {
        text-decoration: underline;
    }

    /* TABLETTE */

    @media (max-width: 768px) {

        .favorites-page {
            width: 94%;
        }

        .favorite-card {
            align-items: flex-start;
        }

        .actions {
            flex-direction: column;
        }

        .actions a,
        .remove {
            text-align: center;
        }

    }

    /* MOBILE */

    @media (max-width: 375px) {

        .favorites-page {
            width: 95%;

            margin: 25px auto;
        }

        .favorites-page h1 {
            font-size: 28px;
        }

        .subtitle {
            font-size: 14px;

            margin-bottom: 25px;
        }

        .favorites-container {
            padding: 15px;
        }

        .favorite-card {
            flex-direction: column;
            align-items: stretch;

            padding: 15px;
        }

        .favorite-card img {
            width: 100%;
            height: 220px;
        }

        .favorite-info {
            text-align: center;
        }

        .favorite-info h2 {
            font-size: 21px;
        }

        .favorite-info p {
            font-size: 14px;
        }

        .actions {
            width: 100%;

            flex-direction: column;
        }

        .actions a,
        .remove {
            width: 100%;

            text-align: center;

            box-sizing: border-box;
        }

        .back {
            width: 100%;

            text-align: center;
        }

    }

</style>