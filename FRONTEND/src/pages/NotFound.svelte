<script>
    import { link } from "svelte-spa-router";
</script>

<main>
    <div class="not-found">
        <h1>404</h1>
        <p>Page non trouvée</p>
        <a href="/" use:link class="home-btn">Retour à l'accueil</a>
    </div>
</main>

<style>
    /*PARTIE MAIN*/

    body {
        margin: 0;
        background-color: #0d0d0d;
        font-family: "Poppins", sans-serif;
    }

    h1,
    h2,
    h3 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
        text-align: center;
    }

    .not-found p {
        color: white;
        text-align: center;
    }

    .not-found a {
        background-color: #e94560;
        color: white;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
        padding: 10px 20px;
        display: inline-block;
        margin-bottom: 20px;
    }

    .not-found a:hover {
        background-color: #d13354;
        align-items: center;
        justify-content: center;
    }
</style>
