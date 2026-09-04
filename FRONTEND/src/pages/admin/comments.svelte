<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let comments = [];
    let loading = true;
    let error = "";

    let showDeleteModal = false;
    let commentToDelete = null;

    function getToken() {
        return localStorage.getItem("token");
    }

    async function loadComments() {
        loading = true;
        error = "";

        const token = getToken();

        try {
            const response = await fetch(
                `${API_URL}/api/comments`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Impossible de charger les commentaires."
                );
            }

            const data =
                await response.json();

            comments =
                Array.isArray(data)
                    ? data
                    : [];

        } catch (err) {
            console.error(err);

            error =
                "Impossible de charger les commentaires.";

        } finally {
            loading = false;
        }
    }

    function askDelete(comment) {
        commentToDelete = comment;

        showDeleteModal = true;
    }

    function cancelDelete() {
        commentToDelete = null;

        showDeleteModal = false;
    }

    async function confirmDelete() {
        if (!commentToDelete) {
            return;
        }

        const token = getToken();

        try {
            const response = await fetch(
                `${API_URL}/api/comments/${commentToDelete.id}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Impossible de supprimer le commentaire."
                );
            }

            comments =
                comments.filter(
                    (comment) =>
                        comment.id !==
                        commentToDelete.id
                );

            cancelDelete();

        } catch (err) {
            console.error(err);

            error =
                "Impossible de supprimer le commentaire.";

            cancelDelete();
        }
    }

    onMount(() => {
        loadComments();
    });
</script>

<main class="admin-page">
    <h1>
        MODÉRATION DES COMMENTAIRES
    </h1>

    <a
        class="back"
        href="#/admin"
    >
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">

        {#if error}

            <p class="error-message">
                {error}
            </p>

        {/if}

        {#if loading}

            <p class="empty-message">
                Chargement des commentaires...
            </p>

        {:else if comments.length === 0}

            <p class="empty-message">
                Aucun commentaire à modérer.
            </p>

        {:else}

            {#each comments as comment}

                <div class="item-card">

                    <div class="comment-info">

                        <h2>
                            Commentaire de
                            {comment.author?.username ||
                            "Utilisateur"}
                        </h2>

                        <p class="recipe">
                            Recette :
                            {comment.recipe?.title ||
                            "Recette inconnue"}
                        </p>

                        <p>
                            {comment.content}
                        </p>

                    </div>

                    <button
                        class="delete"
                        type="button"
                        onclick={() =>
                            askDelete(comment)}
                    >
                        SUPPRIMER
                    </button>

                </div>

            {/each}

        {/if}

    </section>
</main>

{#if showDeleteModal}

    <div class="modal-overlay">

        <div class="modal">

            <h2>
                SUPPRIMER LE COMMENTAIRE
            </h2>

            <p>
                Voulez-vous vraiment supprimer
                le commentaire de
                <strong>
                    {commentToDelete?.author?.username ||
                    "cet utilisateur"}
                </strong>
                ?
            </p>

            <p class="recipe-modal">
                Recette :
                {commentToDelete?.recipe?.title ||
                "Recette inconnue"}
            </p>

            {#if commentToDelete?.content}

                <div class="comment-preview">
                    “{commentToDelete.content}”
                </div>

            {/if}

            <p class="warning">
                Cette action est irréversible.
            </p>

            <div class="modal-actions">

                <button
                    class="cancel-button"
                    type="button"
                    onclick={cancelDelete}
                >
                    ANNULER
                </button>

                <button
                    class="delete-confirm-button"
                    type="button"
                    onclick={confirmDelete}
                >
                    SUPPRIMER
                </button>

            </div>

        </div>

    </div>

{/if}

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

    .empty-message {
        color: white;
        text-align: center;
        padding: 25px 15px;
        background-color: #111526;
        border-radius: 6px;
    }

    .error-message {
        padding: 12px;
        margin-bottom: 15px;
        background-color: #351111;
        border: 1px solid #ff5c5c;
        border-radius: 5px;
        color: #ff8a8a;
    }

    .modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 1000;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 20px;

        background-color:
            rgba(0, 0, 0, 0.75);
    }

    .modal {
        width: 100%;
        max-width: 500px;

        padding: 28px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 10px;

        box-shadow:
            0 15px 40px
            rgba(0, 0, 0, 0.7);
    }

    .modal h2 {
        margin-top: 0;
        margin-bottom: 25px;

        color: #d4af37;

        text-align: center;
    }

    .modal p {
        color: white;
        text-align: center;
        line-height: 1.6;
    }

    .modal strong {
        color: #d4af37;
    }

    .recipe-modal {
        color: #d4af37 !important;
    }

    .comment-preview {
        margin: 20px 0;
        padding: 15px;

        background-color: #111526;

        border-left: 3px solid #d4af37;
        border-radius: 4px;

        color: white;
        font-style: italic;
        line-height: 1.5;
    }

    .warning {
        color: #ff7777 !important;
        font-weight: bold;
    }

    .modal-actions {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-top: 25px;
    }

    .modal-actions button {
        min-width: 120px;
        padding: 11px 18px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    .cancel-button {
        background-color: transparent;
        border: 1px solid #d4af37;
        color: #d4af37;
    }

    .cancel-button:hover {
        background-color: #d4af37;
        color: black;
    }

    .delete-confirm-button {
        background-color: #a51919;
        border: 1px solid #ff5c5c;
        color: white;
    }

    .delete-confirm-button:hover {
        background-color: #c62828;
    }

    @media (max-width: 768px) {
        .admin-page {
            width: 94%;
        }

        .item-card {
            align-items: flex-start;
        }
    }

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

        .modal {
            padding: 22px;
        }

        .modal-actions {
            flex-direction: column;
        }

        .modal-actions button {
            width: 100%;
        }
    }
</style>