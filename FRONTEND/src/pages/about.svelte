<script>
</script>

<main>
    <div class="about-page">
        <div class="page-header">
            <h1 class="title-about">🎬 À propos de Ciné Délices</h1>
            <h3 class="subtitle">Là où le cinéma rencontre la cuisine</h3>
        </div>

        <div class="section-contenu">
            <div class="section">
                <img
                    class="section-icon"
                    src="./public/icons-autre/pop.png"
                    alt="pop corn"
                />
                <h2>Notre histoire</h2>

                <p>
                    Ciné Délices est né d'une passion simple : l'amour du cinéma
                    et de la gastronomie. Nous croyons que les meilleurs films
                    nous transportent dans des mondes différents, et quelle
                    meilleure façon d'améliorer cette expérience que de recréer
                    les plats qui rendent ces histoires mémorables ?
                </p>
                <p>
                    Des festins copieux de la Terre du Milieu à la délicate
                    ratatouille qui a conquis le cœur d'un critique parisien, la
                    cuisine au cinéma raconte des histoires au-delà des mots.
                    Notre mission est d'apporter ces moments culinaires dans
                    votre cuisine.
                </p>
            </div>

            <div class="section-two">
                <img
                    class="section-icon"
                    src="./public/icons-autre/cooking.png"
                    alt="un cuisinier"
                />
                <h2>Que faisons-nous</h2>

                <p>
                    Nous sélectionnons et créons des recettes inspirées du films
                    et séries emblématiques. Chaque recette est conçue pour
                    capturer l'essence de so origine cinématographique, que ce
                    soit un plat réconfortant tiré de votre comédie préférée ou
                    un plat élaboré.
                </p>

                <ul class="liste-des-fonctionnalités">
                    <p>🎥 Reccherche de films et séries télévisées sur TMDB.</p>
                    <p>
                        📝 Créez et partager vos propres recettes inspirées du
                        cinéma.
                    </p>
                    <p>
                        🍽️ Découvrez de nouveaux plats issus de film que vous
                        aimez.
                    </p>
                    <p>
                        👥 Réjoingnez un communauté de passionnée de
                        gastronomie.
                    </p>
                </ul>
            </div>

            <div class="section-three">
                <img
                    class="section-icon"
                    src="./public/icons-autre/favourites.png"
                    alt="une étoile"
                />
                <h2>Rejoingnez notre cummonauté</h2>

                <p>
                    Que vous soyez un chef chevroné ou que vous débutiez votre
                    parcous culinaire, Ciné Délices vous souhaite la bienvenue.
                    Partagez vos créations, découvrez de nouvelles recettes, et
                    connectez-vous avec d'autres passionnés de cinéma et de
                    gastronomie.
                </p>

                <button class="start" type="button"
                    ><a href="register.html">COMMENCEZ</a></button
                >
                <button class="browse" type="button"
                    ><a href="recipes.html">PARCOUREZ LES RECETTES</a></button
                >
            </div>
        </div>
    </div>
</main>

<style>
    /*MAIN*/
    * {
        background-color: black;
        box-sizing: border-box;
    }

    h1,
    h2,
    h3 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
    }

    nav a,
    button,
    option,
    select {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }

    .section,
    .section-two,
    .section-three {
        color: white;
        margin-bottom: 20px;
        padding: 40px;
        background-color: rgb(6, 6, 48);
        width: 90%;
        padding: 20px;
        max-width: 600px;
        border-radius: 8px;
        margin: 60px auto;
        border: 1px solid #d4af37;
    }

    .title-about {
        color: #d4af37;
        text-align: center;
        margin-top: 20px;
    }

    .subtitle {
        color: white;
    }

    .section-contenu h2 {
        color: #d4af37;
        text-align: left;
    }

    p {
        color: white;
        text-align: left;
    }

    .section-three button {
        border-radius: 6px;
        color: #d4af37;
    }

    .start {
        background-color: #d4af37;
        color: #0c0c6979;
        padding: 10px 40px;
    }

    .browse {
        background-color: #0c0c6979;
        border: 1px solid #d4af37;
        padding: 10px 40px;
    }

    .subtitle {
        text-align: center;
    }

    .section-icon {
        border: 1px solid transparent;
        width: 60px;
    }
</style>
