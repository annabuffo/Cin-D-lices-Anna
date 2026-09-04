<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:3000";

    let recipes = [];

    let loading = true;
    let error = "";

    let recipeToDelete = null;

    async function loadRecipes() {
        try {
            loading = true;
            error = "";

            const response = await fetch(
                `${API_URL}/api/recipes`
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Impossible de récupérer les recettes."
                );
            }

            recipes = Array.isArray(data) ? data : [];
        } catch (err) {
            console.error(err);

            error =
                err.message ||
                "Erreur lors du chargement des recettes.";

            recipes = [];
        } finally {
            loading = false;
        }
    }

    function askDeleteRecipe(recipe) {
        recipeToDelete = recipe;
    }

    function cancelDelete() {
        recipeToDelete = null;
    }

    async function confirmDelete() {
        if (!recipeToDelete) {
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            window.location.hash = "#/login";
            return;
        }

        try {
            error = "";

            const response = await fetch(
                `${API_URL}/api/recipes/${recipeToDelete.id}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            let data = {};

            if (response.status !== 204) {
                data = await response.json();
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Impossible de supprimer cette recette."
                );
            }

            recipes = recipes.filter(
                (recipe) =>
                    recipe.id !== recipeToDelete.id
            );

            recipeToDelete = null;
        } catch (err) {
            console.error(err);

            error =
                err.message ||
                "Erreur lors de la suppression.";
        }
    }

    function getRecipeImage(recipe) {
        return (
            recipe.image_url ||
            recipe.media?.image_url ||
            ""
        );
    }

    onMount(() => {
        loadRecipes();
    });
</script>

<main class="admin-page">

    <h1>GESTION DES RECETTES</h1>

    <a
        class="back"
        href="#/admin"
    >
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">

        <a
            class="add"
            href="#/user/addRecipe"
        >
            AJOUTER UNE RECETTE
        </a>


        {#if loading}

            <p class="empty-message">
                Chargement des recettes...
            </p>


        {:else if error}

            <p class="error-message">
                {error}
            </p>


        {:else if recipes.length === 0}

            <p class="empty-message">
                Aucune recette disponible.
            </p>


        {:else}

            {#each recipes as recipe}

                <div class="item-card">

                    {#if getRecipeImage(recipe)}

                        <img
                            src={getRecipeImage(recipe)}
                            alt={recipe.title}
                        />

                    {:else}

                        <div class="no-image">
                            🍽️
                            <span>
                                Aucune image
                            </span>
                        </div>

                    {/if}


                    <div class="info">

                        <h2>
                            {recipe.title}
                        </h2>

                        <p>
                            Film / Série :
                            {recipe.media?.title || "Non renseigné"}
                        </p>

                        <p>
                            Catégorie :
                            {recipe.category?.name || "Sans catégorie"}
                        </p>

                        <p>
                            Auteur :
                            {recipe.author?.username || "Utilisateur"}
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
                            onclick={() => askDeleteRecipe(recipe)}
                        >
                            SUPPRIMER
                        </button>

                    </div>

                </div>

            {/each}

        {/if}

    </section>


    {#if recipeToDelete}

        <div class="modal-overlay">

            <div class="modal">

                <h2>
                    SUPPRIMER LA RECETTE ?
                </h2>

                <p>
                    Voulez-vous vraiment supprimer
                    <strong>
                        {recipeToDelete.title}
                    </strong>
                    ?
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
                        class="confirm-delete"
                        type="button"
                        onclick={confirmDelete}
                    >
                        SUPPRIMER
                    </button>

                </div>

            </div>

        </div>

    {/if}

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

    .item-card img,
    .no-image {
        width: 120px;
        height: 100px;

        flex-shrink: 0;

        border: 1px solid #d4af37;
        border-radius: 4px;
    }

    .item-card img {
        object-fit: cover;
    }

    .no-image {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        background-color: #060630;

        color: white;

        font-size: 25px;
    }

    .no-image span {
        margin-top: 5px;

        font-size: 12px;
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

    .view:hover {
        background-color: #064a7a;
    }

    .edit {
        background-color: #d4af37;
        color: black;
    }

    .edit:hover {
        background-color: #f0c94d;
    }

    .delete {
        background-color: #e24d4d;
        color: white;
    }

    .delete:hover {
        background-color: #d13f3f;
    }

    /* MESSAGES */

    .empty-message {
        color: white;

        text-align: center;

        padding: 25px 15px;

        background-color: #111526;

        border-radius: 6px;
    }

    .error-message {
        color: #ff8b8b;

        text-align: center;

        padding: 25px 15px;

        background-color: #111526;

        border-radius: 6px;
    }

    /* MODALE */

    .modal-overlay {
        position: fixed;

        inset: 0;

        background-color: rgba(0, 0, 0, 0.75);

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 1000;
    }

    .modal {
        width: 90%;
        max-width: 430px;

        background-color: #060630;

        border: 1px solid #d4af37;
        border-radius: 10px;

        padding: 30px;

        text-align: center;
    }

    .modal h2 {
        color: #d4af37;

        margin-top: 0;
        margin-bottom: 20px;
    }

    .modal p {
        color: white;

        margin-bottom: 25px;
    }

    .modal strong {
        color: #d4af37;
    }

    .modal-actions {
        display: flex;

        justify-content: center;

        gap: 15px;
    }

    .cancel-button,
    .confirm-delete {
        border: none;
        border-radius: 5px;

        padding: 11px 18px;

        font-weight: bold;

        cursor: pointer;
    }

    .cancel-button {
        background-color: #d4af37;
        color: black;
    }

    .cancel-button:hover {
        background-color: #f0c94d;
    }

    .confirm-delete {
        background-color: #e24d4d;
        color: white;
    }

    .confirm-delete:hover {
        background-color: #d13f3f;
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

        .item-card img,
        .no-image {
            width: 100%;
            height: 200px;

            box-sizing: border-box;
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

        .modal-actions {
            flex-direction: column;
        }

        .cancel-button,
        .confirm-delete {
            width: 100%;
        }
    }
</style>