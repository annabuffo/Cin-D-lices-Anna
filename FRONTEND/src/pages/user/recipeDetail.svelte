<main class="recipe-detail-page">

    <section class="recipe-detail-container">

        <h1>
            TAGLIATELLES CRÉMEUSES AUX CHAMPIGNONS
        </h1>

        <p class="movie-name">
            🎬 Inspirée de Super Mario Bros
        </p>

        <img
            class="recipe-image"
            src="/img-card-sct-1/champignon.jpg"
            alt="Tagliatelles crémeuses aux champignons"
        />

        <div class="recipe-infos">
            <p>
                <strong>Catégorie :</strong>
                Plat principal
            </p>

            <p>
                <strong>Auteur :</strong>
                Admin
            </p>

            <p>
                <strong>Temps de préparation :</strong>
                30 minutes
            </p>
        </div>

        <section class="recipe-section">
            <h2>INGRÉDIENTS</h2>

            <ul>
                <li>300 g de tagliatelles</li>
                <li>250 g de champignons</li>
                <li>20 cl de crème fraîche</li>
                <li>1 oignon</li>
                <li>1 gousse d'ail</li>
                <li>Huile d'olive</li>
                <li>Sel</li>
                <li>Poivre</li>
                <li>Persil</li>
            </ul>
        </section>

        <section class="recipe-section">
            <h2>PRÉPARATION</h2>

            <ol>
                <li>
                    Faites cuire les tagliatelles dans une casserole d'eau
                    bouillante salée.
                </li>

                <li>
                    Émincez l'oignon et les champignons.
                </li>

                <li>
                    Faites revenir l'oignon dans une poêle avec un peu
                    d'huile d'olive.
                </li>

                <li>
                    Ajoutez les champignons et laissez cuire quelques minutes.
                </li>

                <li>
                    Ajoutez la crème fraîche, le sel et le poivre.
                </li>

                <li>
                    Ajoutez les tagliatelles dans la sauce et mélangez.
                </li>

                <li>
                    Ajoutez un peu de persil avant de servir.
                </li>
            </ol>
        </section>

        <section class="recipe-section">
            <h2>À PROPOS DU FILM</h2>

            <p>
                Cette recette est inspirée de l'univers de Super Mario Bros
                et de ses célèbres champignons.
            </p>
        </section>

        <div class="buttons">
            <a class="back" href="#/recipes">
                ← RETOUR AUX RECETTES
            </a>

            <button class="favorite" type="button">
                ⭐ AJOUTER AUX FAVORIS
            </button>
        </div>

    </section>

</main>

<style>
    .recipe-detail-page {
        width: 90%;
        max-width: 900px;

        margin: 40px auto;
    }

    .recipe-detail-container {
        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        padding: 30px;
    }

    /* TITRE */

    .recipe-detail-container h1 {
        color: #d4af37;

        text-align: center;

        margin-top: 0;
        margin-bottom: 10px;
    }

    .movie-name {
        color: #e24d4d;

        text-align: center;

        margin-bottom: 25px;
    }

    /* IMAGE */

    .recipe-image {
        display: block;

        width: 100%;
        max-height: 450px;

        object-fit: cover;

        border: 2px solid #d4af37;
        border-radius: 6px;

        margin-bottom: 25px;
    }

    /* INFORMATIONS */

    .recipe-infos {
        background-color: #111526;

        padding: 15px;

        border-radius: 6px;

        margin-bottom: 30px;
    }

    .recipe-infos p {
        color: white;

        margin: 8px 0;
    }

    .recipe-infos strong {
        color: #d4af37;
    }

    /* SECTIONS */

    .recipe-section {
        margin-top: 30px;
    }

    .recipe-section h2 {
        color: #d4af37;

        border-bottom: 1px solid #d4af37;

        padding-bottom: 8px;
    }

    .recipe-section p,
    .recipe-section li {
        color: white;

        line-height: 1.7;
    }

    .recipe-section ul,
    .recipe-section ol {
        padding-left: 25px;
    }

    .recipe-section li {
        margin-bottom: 8px;
    }

    /* BOUTONS */

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 15px;

        margin-top: 35px;
    }

    .back,
    .favorite {
        padding: 12px 15px;

        border-radius: 4px;

        font-weight: bold;

        text-decoration: none;
    }

    .back {
        background-color: #d4af37;
        color: black;
    }

    .favorite {
        background-color: #e24d4d;
        color: white;

        border: none;

        cursor: pointer;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .recipe-detail-page {
            width: 94%;
        }

        .recipe-detail-container {
            padding: 25px;
        }

        .recipe-detail-container h1 {
            font-size: 30px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .recipe-detail-page {
            width: 95%;

            margin: 25px auto;
        }

        .recipe-detail-container {
            padding: 15px;
        }

        .recipe-detail-container h1 {
            font-size: 25px;
        }

        .recipe-image {
            height: 230px;
        }

        .recipe-section h2 {
            font-size: 21px;
        }

        .recipe-section p,
        .recipe-section li {
            font-size: 14px;
        }

        .buttons {
            flex-direction: column;
        }

        .back,
        .favorite {
            width: 100%;

            text-align: center;
        }
    }
</style>