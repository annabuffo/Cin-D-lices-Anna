<main class="admin-page">
    <h1>GESTION DES RECETTES</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">
        <button class="add" type="button">
            AJOUTER UNE RECETTE
        </button>

        <div class="item-card">
            <img
                src="/img-card-sct-1/champignon.jpg"
                alt="Tagliatelles aux champignons"
            />

            <div class="info">
                <h2>Tagliatelles crémeuses aux champignons</h2>

                <p>Film : Super Mario Bros</p>
                <p>Catégorie : Plat principal</p>
                <p>Auteur : Anna</p>
            </div>

            <div class="actions">
                <button class="edit" type="button">
                    MODIFIER
                </button>

                <button class="delete" type="button">
                    SUPPRIMER
                </button>
            </div>
        </div>

        <div class="item-card">
            <img
                src="/img-card-sct-1/ratatouille.jpg"
                alt="Ratatouille"
            />

            <div class="info">
                <h2>Ratatouille aux légumes</h2>

                <p>Film : Ratatouille</p>
                <p>Catégorie : Plat principal</p>
                <p>Auteur : Admin</p>
            </div>

            <div class="actions">
                <button class="edit" type="button">
                    MODIFIER
                </button>

                <button class="delete" type="button">
                    SUPPRIMER
                </button>
            </div>
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

    .add {
        background-color: #d4af37;
        color: black;

        border: none;
        border-radius: 4px;

        padding: 10px 15px;
        margin-bottom: 20px;

        cursor: pointer;
        font-weight: bold;
    }

    .item-card {
        background-color: #111526;

        padding: 15px;
        margin-bottom: 15px;

        border-radius: 6px;

        display: flex;
        align-items: center;
        gap: 20px;
    }

    .item-card:last-child {
        margin-bottom: 0;
    }

    .item-card img {
        width: 120px;
        height: 100px;

        object-fit: cover;

        border: 1px solid #d4af37;
        border-radius: 4px;
    }

    .info {
        flex: 1;
    }

    .info h2 {
        color: #d4af37;
        margin: 0 0 10px;
    }

    .info p {
        color: white;
        margin: 5px 0;
    }

    .actions {
        display: flex;
        gap: 10px;
    }

    .edit,
    .delete {
        border: none;
        border-radius: 4px;

        padding: 10px 15px;

        cursor: pointer;
        font-weight: bold;
    }

    .edit {
        background-color: #d4af37;
        color: black;
    }

    .delete {
        background-color: #e24d4d;
        color: white;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .admin-page {
            width: 94%;
        }

        .item-card {
            align-items: flex-start;
        }

        .actions {
            flex-direction: column;
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

        .add {
            width: 100%;
        }

        .item-card {
            flex-direction: column;
            align-items: stretch;
        }

        .item-card img {
            width: 100%;
            height: 200px;
        }

        .info {
            text-align: center;
        }

        .info h2 {
            font-size: 22px;
        }

        .actions {
            width: 100%;
            flex-direction: column;
        }

        .edit,
        .delete {
            width: 100%;
        }
    }
</style>