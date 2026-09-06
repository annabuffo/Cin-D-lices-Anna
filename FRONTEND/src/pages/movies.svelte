<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let search = "";
    let selectedType = "film";

    let medias = [];
    let loading = true;
    let error = "";

    /*
    =========================================
    CHARGEMENT DES FILMS / SÉRIES DE LA BDD
    =========================================
    */

    async function loadMedias() {
        try {
            loading = true;
            error = "";

            const response =
                await fetch(
                    `${API_URL}/api/media`
                );

            const data =
                await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Impossible de charger les films et séries."
                );
            }

            medias =
                Array.isArray(data)
                    ? data
                    : [];

            console.log(
                "MÉDIAS CHARGÉS :",
                medias
            );
        } catch (err) {
            console.error(
                "Erreur chargement médias :",
                err
            );

            error =
                "Impossible de charger les films et séries.";

            medias = [];
        } finally {
            loading = false;
        }
    }

    /*
    =========================================
    NORMALISATION RECHERCHE
    =========================================
    */

    function normalize(value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );
    }

    /*
    =========================================
    FILTRAGE
    =========================================
    */

    function getResults() {
        const searchValue =
            normalize(search);

        if (!searchValue) {
            return [];
        }

        return medias.filter(
            (media) => {

                const matchesType =
                    media.type ===
                    selectedType;

                const matchesSearch =
                    normalize(
                        media.title
                    ).includes(
                        searchValue
                    );

                return (
                    matchesType &&
                    matchesSearch
                );
            }
        );
    }

    /*
    =========================================
    IMAGE
    =========================================
    */

    function getMediaImage(media) {
        return media.image_url || "";
    }

    onMount(() => {
        loadMedias();
    });
</script>


