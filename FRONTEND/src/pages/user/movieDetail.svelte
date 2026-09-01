// @ts-nocheck
<script>
    import { onMount } from "svelte";

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    let mediaId = null;
    let media = null;
    let recipes = [];
    let loading = true;

    onMount(() => {
        // Récupérer l'ID du film depuis l'URL
        const hash = window.location.hash;
        const match = hash.match(/#\/user\/movieDetail\/(\d+)/);
        mediaId = match ? match[1] : null;

        if (!mediaId) {
            loading = false;
            return;
        }

        loadMedia();
        loadRecipesForMedia();
    });

    async function loadMedia() {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`${API_URL}/api/media/${mediaId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!response.ok) {
                throw new Error("Film/Série non trouvé(e)");
            }

            media = await response.json();
        } catch (error) {
            console.error(error);
            media = null;
        } finally {
            loading = false;
        }
    }

    async function loadRecipesForMedia() {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`${API_URL}/api/recipes?mediaId=${mediaId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await response.json();

            if (response.ok && Array.isArray(data)) {
                recipes = data.map((recipe) => ({
                    id: recipe.id,
                    title: recipe.title,
                    image: recipe.image_url || "/img-card-sct-1/champignon.jpg",
                }));
            }
        } catch (error) {
            console.error(error);
            recipes = [];
        }
    }

    function goToRecipe(recipeId) {
        window.location.hash = `#/user/recipeDetail/${recipeId}`;
    }

    function goBack() {
        window.history.back();
    }
</script>

<main class="movie-detail-page">
    {#if loading}
        <p class="loading">Chargement...</p>
    {:else if !media}
        <p class="error">Film/Série non trouvé(e)</p>
    {:else}
        <!-- RETOUR -->
        <button
            class="back-btn"
            on:click={goBack}
        >
            ← RETOUR
        </button>

        <section class="movie-detail-container">

            <h1>{media.title}</h1>

            <p class="movie-type">
                🎬 {media.media_type || "Film"}
            </p>

            <img
                class="movie-image"
                src={media.image_url || "/img-home/Mario.jpg"}
                alt={media.title}
            />

            <div class="movie-infos">

                <p>
                    <strong>Titre :</strong>
                    {media.title}
                </p>

                <p>
                    <strong>Type :</strong>
                    {media.media_type || "Non spécifié"}
                </p>

                {#if media.genre}
                    <p>
                        <strong>Genre :</strong>
                        {media.genre}
                    </p>
                {/if}

                {#if media.release_year}
                    <p>
                        <strong>Année :</strong>
                        {media.release_year}
                    </p>
                {/if}

            </div>

            {#if media.description}
                <section class="movie-section">

                    <h2>SYNOPSIS</h2>

                    <p>
                        {media.description}
                    </p>

                </section>
            {/if}

        </section>

        <!-- RECETTES ASSOCIÉES -->
        {#if recipes.length > 0}
            <section class="recipes-section">

                <h2>🍽️ RECETTES ASSOCIÉES ({recipes.length})</h2>

                <div class="recipes-grid">
                    {#each recipes as recipe}
                        <div
                            class="recipe-card"
                            on:click={() => goToRecipe(recipe.id)}
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                            />

                            <h3>{recipe.title}</h3>
                        </div>
                    {/each}
                </div>

            </section>
        {/if}

    {/if}
</main>

<style>
    :global(.movie-detail-page) {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    .loading,
    .error {
        text-align: center;
        padding: 2rem;
        font-size: 1.2rem;
    }

    .back-btn {
        background: none;
        border: none;
        color: #d4af37;
        font-weight: bold;
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
    }

    .back-btn:hover {
        transform: translateX(-5px);
    }

    .movie-detail-container {
        background: linear-gradient(135deg, #f5f5f5 0%, #f0f0f0 100%);
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 3rem;
    }

    .movie-detail-container h1 {
        color: #333;
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .movie-type {
        color: #d4af37;
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }

    .movie-image {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 10px;
        margin-bottom: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .movie-infos {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        margin-bottom: 2rem;
    }

    .movie-infos p {
        margin: 0.75rem 0;
        line-height: 1.6;
    }

    .movie-section {
        background: white;
        padding: 2rem;
        border-radius: 10px;
    }

    .movie-section h2 {
        color: #333;
        margin-bottom: 1rem;
        border-bottom: 2px solid #d4af37;
        padding-bottom: 0.5rem;
    }

    .movie-section p {
        line-height: 1.8;
        color: #555;
    }

    .recipes-section {
        background: white;
        padding: 2rem;
        border-radius: 10px;
    }

    .recipes-section h2 {
        color: #333;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #d4af37;
        padding-bottom: 0.5rem;
    }

    .recipes-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .recipe-card {
        background: #f5f5f5;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .recipe-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .recipe-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .recipe-card h3 {
        padding: 1rem;
        color: #333;
        font-size: 1.1rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        .movie-detail-container h1 {
            font-size: 1.8rem;
        }

        .recipes-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }
</style>

        border: 2px solid #d4af37;
        border-radius: 8px;

        padding: 30px;
    }

    /* TITRE */

    .movie-detail-container h1 {
        color: #d4af37;

        text-align: center;

        margin-top: 0;
        margin-bottom: 10px;
    }

    .movie-type {
        color: #e24d4d;

        text-align: center;

        margin-bottom: 25px;
    }

    /* IMAGE */

    .movie-image {
        display: block;

        width: 100%;
        max-height: 450px;

        object-fit: cover;

        border: 2px solid #d4af37;
        border-radius: 6px;

        margin-bottom: 25px;
    }

    /* INFORMATIONS */

    .movie-infos {
        background-color: #111526;

        padding: 15px;

        border-radius: 6px;

        margin-bottom: 30px;
    }

    .movie-infos p {
        color: white;

        margin: 8px 0;
    }

    .movie-infos strong {
        color: #d4af37;
    }

    /* SECTIONS */

    .movie-section {
        margin-top: 30px;
    }

    .movie-section h2 {
        color: #d4af37;

        border-bottom: 1px solid #d4af37;

        padding-bottom: 8px;
    }

    .movie-section p {
        color: white;

        line-height: 1.7;
    }

    /* RECETTE ASSOCIÉE */

    .recipe-card {
        background-color: #111526;

        padding: 15px;

        border-radius: 6px;

        display: flex;
        align-items: center;
        gap: 20px;
    }

    .recipe-card img {
        width: 180px;
        height: 150px;

        object-fit: cover;

        border: 1px solid #d4af37;
        border-radius: 4px;
    }

    .recipe-info {
        flex: 1;
    }

    .recipe-info h3 {
        color: #d4af37;

        margin-top: 0;
    }

    .recipe-info p {
        color: white;

        margin-bottom: 20px;
    }

    .recipe-info a {
        display: inline-block;

        background-color: #d4af37;
        color: black;

        padding: 10px 15px;

        border-radius: 4px;

        text-decoration: none;
        font-weight: bold;
    }

    /* BOUTON RETOUR */

    .buttons {
        margin-top: 35px;
    }

    .back {
        display: inline-block;

        background-color: #d4af37;
        color: black;

        padding: 12px 15px;

        border-radius: 4px;

        text-decoration: none;
        font-weight: bold;
    }

    /* TABLETTE */

    @media (max-width: 768px) {

        .movie-detail-page {
            width: 94%;
        }

        .movie-detail-container {
            padding: 25px;
        }

        .movie-detail-container h1 {
            font-size: 30px;
        }

    }

    /* MOBILE */

    @media (max-width: 375px) {

        .movie-detail-page {
            width: 95%;

            margin: 25px auto;
        }

        .movie-detail-container {
            padding: 15px;
        }

        .movie-detail-container h1 {
            font-size: 25px;
        }

        .movie-image {
            height: 230px;
        }

        .movie-section h2 {
            font-size: 21px;
        }

        .movie-section p {
            font-size: 14px;
        }

        .recipe-card {
            flex-direction: column;
            align-items: stretch;
        }

        .recipe-card img {
            width: 100%;
            height: 220px;
        }

        .recipe-info {
            text-align: center;
        }

        .recipe-info h3 {
            font-size: 20px;
        }

        .recipe-info a {
            width: 100%;

            text-align: center;

            box-sizing: border-box;
        }

        .back {
            width: 100%;

            text-align: center;

            box-sizing: border-box;
        }

    }

</style>