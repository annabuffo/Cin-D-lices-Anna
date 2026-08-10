
<script>
    import { link } from "svelte-spa-router";
</script>

<main class="not-found">
    <h1>404</h1>

    <p>Page non trouvée</p>

    <a href="/" use:link class="home-btn">
        Retour à l'accueil
    </a>
</main>

<style>
    .not-found {
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .not-found h1 {
        font-size: 5rem;
        margin: 0;
    }

    .not-found p {
        color: white;
    }

    .home-btn {
        background-color: #e94560;
        color: white;
        border-radius: 8px;
        padding: 10px 20px;
        margin-top: 20px;
    }

    .home-btn:hover {
        background-color: #d13354;
    }
</style>