<main class="movies-page">

    <h1>
        🎬 DÉCOUVREZ DES FILMS ET
        SÉRIES TÉLÉVISÉES
    </h1>

    <p class="subtitle">
        Cherchez un film ou une série
        pour découvrir les recettes inspirées
    </p>


    <!-- RECHERCHE -->

    <div class="container-searching">

        <div class="search-container">

            <input
                class="search-input"
                type="search"
                placeholder="Commence à taper pour chercher..."
                bind:value={search}
            />

        </div>


        <!-- FILM / SÉRIE -->

        <div class="choix-type">

            <label>

                <input
                    type="radio"
                    name="type"
                    value="film"
                    bind:group={selectedType}
                />

                Films

            </label>


            <label>

                <input
                    type="radio"
                    name="type"
                    value="serie"
                    bind:group={selectedType}
                />

                Séries télévisées

            </label>

        </div>

    </div>


    <!-- RÉSULTATS -->

    <section class="results-section">

        {#if loading}

            <div class="search-results">

                <h2>
                    CHARGEMENT...
                </h2>

                <p>
                    Chargement des films
                    et séries.
                </p>

            </div>


        {:else if error}

            <div class="search-results">

                <h2>
                    ERREUR
                </h2>

                <p>
                    {error}
                </p>

            </div>


        {:else if !search.trim()}

            <div class="search-results">

                <h2>
                    🍿 BIENVENUE SUR
                    MOVIE SEARCH 🍿
                </h2>

                <p>
                    Utilisez la barre de recherche
                    ci-dessus pour trouver un film
                    ou une série télévisée.
                </p>

                <p>
                    {medias.length}
                    films et séries sont
                    actuellement disponibles
                    dans notre catalogue.
                </p>

            </div>


        {:else if getResults().length === 0}

            <div class="search-results">

                <h2>
                    AUCUN RÉSULTAT
                </h2>

                <p>
                    Aucun
                    {selectedType === "film"
                        ? "film"
                        : "série"}
                    ne correspond à votre recherche.
                </p>

            </div>


        {:else}

            <div class="results-grid">

                {#each getResults() as media}

                    <article class="result-card">

                        <!-- IMAGE -->

                        {#if getMediaImage(media)}

                            <img
                                class="media-image"
                                src={getMediaImage(media)}
                                alt={media.title}
                            />

                        {:else}

                            <div class="no-image">

                                <span class="movie-icon">
                                    {media.type === "film"
                                        ? "🎬"
                                        : "📺"}
                                </span>

                                <span>
                                    Image indisponible
                                </span>

                            </div>

                        {/if}


                        <div class="card-content">

                            <h2>
                                {media.title}
                            </h2>

                            <p class="media-type">
                                {media.type === "film"
                                    ? "🎬 Film"
                                    : "📺 Série télévisée"}
                            </p>


                            {#if media.description}

                                <p class="description">
                                    {media.description}
                                </p>

                            {/if}


                            <a
                                href={`#/user/movieDetail/${media.id}`}
                            >
                                VOIR LE
                                {media.type === "film"
                                    ? " FILM"
                                    : " SÉRIE"}
                            </a>

                        </div>

                    </article>

                {/each}

            </div>

        {/if}

    </section>

</main>


<style>

    .movies-page {
        width: 100%;

        min-height: 60vh;

        padding:
            40px 20px 60px;

        box-sizing:
            border-box;

        background-color:
            black;
    }


    /* TITRES */

    .movies-page h1,
    .movies-page h2 {

        font-family:
            "Bebas Neue",
            sans-serif;

        color:
            #d4af37;

        letter-spacing:
            1px;

        text-align:
            center;
    }

    .movies-page h1 {

        margin:
            0 auto;

        font-size:
            36px;
    }

    .subtitle {

        color:
            white;

        text-align:
            center;

        margin-top:
            15px;
    }


    /* RECHERCHE */

    .container-searching {

        width:
            90%;

        max-width:
            800px;

        margin:
            50px auto;

        padding:
            20px;

        background-color:
            rgb(6, 6, 48);

        border:
            2px solid #d4af37;

        border-radius:
            8px;

        box-sizing:
            border-box;
    }

    .search-container {

        width:
            100%;

        display:
            flex;

        align-items:
            center;

        background-color:
            #151525;

        border:
            1px solid lightgray;

        border-radius:
            6px;

        overflow:
            hidden;
    }

    .search-input {

        width:
            100%;

        padding:
            12px;

        background-color:
            black;

        color:
            white;

        border:
            none;

        outline:
            none;

        font-size:
            16px;
    }

    .search-input:focus {

        outline:
            2px solid #d4af37;

        outline-offset:
            -2px;
    }


    /* CHOIX FILM / SÉRIE */

    .choix-type {

        display:
            flex;

        justify-content:
            center;

        gap:
            25px;

        margin-top:
            20px;

        padding:
            10px;

        color:
            white;

        font-size:
            14px;
    }

    .choix-type label {

        display:
            flex;

        align-items:
            center;

        gap:
            6px;

        cursor:
            pointer;
    }

    .choix-type input[type="radio"] {

        accent-color:
            #d4af37;

        cursor:
            pointer;
    }


    /* ACCUEIL / MESSAGE */

    .search-results {

        width:
            90%;

        max-width:
            800px;

        margin:
            50px auto;

        padding:
            50px;

        background-color:
            rgb(6, 6, 48);

        border:
            2px solid #d4af37;

        border-radius:
            8px;

        box-sizing:
            border-box;
    }

    .search-results h2 {

        margin-top:
            0;
    }

    .search-results p {

        color:
            white;

        text-align:
            center;

        margin-top:
            20px;

        line-height:
            1.6;
    }


    /* GRILLE */

    .results-grid {

        width:
            90%;

        max-width:
            1100px;

        margin:
            40px auto;

        display:
            grid;

        grid-template-columns:
            repeat(3, 1fr);

        gap:
            20px;
    }


    /* CARTE */

    .result-card {

        overflow:
            hidden;

        display:
            flex;

        flex-direction:
            column;

        background-color:
            rgb(6, 6, 48);

        border:
            2px solid #d4af37;

        border-radius:
            8px;
    }


    /* IMAGE */

    .media-image {

        width:
            100%;

        height:
            280px;

        object-fit:
            cover;

        border-bottom:
            2px solid #d4af37;
    }

    .no-image {

        width:
            100%;

        height:
            280px;

        display:
            flex;

        flex-direction:
            column;

        justify-content:
            center;

        align-items:
            center;

        gap:
            10px;

        background-color:
            #151525;

        color:
            #999;

        border-bottom:
            2px solid #d4af37;
    }

    .movie-icon {

        font-size:
            45px;
    }


    /* CONTENU CARTE */

    .card-content {

        padding:
            20px;

        display:
            flex;

        flex-direction:
            column;

        align-items:
            center;

        flex:
            1;

        text-align:
            center;
    }

    .result-card h2 {

        margin:
            5px 0 10px;

        font-size:
            25px;
    }

    .media-type {

        color:
            white;

        font-weight:
            bold;
    }

    .description {

        color:
            #ddd;

        font-size:
            14px;

        line-height:
            1.5;

        flex:
            1;
    }

    .result-card a {

        margin-top:
            15px;

        padding:
            10px 15px;

        color:
            black;

        background-color:
            #d4af37;

        text-decoration:
            none;

        font-weight:
            bold;

        border-radius:
            4px;
    }

    .result-card a:hover {

        background-color:
            #f0c94d;
    }


    /* TABLETTE */

    @media (
        max-width: 768px
    ) {

        .movies-page {

            padding:
                30px 15px 50px;
        }

        .movies-page h1 {

            font-size:
                30px;
        }

        .container-searching,
        .search-results {

            width:
                95%;
        }

        .search-results {

            padding:
                35px 25px;
        }

        .results-grid {

            grid-template-columns:
                repeat(2, 1fr);
        }

        .media-image,
        .no-image {

            height:
                250px;
        }
    }


    /* MOBILE */

    @media (
        max-width: 375px
    ) {

        .movies-page {

            padding:
                25px 10px 40px;
        }

        .movies-page h1 {

            font-size:
                26px;

            line-height:
                1.3;
        }

        .subtitle {

            font-size:
                14px;

            line-height:
                1.5;
        }

        .container-searching {

            width:
                100%;

            margin:
                30px auto;

            padding:
                15px;
        }

        .search-input {

            font-size:
                16px;

            padding:
                12px 10px;
        }

        .choix-type {

            flex-direction:
                column;

            align-items:
                center;

            gap:
                12px;
        }

        .search-results {

            width:
                100%;

            margin:
                30px auto;

            padding:
                25px 15px;
        }

        .search-results h2 {

            font-size:
                22px;
        }

        .search-results p {

            font-size:
                14px;
        }

        .results-grid {

            width:
                100%;

            grid-template-columns:
                1fr;
        }

        .media-image,
        .no-image {

            height:
                300px;
        }

        .result-card h2 {

            font-size:
                22px;
        }

        .card-content {

            padding:
                15px;
        }
    }

</style>