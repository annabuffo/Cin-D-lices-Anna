<script>
    let recipes = [
        {
            id: "super-mario",
            title: "Tagliatelles crémeuses aux champignons",
            movie: "Super Mario Bros",
            category: "Plat principal",
            author: "Anna",
            image: "/img-card-sct-1/champignon.jpg",
        },
        {
            id: "ratatouille",
            title: "Ratatouille aux légumes",
            movie: "Ratatouille",
            category: "Plat principal",
            author: "Admin",
            image: "/img-card-sct-1/ratatouille.jpg",
        },
    ];

    function deleteRecipe(id = "") {
        const confirmation = window.confirm(
            "Voulez-vous vraiment supprimer cette recette ?"
        );

        if (confirmation) {
            recipes = recipes.filter(
                (recipe) => recipe.id !== id
            );
        }
    }
</script>

<main class="admin-page">
    <h1>GESTION DES RECETTES</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">

        <a
            class="add"
            href="#/user/addRecipe"
        >
            AJOUTER UNE RECETTE
        </a>

        {#if recipes.length === 0}

            <p class="empty-message">
                Aucune recette disponible.
            </p>

        {:else}

            {#each recipes as recipe}

                <div class="item-card">

                    <img
                        src={recipe.image}
                        alt={recipe.title}
                    />

                    <div class="info">
                        <h2>
                            {recipe.title}
                        </h2>

                        <p>
                            Film : {recipe.movie}
                        </p>

                        <p>
                            Catégorie : {recipe.category}
                        </p>

                        <p>
                            Auteur : {recipe.author}
                        </p>
                    </div>

                    <div class="actions">

                        <a
                            class="view"
                            href={`#/user/recipe/${recipe.id}`}
                        >
                            VOIR
                        </a>

                        <a
                            class="edit"
                            href={`#/user/editRecipe/${recipe.id}`}
                        >
                            MODIFIER
                        </a>

                            <button
                                class="delete"
                                type="button"
                                on:click={() => deleteRecipe(recipe.id)}
                            >
                                SUPPRIMER
                            </button>

                    </div>

                </div>

            {/each}

        {/if}

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

    /* RETOUR */

    .back {
        display: inline-block;

        color: #d4af37;

        margin-bottom: 25px;

        text-decoration: none;
    }

    .back:hover {
        text-decoration: underline;
    }

    /* CONTENEUR */

    .admin-container {
        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 8px;

        padding: 20px;
    }

    /* AJOUT */

    .add {
        display: inline-block;

        background-color: #d4af37;
        color: black;

        border-radius: 4px;

        padding: 10px 15px;
        margin-bottom: 20px;

        text-decoration: none;
        font-weight: bold;
    }

    .add:hover {
        background-color: #f0c94d;
    }

    /* CARTE */

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

    /* INFORMATIONS */

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

    /* ACTIONS */

    .actions {
        display: flex;

        gap: 10px;
    }

    .view,
    .edit,
    .delete {
        padding: 10px 15px;

        border: none;
        border-radius: 4px;

        font-weight: bold;

        cursor: pointer;

        text-decoration: none;

        text-align: center;
    }

    .view {
        background-color: #07558d;
        color: white;
    }

    .edit {
        background-color: #d4af37;
        color: black;
    }

    .delete {
        background-color: #e24d4d;
        color: white;
    }

    .delete:hover {
        background-color: #d13f3f;
    }

    /* LISTE VIDE */

    .empty-message {
        color: white;

        text-align: center;

        padding: 25px 15px;

        background-color: #111526;

        border-radius: 6px;
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

            text-align: center;

            box-sizing: border-box;
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

        .view,
        .edit,
        .delete {
            width: 100%;

            box-sizing: border-box;
        }
    }
</style>