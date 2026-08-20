<main class="about-page">
    <div class="section-contenu">

        <section class="section">
            <img
                class="section-icon"
                src="/icons-autre/pop.png"
                alt="Pop corn"
            />

            <h2>Notre histoire</h2>

            <p>
                Ciné Délices est né d'une passion simple : l'amour du cinéma et
                de la gastronomie.
            </p>

            <p>
                Des festins copieux de la Terre du Milieu à la délicate
                ratatouille, la cuisine au cinéma raconte aussi des histoires.
            </p>
        </section>

        <section class="section">
            <img
                class="section-icon"
                src="/icons-autre/cooking.png"
                alt="Un cuisinier"
            />

            <h2>Que faisons-nous ?</h2>

            <p>
                Nous sélectionnons et créons des recettes inspirées de films et
                séries emblématiques.
            </p>

            <div class="liste-des-fonctionnalites">
                <p>🎥 Recherche de films et séries sur TMDB.</p>
                <p>📝 Créez et partagez vos recettes.</p>
                <p>🍽️ Découvrez des plats inspirés du cinéma.</p>
                <p>👥 Rejoignez une communauté de passionnés.</p>
            </div>
        </section>

        <section class="section">
            <img
                class="section-icon"
                src="/icons-autre/favourites.png"
                alt="Une étoile"
            />

            <h2>Rejoignez notre communauté</h2>

            <p>
                Que vous soyez un chef chevronné ou débutant, Ciné Délices vous
                souhaite la bienvenue.
            </p>

            <div class="buttons">
                <a class="start" href="#/register">
                    COMMENCEZ
                </a>

                <a class="browse" href="#/recipes">
                    PARCOURIR LES RECETTES
                </a>
            </div>
        </section>

    </div>
</main>

<style>
    .about-page {
        width: 90%;
        max-width: 1100px;
        margin: 40px auto;
    }

    .section-contenu {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .section {
        background-color: #10102b;

        border: 1px solid #d4af37;
        border-radius: 8px;

        padding: 30px;

        text-align: center;
    }

    .section-icon {
        width: 70px;
        height: auto;

        display: block;

        margin: 0 auto 15px;
    }

    .section h2 {
        color: #d4af37;
        margin-bottom: 15px;
    }

    .section p {
        color: white;

        line-height: 1.7;

        margin: 10px 0;
    }

    .liste-des-fonctionnalites {
        margin-top: 20px;
    }

    .buttons {
        margin-top: 20px;

        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .start,
    .browse {
        display: inline-block;

        padding: 10px 20px;

        color: white;
        text-decoration: none;

        border-radius: 4px;
        text-align: center;
    }

    .start {
        background-color: #e94560;
    }

    .browse {
        background-color: #07558d;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .about-page {
            width: 94%;
            margin: 30px auto;
        }

        .section {
            padding: 25px;
        }

        .section-icon {
            width: 60px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .about-page {
            width: 95%;
            margin: 25px auto;
        }

        .section-contenu {
            gap: 20px;
        }

        .section {
            padding: 20px 15px;
        }

        .section-icon {
            width: 55px;
        }

        .section h2 {
            font-size: 22px;
        }

        .section p {
            font-size: 14px;
            line-height: 1.5;
        }

        .buttons {
            flex-direction: column;
        }

        .start,
        .browse {
            width: 100%;
            padding: 12px 10px;
            box-sizing: border-box;
        }
    }
</style>