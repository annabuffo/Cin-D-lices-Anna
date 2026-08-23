<main class="movie-detail-page">

    <section class="movie-detail-container">

        <h1>SUPER MARIO BROS</h1>

        <p class="movie-type">
            🎬 Film
        </p>

        <img
            class="movie-image"
            src="/img-home/Mario.jpg"
            alt="Super Mario Bros"
        />

        <div class="movie-infos">

            <p>
                <strong>Titre :</strong>
                Super Mario Bros
            </p>

            <p>
                <strong>Type :</strong>
                Film
            </p>

            <p>
                <strong>Genre :</strong>
                Animation, aventure, comédie
            </p>

            <p>
                <strong>Année :</strong>
                2023
            </p>

        </div>

        <section class="movie-section">

            <h2>SYNOPSIS</h2>

            <p>
                Mario et Luigi sont deux frères plombiers qui se retrouvent
                transportés dans un univers fantastique.

                Mario devra partir à la recherche de son frère et rencontrer
                de nombreux personnages au cours de son aventure.
            </p>

        </section>

        <section class="movie-section">

            <h2>RECETTE ASSOCIÉE</h2>

            <div class="recipe-card">

                <img
                    src="/img-card-sct-1/champignon.jpg"
                    alt="Tagliatelles crémeuses aux champignons"
                />

                <div class="recipe-info">

                    <h3>
                        Tagliatelles crémeuses aux champignons
                    </h3>

                    <p>
                        Une recette inspirée des célèbres champignons
                        de l'univers de Super Mario Bros.
                    </p>

                    <a href="#/user/recipeDetail">
                        VOIR LA RECETTE
                    </a>

                </div>

            </div>

        </section>

        <div class="buttons">

            <a class="back" href="#/user/movieDetail">
                ← RETOUR AUX FILMS
            </a>

        </div>

    </section>

</main>

<style>

    .movie-detail-page {
        width: 90%;
        max-width: 900px;

        margin: 40px auto;
    }

    .movie-detail-container {
        background-color: rgb(6, 6, 48);

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

    @media (max-width: 480px) {

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
        }

        .back {
            width: 100%;

            text-align: center;
        }

    }

</style>