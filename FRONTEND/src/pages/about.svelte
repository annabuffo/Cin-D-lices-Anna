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
                <a class="start" href="#/register"> COMMENCEZ </a>

                <a class="browse" href="#/recipes"> PARCOURIR LES RECETTES </a>
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
        margin: 0 auto 15px;
    }

    .section p {
        color: white;
        line-height: 1.7;
    }

    .buttons {
        margin-top: 20px;
    }

    .start,
    .browse {
        display: inline-block;
        padding: 10px 20px;
        margin: 5px;
        color: white;
        border-radius: 4px;
    }

    .start {
        background-color: #e94560;
    }

    .browse {
        background-color: #07558d;
    }

    @media (max-width: 600px) {
        .section {
            padding: 20px;
        }

        .start,
        .browse {
            display: block;
        }
    }
</style>
