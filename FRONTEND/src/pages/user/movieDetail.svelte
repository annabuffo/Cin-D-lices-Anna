<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    /*
     * svelte-spa-router transmet
     * automatiquement :id ici.
     */
    export let params = {};

    let media = null;
    let recipes = [];

    let loading = true;
    let error = "";


    /*
    =========================================
    RÉCUPÉRATION DE L'ID
    =========================================
    */

    function getMediaId() {

        /*
         * Première méthode :
         * paramètre envoyé par le Router
         */
        if (params?.id) {
            return params.id;
        }

        /*
         * Sécurité supplémentaire :
         * récupération depuis le hash
         */
        const parts =
            window.location.hash.split("/");

        return parts[
            parts.length - 1
        ];
    }


    /*
    =========================================
    CHARGEMENT DU FILM / DE LA SÉRIE
    =========================================
    */

    async function loadMedia(mediaId) {

        const response =
            await fetch(
                `${API_URL}/api/media/${mediaId}`
            );

        if (!response.ok) {

            let message =
                "Film ou série introuvable.";

            try {

                const data =
                    await response.json();

                message =
                    data.message ||
                    message;

            } catch {
                // On garde le message par défaut
            }

            throw new Error(
                message
            );
        }

        return await response.json();
    }


    /*
    =========================================
    CHARGEMENT DES RECETTES ASSOCIÉES
    =========================================
    */

    async function loadRecipes(mediaId) {

        const response =
            await fetch(
                `${API_URL}/api/recipes?mediaId=${mediaId}`
            );

        if (!response.ok) {
            return [];
        }

        const data =
            await response.json();

        return Array.isArray(data)
            ? data
            : [];
    }


    /*
    =========================================
    CHARGEMENT GLOBAL
    =========================================
    */

    async function loadData() {

        loading = true;
        error = "";

        const mediaId =
            getMediaId();

        console.log(
            "MOVIE DETAIL ID :",
            mediaId
        );

        if (!mediaId) {

            error =
                "Identifiant du film ou de la série introuvable.";

            loading = false;

            return;
        }


        try {

            /*
             * On charge d'abord le média.
             */

            media =
                await loadMedia(
                    mediaId
                );

            console.log(
                "MOVIE DETAIL MEDIA :",
                media
            );


            /*
             * Puis les recettes associées.
             */

            recipes =
                await loadRecipes(
                    mediaId
                );

            console.log(
                "RECETTES ASSOCIÉES :",
                recipes
            );

        } catch (err) {

            console.error(
                "Erreur MovieDetail :",
                err
            );

            media = null;
            recipes = [];

            error =
                err.message ||
                "Impossible de charger ce film ou cette série.";

        } finally {

            loading = false;
        }
    }


    /*
    =========================================
    IMAGE RECETTE
    =========================================
    */

    function getRecipeImage(recipe) {

        return (
            recipe.image_url ||
            recipe.media?.image_url ||
            media?.image_url ||
            "/img-card-sct-1/champignon.jpg"
        );
    }


    onMount(() => {
        loadData();
    });
</script>


