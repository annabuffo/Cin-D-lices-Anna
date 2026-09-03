<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let favorites = [];
    let loading = true;
    let connected = false;


    function getFavoriteIds() {
        return JSON.parse(
            localStorage.getItem(
                "cin_delices_favorites"
            ) || "[]"
        );
    }


    async function loadFavorites() {
        connected =
            Boolean(localStorage.getItem("token"));

        if (!connected) {
            loading = false;
            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/api/recipes`
            );

            const recipes =
                await response.json();

            const ids =
                getFavoriteIds()
                    .map(Number);


            favorites =
                recipes.filter(
                    (recipe) =>
                        ids.includes(
                            Number(recipe.id)
                        )
                );

        } catch (error) {
            console.error(error);

            favorites = [];

        } finally {
            loading = false;
        }
    }


    function removeFavorite(id) {
        const ids =
            getFavoriteIds()
                .map(Number)
                .filter(
                    (favoriteId) =>
                        favoriteId !== Number(id)
                );


        localStorage.setItem(
            "cin_delices_favorites",
            JSON.stringify(ids)
        );


        favorites =
            favorites.filter(
                (recipe) =>
                    recipe.id !== id
            );
    }


    onMount(() => {
        loadFavorites();
    });
</script>


<main class="favorites-page">

    <h1>⭐ MES FAVORIS</h1>


    <section class="favorites-container">

        {#if loading}

            <p class="message">
                Chargement...
            </p>


        {:else if !connected}

            <p class="message">
                Connectez-vous pour voir vos favoris.
            </p>


        {:else if favorites.length === 0}

            <p class="message">
                Vous n'avez aucun favori.
            </p>


        {:else}

            {#each favorites as recipe}

                <article class="favorite-card">

                    <img
                        src={
                            recipe.image_url ||
                            "/img-card-sct-1/champignon.jpg"
                        }
                        alt={recipe.title}
                    />


                    <div class="favorite-info">

                        <h2>
                            {recipe.title}
                        </h2>


                        <p>
                            🎬
                            {recipe.media?.title || "Film / Série"}
                        </p>


                        <p>
                            {recipe.description || ""}
                        </p>


                        <div class="actions">

                            <a
                                href={`#/user/recipe/${recipe.id}`}
                            >
                                VOIR
                            </a>


                            <button
                                type="button"
                                on:click={() =>
                                    removeFavorite(recipe.id)
                                }
                            >
                                RETIRER
                            </button>

                        </div>

                    </div>

                </article>

            {/each}

        {/if}

    </section>


    <a
        class="back"
        href="#/user/profile"
    >
        ← RETOUR AU PROFIL
    </a>

</main>


<style>
    .favorites-page {
        width: 90%;
        max-width: 1000px;

        margin: 40px auto;
    }


    h1 {
        margin-bottom: 30px;

        color: #d4af37;

        text-align: center;
    }


    .favorites-container {
        padding: 20px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;
    }


    .favorite-card {
        display: flex;

        gap: 20px;

        margin-bottom: 20px;
        padding: 15px;

        background-color: #111526;

        border-radius: 6px;
    }


    .favorite-card img {
        width: 180px;
        height: 150px;

        object-fit: cover;

        border-radius: 4px;
    }


    .favorite-info {
        flex: 1;
    }


    .favorite-info h2 {
        margin-top: 0;

        color: #d4af37;
    }


    .favorite-info p {
        color: white;
    }


    .actions {
        display: flex;

        gap: 10px;

        margin-top: 15px;
    }


    .actions a,
    .actions button {
        padding: 10px 15px;

        border: none;
        border-radius: 4px;

        font-weight: bold;

        cursor: pointer;

        text-decoration: none;
    }


    .actions a {
        background-color: #d4af37;

        color: black;
    }


    .actions button {
        background-color: #e24d4d;

        color: white;
    }


    .message {
        padding: 25px;

        color: white;

        text-align: center;
    }


    .back {
        display: inline-block;

        margin-top: 25px;

        color: #d4af37;

        text-decoration: none;
    }


    @media (max-width: 600px) {

        .favorite-card {
            flex-direction: column;
        }


        .favorite-card img {
            width: 100%;
        }


        .actions {
            flex-direction: column;
        }

    }
</style>