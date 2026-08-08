<script>
    import { link } from "svelte-spa-router";
</script>

<main>
    <h1>🎬 DÉCOUVREZ DES FILMS ET SÉRIES TÉLÉVISÉES</h1>
    <p>Cherchez un film ou une série pour créer une recette inspirée</p>

    <div class="container-searching">
        <div class="search-container">
            <input
                class="search-input"
                type="text"
                placeholder="Commence à taper pour chercher..."
                id="searchInput"
            />
        </div>

        <div class="choix-type">
            <label>
                <input type="radio" name="type" checked />
                Films
            </label>

            <label>
                <input type="radio" name="type" />
                Séries télévisées
            </label>
        </div>
    </div>

    <section>
        <div class="search-results">
            <h2>🍿BIENVENUE SUR MOVIE SEARCH🍿</h2>
            
            <p>
                Utilisez la barre de reccherche ci-dessus pour trouver un film
                ou une série télévisée, puis créez une recette inspirée de votre
                choix.
            </p>
            <p>
                <a href="./connexion.html">Connectez-vous</a> ou
                <a href="./register.html">Inscrivez-vous</a>
                pour créer vos propres recettes de films et séries.
            </p>
        </div>
    </section>
</main>

<style>
    /*PARTIE MAIN*/

    *{
        background-color: black;
        box-sizing: border-box;
    }

    h1,
    h2 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
    }

    nav a,
    option,
    select {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }

    .container-searching {
        border: 2px solid #d4af37;
        border-radius: 8px;
        background-color: rgb(6, 6, 48);
        width: 90%;
        padding: 20px;
        max-width: 800px;
        border-radius: 8px;
        margin: 60px auto;
        border: 1px solid #d4af37;
    }

    .search-container {
        margin: 10px;
        background-color: #151525;
        border-radius: 6px;
        border: 1px solid lightgray;
        padding: 0;
        display: flex;
        width: 100%;
        align-items: center;
        margin-top: 20px;
    }

    .choix-type {
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        gap: 25px;
        background-color: transparent;
        color: white;
        padding: 10px;
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
    }

    .search-input {
        flex: 1;
        padding: 10px;
        background-color: black;
        color: white;
    }

    .search-results {
        border: 2px solid #d4af37;
        border-radius: 8px;
        background-color: rgb(6, 6, 48);
        width: 90%;
        padding: 60px;
        max-width: 800px;
        border-radius: 8px;
        margin: 60px auto;
        border: 1px solid #d4af37;
    }

    h1 {
        color: #d4af37;
        text-align: center;
        background-color: transparent;
    }

    h2 {
        color: #d4af37;
        text-align: center;
        background-color: transparent;
    }

    p {
        color: white;
        text-align: center;
        margin-top: 20px;
        background-color: transparent;
    }

    p a {
        color: #d4af37;
        text-decoration: none;
        text-decoration: underline;
        background-color: transparent;
    }
</style>
