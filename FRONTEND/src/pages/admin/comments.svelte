<script>
    let comments = [
        {
            id: "comment-1",
            author: "Anna",
            recipe: "Tagliatelles crémeuses aux champignons",
            content: "Super recette, très facile à réaliser !",
        },
        {
            id: "comment-2",
            author: "User01",
            recipe: "Ratatouille aux légumes",
            content: "Très bonne recette.",
        },
        {
            id: "comment-3",
            author: "User02",
            recipe: "Poisson Rôti et Légumes au Four",
            content: "Excellent !",
        },
        {
            id: "comment-4",
            author: "User03",
            recipe: "Poulet Rôti aux Herbes",
            content: "Très bon !",
        },
    ];

    function deleteComment(id = "") {
        const confirmation = window.confirm(
            "Voulez-vous vraiment supprimer ce commentaire ?"
        );

        if (confirmation) {
            comments = comments.filter(
                (comment) => comment.id !== id
            );
        }
    }
</script>

<main class="admin-page">
    <h1>MODÉRATION DES COMMENTAIRES</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">

        {#if comments.length === 0}

            <p class="empty-message">
                Aucun commentaire à modérer.
            </p>

        {:else}

            {#each comments as comment}

                <div class="item-card">

                    <div class="comment-info">

                        <h2>
                            Commentaire de {comment.author}
                        </h2>

                        <p class="recipe">
                            Recette : {comment.recipe}
                        </p>

                        <p>
                            {comment.content}
                        </p>

                    </div>

                    <button
                        class="delete"
                        type="button"
                        onclick={() => deleteComment(comment.id)}
                    >
                        SUPPRIMER
                    </button>

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

    /* TITRE */

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

    /* COMMENTAIRES */

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

    .comment-info {
        flex: 1;
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

    /* SUPPRESSION */

    .delete {
        background-color: #e24d4d;
        color: white;

        border: none;
        border-radius: 4px;

        padding: 10px 15px;

        cursor: pointer;
        font-weight: bold;
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

        .comment-info {
            text-align: center;
        }

        .delete {
            width: 100%;
        }
    }
</style>