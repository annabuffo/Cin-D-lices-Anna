<script>
    let search = "";
    let selectedType = "movie";

    function handleSearch() {
        if (!search.trim()) {
            return;
        }

        console.log("Recherche :", search);
        console.log("Type :", selectedType);
    }
</script>

<main class="movies-page">
    <h1>🎬 DÉCOUVREZ DES FILMS ET SÉRIES TÉLÉVISÉES</h1>

    <p class="subtitle">
        Cherchez un film ou une série pour créer une recette inspirée
    </p>

    <div class="container-searching">
        <div class="search-container">
            <input
                class="search-input"
                type="text"
                placeholder="Commence à taper pour chercher..."
                id="searchInput"
                bind:value={search}
                on:input={handleSearch}
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
        <div class="search-results">
            <h2>🍿 BIENVENUE SUR MOVIE SEARCH 🍿</h2>

            <p>
                Utilisez la barre de recherche ci-dessus pour trouver un film
                ou une série télévisée, puis créez une recette inspirée de votre
                choix.
            </p>

            <p>
                <a href="#/login">Connectez-vous</a>
                ou
                <a href="#/register">Inscrivez-vous</a>
                pour créer vos propres recettes de films et séries.
            </p>
        </div>
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

    /* CHOIX FILM / SÉRIE */

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

    /* RÉSULTATS */

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
    }

    /* MOBILE */

    @media (max-width: 480px) {
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
    }
</style>