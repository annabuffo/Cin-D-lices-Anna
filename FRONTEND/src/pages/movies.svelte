<script>
    let search = "";
    let selectedType = "movie";

    const medias = [
        {
            id: "super-mario",
            title: "Super Mario Bros",
            type: "movie",
        },
        {
            id: "petite-sirene",
            title: "La Petite Sirène",
            type: "movie",
        },
        {
            id: "ratatouille",
            title: "Ratatouille",
            type: "movie",
        },
        {
            id: "soupe-choux",
            title: "La Soupe aux Choux",
            type: "movie",
        },
        {
            id: "charlie-chocolaterie",
            title: "Charlie et la Chocolaterie",
            type: "movie",
        },
        {
            id: "vice-versa",
            title: "Vice Versa",
            type: "movie",
        },
        {
            id: "odyssee-pi",
            title: "L'Odyssée de Pi",
            type: "movie",
        },
        {
            id: "doctor-who",
            title: "Doctor Who",
            type: "tv",
        },
    ];

    function getResults() {
        const searchValue = search.trim().toLowerCase();

        if (!searchValue) {
            return [];
        }

        return medias.filter((media) => {
            return (
                media.type === selectedType &&
                media.title.toLowerCase().includes(searchValue)
            );
        });
    }
</script>

<main class="movies-page">
    <h1>
        🎬 DÉCOUVREZ DES FILMS ET SÉRIES TÉLÉVISÉES
    </h1>

    <p class="subtitle">
        Cherchez un film ou une série pour découvrir les recettes inspirées
    </p>

    <div class="container-searching">
        <div class="search-container">
            <input
                class="search-input"
                type="text"
                placeholder="Commence à taper pour chercher..."
                id="searchInput"
                bind:value={search}
            />
        </div>

        <div class="choix-type">
            <label>
                <input
                    type="radio"
                    name="type"
                    value="movie"
                    bind:group={selectedType}
                />

                Films
            </label>

            <label>
                <input
                    type="radio"
                    name="type"
                    value="tv"
                    bind:group={selectedType}
                />

                Séries télévisées
            </label>
        </div>
    </div>

    <section class="results-section">
        {#if !search.trim()}
            <div class="search-results">
                <h2>
                    🍿 BIENVENUE SUR MOVIE SEARCH 🍿
                </h2>

                <p>
                    Utilisez la barre de recherche ci-dessus pour trouver
                    un film ou une série télévisée.
                </p>

                <p>
                    <a href="#/login">
                        Connectez-vous
                    </a>

                    ou

                    <a href="#/register">
                        Inscrivez-vous
                    </a>

                    pour créer vos propres recettes inspirées de films
                    et séries.
                </p>
            </div>

        {:else if getResults().length === 0}

            <div class="search-results">
                <h2>
                    AUCUN RÉSULTAT
                </h2>

                <p>
                    Aucun film ou série ne correspond à votre recherche.
                </p>
            </div>

        {:else}

            <div class="results-grid">
                {#each getResults() as media}
                    <article class="result-card">
                        <span class="movie-icon">
                            {media.type === "movie" ? "🎬" : "📺"}
                        </span>

                        <h2>
                            {media.title}
                        </h2>

                        <p>
                            {media.type === "movie"
                                ? "Film"
                                : "Série télévisée"}
                        </p>

                        <a href={`#/user/movie/${media.id}`}>
                            VOIR LE FILM
                        </a>
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

        padding: 40px 20px 60px;

        box-sizing: border-box;

        background-color: black;
    }

    /* TITRES */

    .movies-page h1,
    .movies-page h2 {
        font-family: "Bebas Neue", sans-serif;

        color: #d4af37;

        letter-spacing: 1px;
        text-align: center;
    }

    .movies-page h1 {
        margin: 0 auto;

        font-size: 36px;
    }

    .subtitle {
        color: white;

        text-align: center;

        margin-top: 15px;
    }

    /* ZONE DE RECHERCHE */

    .container-searching {
        width: 90%;
        max-width: 800px;

        margin: 50px auto;
        padding: 20px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        box-sizing: border-box;
    }

    .search-container {
        width: 100%;

        display: flex;
        align-items: center;

        background-color: #151525;

        border: 1px solid lightgray;
        border-radius: 6px;

        overflow: hidden;
    }

    .search-input {
        width: 100%;

        padding: 12px;

        background-color: black;
        color: white;

        border: none;
        outline: none;

        font-size: 16px;
    }

    .search-input:focus {
        outline: 2px solid #d4af37;
        outline-offset: -2px;
    }

    /* CHOIX FILM / SERIE */

    .choix-type {
        display: flex;
        justify-content: center;

        gap: 25px;

        margin-top: 20px;
        padding: 10px;

        color: white;

        font-size: 14px;
    }

    .choix-type label {
        display: flex;
        align-items: center;

        gap: 6px;

        cursor: pointer;
    }

    .choix-type input[type="radio"] {
        accent-color: #d4af37;

        cursor: pointer;
    }

    /* ZONE D'ACCUEIL */

    .search-results {
        width: 90%;
        max-width: 800px;

        margin: 50px auto;
        padding: 50px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        box-sizing: border-box;
    }

    .search-results h2 {
        margin-top: 0;
    }

    .search-results p {
        color: white;

        text-align: center;

        margin-top: 20px;

        line-height: 1.6;
    }

    .search-results a {
        color: #d4af37;

        text-decoration: underline;
    }

    /* RESULTATS */

    .results-grid {
        width: 90%;
        max-width: 900px;

        margin: 40px auto;

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 20px;
    }

    .result-card {
        padding: 25px;

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        text-align: center;
    }

    .movie-icon {
        font-size: 40px;

        margin-bottom: 10px;
    }

    .result-card h2 {
        margin: 10px 0;
    }

    .result-card p {
        color: white;
    }

    .result-card a {
        margin-top: 15px;
        padding: 10px 15px;

        color: black;
        background-color: #d4af37;

        text-decoration: none;
        font-weight: bold;

        border-radius: 4px;
    }

    .result-card a:hover {
        background-color: #f0c94d;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .movies-page {
            padding: 30px 15px 50px;
        }

        .movies-page h1 {
            font-size: 30px;
        }

        .container-searching,
        .search-results {
            width: 95%;
        }

        .search-results {
            padding: 35px 25px;
        }

        .results-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* MOBILE */

    @media (max-width: 375px) {
        .movies-page {
            padding: 25px 10px 40px;
        }

        .movies-page h1 {
            font-size: 26px;
            line-height: 1.3;
        }

        .subtitle {
            font-size: 14px;
            line-height: 1.5;
        }

        .container-searching {
            width: 100%;

            margin: 30px auto;
            padding: 15px;
        }

        .search-input {
            font-size: 16px;

            padding: 12px 10px;
        }

        .choix-type {
            flex-direction: column;
            align-items: center;

            gap: 12px;
        }

        .search-results {
            width: 100%;

            margin: 30px auto;
            padding: 25px 15px;
        }

        .search-results h2 {
            font-size: 22px;
        }

        .search-results p {
            font-size: 14px;
        }

        .results-grid {
            width: 100%;

            grid-template-columns: 1fr;
        }
    }
</style>