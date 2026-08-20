<main class="favorites-page">

    <h1>⭐ MES FAVORIS</h1>

    <p class="subtitle">
        Retrouvez toutes les recettes que vous avez ajoutées à vos favoris
    </p>

    <section class="favorites-container">

        <!-- FAVORI 1 -->

        <article class="favorite-card">

            <img
                src="/img-card-sct-1/poisson.jpg"
                alt="Poisson rôti et légumes au four"
            />

            <div class="favorite-info">

                <h2>
                    Poisson Rôti et Légumes au Four
                </h2>

                <p class="movie">
                    🎬 La Petite Sirène
                </p>

                <p>
                    Une recette de poisson rôti accompagnée de légumes
                    inspirée de l'univers de La Petite Sirène.
                </p>

                <div class="actions">

                    <a href="#/user/recipe">
                        VOIR LA RECETTE
                    </a>

                    <button class="remove" type="button">
                        RETIRER DES FAVORIS
                    </button>

                </div>

            </div>

        </article>

        <!-- FAVORI 2 -->

        <article class="favorite-card">

            <img
                src="/img-card-sct-1/champignon.jpg"
                alt="Tagliatelles crémeuses aux champignons"
            />

            <div class="favorite-info">

                <h2>
                    Tagliatelles crémeuses aux champignons
                </h2>

                <p class="movie">
                    🎬 Super Mario Bros
                </p>

                <p>
                    Des tagliatelles crémeuses aux champignons inspirées
                    de l'univers de Super Mario Bros.
                </p>

                <div class="actions">

                    <a href="#/user/recipe">
                        VOIR LA RECETTE
                    </a>

                    <button class="remove" type="button">
                        RETIRER DES FAVORIS
                    </button>

                </div>

            </div>

        </article>

        <!-- FAVORI 3 -->

        <article class="favorite-card">

            <img
                src="/img-card-sct-1/ratatouille.jpg"
                alt="Ratatouille aux légumes"
            />

            <div class="favorite-info">

                <h2>
                    Ratatouille aux légumes
                </h2>

                <p class="movie">
                    🎬 Ratatouille
                </p>

                <p>
                    Une ratatouille aux légumes inspirée du célèbre
                    film d'animation Ratatouille.
                </p>

                <div class="actions">

                    <a href="#/user/recipe">
                        VOIR LA RECETTE
                    </a>

                    <button class="remove" type="button">
                        RETIRER DES FAVORIS
                    </button>

                </div>

            </div>

        </article>

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

    @media (max-width: 480px) {

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
        }

        .back {
            width: 100%;

            text-align: center;
        }

    }

</style>