<main class="movie-detail-page">

    {#if loading}

        <section class="message">

            <h2>
                CHARGEMENT...
            </h2>

            <p>
                Chargement du film
                ou de la série.
            </p>

        </section>


    {:else if error}

        <section class="message error-message">

            <h1>
                FILM / SÉRIE INTROUVABLE
            </h1>

            <p>
                {error}
            </p>

            <a href="#/movies">
                ← RETOUR AUX FILMS
            </a>

        </section>


    {:else if media}

        <a
            class="back"
            href="#/movies"
        >
            ← RETOUR AUX FILMS
        </a>


        <!-- FICHE FILM / SÉRIE -->

        <section class="movie-card">

            <div class="movie-header">

                <div>

                    <p class="media-type">

                        {media.type === "serie"
                            ? "📺 SÉRIE"
                            : "🎬 FILM"}

                    </p>

                    <h1>
                        {media.title}
                    </h1>

                </div>

            </div>


            <!-- IMAGE -->

            {#if media.image_url}

                <img
                    class="movie-image"
                    src={media.image_url}
                    alt={media.title}
                />

            {:else}

                <div class="no-image">

                    <span>
                        {media.type === "serie"
                            ? "📺"
                            : "🎬"}
                    </span>

                    <p>
                        Image indisponible
                    </p>

                </div>

            {/if}


            <!-- INFORMATIONS -->

            <div class="movie-info">

                {#if media.release_date}

                    <p>

                        <strong>
                            Date de sortie :
                        </strong>

                        {new Date(
                            media.release_date
                        ).toLocaleDateString(
                            "fr-FR"
                        )}

                    </p>

                {/if}


                {#if media.description}

                    <div class="synopsis">

                        <h2>
                            SYNOPSIS
                        </h2>

                        <p>
                            {media.description}
                        </p>

                    </div>

                {/if}

            </div>

        </section>


        <!-- RECETTES ASSOCIÉES -->

        <section class="recipes-section">

            <h2>
                🍽️ RECETTES ASSOCIÉES
            </h2>


            {#if recipes.length > 0}

                <div class="recipes-grid">

                    {#each recipes as recipe}

                        <a
                            class="recipe-card"
                            href={`#/user/recipe/${recipe.id}`}
                        >

                            <img
                                src={getRecipeImage(
                                    recipe
                                )}
                                alt={recipe.title}
                            />

                            <div
                                class="recipe-content"
                            >

                                <h3>
                                    {recipe.title}
                                </h3>

                                {#if recipe.category?.name}

                                    <span
                                        class="category"
                                    >
                                        {
                                            recipe.category
                                                .name
                                        }
                                    </span>

                                {/if}

                            </div>

                        </a>

                    {/each}

                </div>


            {:else}

                <div class="no-recipes">

                    <p>
                        Aucune recette n'est
                        encore associée à
                        {media.title}.
                    </p>

                </div>

            {/if}

        </section>

    {/if}

</main>


<style>

    .movie-detail-page {

        width:
            90%;

        max-width:
            1000px;

        min-height:
            500px;

        margin:
            40px auto;
    }


    /*
    =========================================
    RETOUR
    =========================================
    */

    .back {

        display:
            inline-block;

        margin-bottom:
            20px;

        color:
            #d4af37;

        text-decoration:
            none;

        font-weight:
            bold;
    }


    .back:hover {

        text-decoration:
            underline;
    }


    /*
    =========================================
    FICHE FILM
    =========================================
    */

    .movie-card {

        overflow:
            hidden;

        background-color:
            rgb(6, 6, 48);

        border:
            2px solid #d4af37;

        border-radius:
            8px;

        color:
            white;
    }


    .movie-header {

        padding:
            25px;

        background-color:
            #111526;
    }


    .movie-card h1,
    .movie-card h2 {

        color:
            #d4af37;

        font-family:
            "Bebas Neue",
            sans-serif;
    }


    .movie-card h1 {

        margin:
            5px 0 0;

        font-size:
            38px;
    }


    .media-type {

        margin:
            0;

        color:
            #e95c5c;

        font-weight:
            bold;
    }


    /*
    =========================================
    IMAGE
    =========================================
    */

    .movie-image {

        width:
            100%;

        max-height:
            520px;

        display:
            block;

        object-fit:
            cover;
    }


    .no-image {

        height:
            350px;

        display:
            flex;

        flex-direction:
            column;

        justify-content:
            center;

        align-items:
            center;

        background-color:
            #151525;

        color:
            white;
    }


    .no-image span {

        font-size:
            60px;
    }


    /*
    =========================================
    INFORMATIONS
    =========================================
    */

    .movie-info {

        padding:
            25px;

        line-height:
            1.6;
    }


    .movie-info strong {

        color:
            #d4af37;
    }


    .synopsis {

        margin-top:
            25px;
    }


    .synopsis h2 {

        margin-bottom:
            10px;
    }


    /*
    =========================================
    RECETTES
    =========================================
    */

    .recipes-section {

        margin-top:
            40px;
    }


    .recipes-section > h2 {

        color:
            #d4af37;

        font-family:
            "Bebas Neue",
            sans-serif;

        font-size:
            30px;
    }


    .recipes-grid {

        display:
            grid;

        grid-template-columns:
            repeat(3, 1fr);

        gap:
            20px;
    }


    .recipe-card {

        overflow:
            hidden;

        display:
            flex;

        flex-direction:
            column;

        background-color:
            #111526;

        border:
            1px solid #554b27;

        border-radius:
            6px;

        text-decoration:
            none;
    }


    .recipe-card:hover {

        border-color:
            #d4af37;
    }


    .recipe-card img {

        width:
            100%;

        height:
            190px;

        object-fit:
            cover;
    }


    .recipe-content {

        padding:
            15px;

        display:
            flex;

        flex-direction:
            column;

        flex:
            1;
    }


    .recipe-card h3 {

        margin:
            0 0 10px;

        color:
            #d4af37;

        text-align:
            center;
    }


    .category {

        width:
            fit-content;

        margin:
            auto auto 0;

        padding:
            5px 8px;

        background-color:
            #07558d;

        color:
            white;

        border-radius:
            3px;

        font-size:
            12px;
    }


    /*
    =========================================
    AUCUNE RECETTE
    =========================================
    */

    .no-recipes {

        padding:
            30px;

        background-color:
            rgb(6, 6, 48);

        border:
            1px solid #554b27;

        border-radius:
            6px;

        color:
            white;

        text-align:
            center;
    }


    /*
    =========================================
    MESSAGES
    =========================================
    */

    .message {

        min-height:
            300px;

        padding:
            40px;

        display:
            flex;

        flex-direction:
            column;

        justify-content:
            center;

        align-items:
            center;

        background-color:
            rgb(6, 6, 48);

        border:
            2px solid #d4af37;

        border-radius:
            8px;

        color:
            white;

        text-align:
            center;
    }


    .message h1,
    .message h2 {

        color:
            #d4af37;
    }


    .message a {

        margin-top:
            20px;

        padding:
            10px 15px;

        background-color:
            #d4af37;

        color:
            black;

        border-radius:
            4px;

        text-decoration:
            none;

        font-weight:
            bold;
    }


    /*
    =========================================
    TABLETTE
    =========================================
    */

    @media (
        max-width: 768px
    ) {

        .recipes-grid {

            grid-template-columns:
                repeat(2, 1fr);
        }


        .movie-card h1 {

            font-size:
                32px;
        }

    }


    /*
    =========================================
    MOBILE
    =========================================
    */

    @media (
        max-width: 500px
    ) {

        .movie-detail-page {

            width:
                94%;

            margin:
                25px auto;
        }


        .recipes-grid {

            grid-template-columns:
                1fr;
        }


        .movie-card h1 {

            font-size:
                28px;
        }


        .movie-header,
        .movie-info {

            padding:
                18px;
        }


        .movie-image {

            max-height:
                350px;
        }


        .message {

            padding:
                25px 15px;
        }

    }

</style>