<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let media = null;
    let recipes = [];
    let loading = true;


    function getMediaId() {
        const parts =
            window.location.hash.split("/");

        return parts[parts.length - 1];
    }


    async function loadData() {
        const mediaId =
            getMediaId();

        try {
            const mediaResponse = await fetch(
                `${API_URL}/api/media/${mediaId}`
            );

            if (!mediaResponse.ok) {
                media = null;
                return;
            }

            media =
                await mediaResponse.json();


            const recipesResponse = await fetch(
                `${API_URL}/api/recipes?mediaId=${mediaId}`
            );

            if (!recipesResponse.ok) {
                recipes = [];
                return;
            }

            const data =
                await recipesResponse.json();

            recipes =
                Array.isArray(data)
                    ? data
                    : [];

        } catch (error) {
            console.error(error);

            media = null;
            recipes = [];

        } finally {
            loading = false;
        }
    }


    onMount(() => {
        loadData();
    });
</script>


<main class="movie-detail-page">

    {#if loading}

        <p class="message">
            Chargement...
        </p>


    {:else if !media}

        <p class="message">
            Film ou série introuvable.
        </p>


    {:else}

        <a
            class="back"
            href="#/movies"
        >
            ← RETOUR
        </a>


        <section class="movie-card">

            <h1>
                {media.title}
            </h1>


            <p class="type">
                🎬
                {media.type === "serie"
                    ? "Série"
                    : "Film"}
            </p>


            {#if media.image_url}

                <img
                    src={media.image_url}
                    alt={media.title}
                />

            {/if}


            {#if media.release_date}

                <p>
                    <strong>Date de sortie :</strong>
                    {media.release_date}
                </p>

            {/if}


            {#if media.description}

                <h2>SYNOPSIS</h2>

                <p>
                    {media.description}
                </p>

            {/if}

        </section>


        {#if recipes.length > 0}

            <section class="recipes-section">

                <h2>
                    🍽️ RECETTES ASSOCIÉES
                </h2>


                <div class="recipes-grid">

                    {#each recipes as recipe}

                        <a
                            class="recipe-card"
                            href={`#/user/recipe/${recipe.id}`}
                        >

                            <img
                                src={
                                    recipe.image_url ||
                                    "/img-card-sct-1/champignon.jpg"
                                }
                                alt={recipe.title}
                            />

                            <h3>
                                {recipe.title}
                            </h3>

                        </a>

                    {/each}

                </div>

            </section>

        {/if}

    {/if}

</main>


<style>

    .movie-detail-page {
        width: 90%;
        max-width: 1000px;

        margin: 40px auto;
    }


    .back {
        display: inline-block;

        margin-bottom: 20px;

        color: #d4af37;

        text-decoration: none;
    }


    .movie-card {
        padding: 25px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        color: white;
    }


    .movie-card h1,
    .movie-card h2 {
        color: #d4af37;
    }


    .movie-card h1 {
        margin-top: 0;
    }


    .type {
        color: #e24d4d;
    }


    .movie-card img {
        width: 100%;
        max-height: 450px;

        margin: 20px 0;

        object-fit: cover;

        border-radius: 6px;
    }


    .movie-card strong {
        color: #d4af37;
    }


    .recipes-section {
        margin-top: 35px;
    }


    .recipes-section h2 {
        color: #d4af37;
    }


    .recipes-grid {
        display: grid;

        grid-template-columns:
            repeat(3, 1fr);

        gap: 20px;
    }


    .recipe-card {
        overflow: hidden;

        background-color: #111526;

        border-radius: 6px;

        text-decoration: none;
    }


    .recipe-card img {
        width: 100%;
        height: 180px;

        object-fit: cover;
    }


    .recipe-card h3 {
        padding: 12px;

        margin: 0;

        color: #d4af37;

        text-align: center;
    }


    .message {
        padding: 30px;

        color: white;

        text-align: center;
    }


    @media (max-width: 768px) {

        .recipes-grid {
            grid-template-columns:
                repeat(2, 1fr);
        }

    }


    @media (max-width: 500px) {

        .movie-detail-page {
            width: 94%;
        }


        .recipes-grid {
            grid-template-columns: 1fr;
        }

    }

</style>