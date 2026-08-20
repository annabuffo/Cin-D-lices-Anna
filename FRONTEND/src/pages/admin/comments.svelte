<main class="admin-page">
    <h1>MODÉRATION DES COMMENTAIRES</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">
        <div class="item-card">
            <div>
                <h2>Commentaire de Anna</h2>

                <p class="recipe">
                    Recette : Tagliatelles crémeuses aux champignons
                </p>

                <p>Super recette, très facile à réaliser !</p>
            </div>

            <button class="delete" type="button">
                SUPPRIMER
            </button>
        </div>

        <div class="item-card">
            <div>
                <h2>Commentaire de User01</h2>

                <p class="recipe">
                    Recette : Ratatouille aux légumes
                </p>

                <p>Très bonne recette.</p>
            </div>

            <button class="delete" type="button">
                SUPPRIMER
            </button>
        </div>

        <div class="item-card">
            <div>
                <h2>Commentaire de User02</h2>

                <p class="recipe">
                    Recette : Poisson Rôti et Légumes au Four
                </p>

                <p>Excellent !</p>
            </div>

            <button class="delete" type="button">
                SUPPRIMER
            </button>
        </div>

        <div class="item-card">
            <div>
                <h2>Commentaire de User03</h2>

                <p class="recipe">
                    Recette : Poulet Rôti aux Herbes
                </p>

                <p>Très bon !</p>
            </div>

            <button class="delete" type="button">
                SUPPRIMER
            </button>
        </div>
    </section>
</main>

<style>
    .admin-page {
        width: 90%;
        max-width: 1000px;
        margin: 40px auto;
    }

    .admin-page h1 {
        text-align: center;
        color: #d4af37;
        margin-bottom: 25px;
    }

    .back {
        display: inline-block;
        color: #d4af37;
        margin-bottom: 25px;
        text-decoration: none;
    }

    .back:hover {
        text-decoration: underline;
    }

    .admin-container {
        background-color: rgb(6, 6, 48);
        border: 1px solid #d4af37;
        border-radius: 8px;
        padding: 20px;
    }

    .item-card {
        background-color: #111526;

        padding: 15px;
        margin-bottom: 15px;

        border-radius: 6px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .item-card:last-child {
        margin-bottom: 0;
    }

    .item-card h2 {
        color: #d4af37;
        margin: 0 0 10px;
    }

    .item-card p {
        color: white;
        margin: 5px 0;
    }

    .recipe {
        color: #d4af37 !important;
    }

    .delete {
        background-color: #e24d4d;
        color: white;

        border: none;
        border-radius: 4px;

        padding: 10px 15px;

        cursor: pointer;
        font-weight: bold;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .admin-page {
            width: 94%;
        }

        .item-card {
            align-items: flex-start;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .admin-page {
            width: 95%;
            margin: 25px auto;
        }

        .admin-page h1 {
            font-size: 28px;
        }

        .admin-container {
            padding: 15px;
        }

        .item-card {
            flex-direction: column;
            align-items: stretch;
        }

        .item-card h2 {
            font-size: 20px;
        }

        .delete {
            width: 100%;
        }
    }
</style>