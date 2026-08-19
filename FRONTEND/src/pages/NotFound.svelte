<main class="not-found">
    <h1>404</h1>

    <p>Page non trouvée</p>

    <a href="#/" class="home-btn">
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

        padding: 40px 20px;
    }

    .not-found h1 {
        font-size: 80px;
        margin: 0;
        color: #d4af37;
    }

    .not-found p {
        color: white;
        font-size: 18px;
        margin: 10px 0;
    }

    .home-btn {
        display: inline-block;

        background-color: #e94560;
        color: white;

        border-radius: 8px;

        padding: 10px 20px;
        margin-top: 20px;

        text-decoration: none;
    }

    .home-btn:hover {
        background-color: #d13354;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .not-found h1 {
            font-size: 65px;
        }

        .not-found p {
            font-size: 16px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .not-found {
            min-height: 50vh;
            padding: 30px 15px;
        }

        .not-found h1 {
            font-size: 55px;
        }

        .home-btn {
            width: 100%;
            max-width: 250px;
        }
    }
</style>