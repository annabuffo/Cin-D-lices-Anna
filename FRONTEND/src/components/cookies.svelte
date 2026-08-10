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
            <button class="refuse" on:click={fermer}>Refuser</button>
            <button class="accept" on:click={fermer}>Accepter</button>
        </div>
    </div>
{/if}

<style>
    .cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;

        background: #1a1a1a;
        border-top: 2px solid #d4af37;

        padding: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        color: white;
    }

    .cookie-banner p {
        margin: 0;
        font-size: 16px;
    }

    .cookie-banner a {
        color: #d4af37;
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
        background: transparent;
        color: white;
        border: 1px solid white;
    }

    .accept {
        background: #d4af37;
        color: black;
        border: none;
    }

    .refuse:hover {
        background: #333;
    }

    .accept:hover {
        background: #f0c94d;
    }

    @media (max-width: 768px) {
        .cookie-banner {
            flex-direction: column;
            text-align: center;
        }

        .buttons {
            width: 100%;
            justify-content: center;
        }
    }
</style>
