<script>
    let afficher = true;

    function fermer() {
        afficher = false;
    }
</script>

{#if afficher}
    <div class="cookie-banner">
        <p>
            🍪 Nous utilisons des cookies nécessaires au fonctionnement du site.
            <a href="#/privacy">En savoir plus</a>
        </p>

        <div class="buttons">
            <button class="refuse" on:click={fermer}>
                Refuser
            </button>

            <button class="accept" on:click={fermer}>
                Accepter
            </button>
        </div>
    </div>
{/if}

<style>
    .cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;

        width: 100%;
        padding: 20px;

        background-color: #1a1a1a;
        color: white;

        border-top: 2px solid #d4af37;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        z-index: 1000;
    }

    .cookie-banner p {
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
    }

    .cookie-banner a {
        color: #d4af37;
        text-decoration: underline;
    }

    .buttons {
        display: flex;
        gap: 10px;
    }

    .refuse,
    .accept {
        padding: 10px 20px;

        border-radius: 5px;

        cursor: pointer;
        font-size: 15px;
    }

    .refuse {
        background-color: transparent;
        color: white;
        border: 1px solid white;
    }

    .accept {
        background-color: #d4af37;
        color: black;
        border: none;
    }

    .refuse:hover {
        background-color: #333;
    }

    .accept:hover {
        background-color: #f0c94d;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .cookie-banner {
            flex-direction: column;
            text-align: center;
            padding: 15px;
        }

        .buttons {
            width: 100%;
            justify-content: center;
        }

        .refuse,
        .accept {
            width: 120px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .cookie-banner p {
            font-size: 14px;
        }

        .buttons {
            flex-direction: column;
            align-items: center;
        }

        .refuse,
        .accept {
            width: 100%;
            max-width: 250px;
        }
    }
</style>