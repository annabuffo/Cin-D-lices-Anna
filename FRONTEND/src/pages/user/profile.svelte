<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    let username = "Utilisateur";
    let email = "";
    let role = "user";

    let recipes = [];
    let loading = true;

    let recipeToDelete = null;
    let deleteError = "";

    function getUser() {
        try {
            const user = JSON.parse(localStorage.getItem("user") || "{}");

            username = user.username || "Utilisateur";

            email = user.email || "";

            role = user.role || "user";

            return user;
        } catch (error) {
            console.error(error);

            return {};
        }
    }

    function getInitial() {
        return username ? username.charAt(0).toUpperCase() : "U";
    }

    async function loadRecipes() {
        const token = localStorage.getItem("token");

        const user = getUser();

        if (!token || !user.id) {
            loading = false;
            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/api/recipes?userId=${user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            if (!response.ok) {
                throw new Error("Erreur chargement recettes");
            }

            const data = await response.json();

            recipes = Array.isArray(data) ? data : [];
        } catch (error) {
            console.error(error);

            recipes = [];
        } finally {
            loading = false;
        }
    }

    function askDelete(recipe) {
        recipeToDelete = recipe;
        deleteError = "";
    }

    function cancelDelete() {
        recipeToDelete = null;
        deleteError = "";
    }

    async function deleteRecipe() {
        console.log("DELETE lancé", recipeToDelete);

        if (!recipeToDelete) {
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/api/recipes/${recipeToDelete.id}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            if (!response.ok) {
                throw new Error("Erreur suppression");
            }

            recipes = recipes.filter(
                (recipe) => Number(recipe.id) !== Number(recipeToDelete.id),
            );

            recipeToDelete = null;
        } catch (error) {
            console.error(error);

            deleteError = "Impossible de supprimer la recette.";
        }
    }

    onMount(() => {
        loadRecipes();
    });
</script>

<main class="profile-page">
    <section class="profile-card">
        <div class="avatar">
            {getInitial()}
        </div>

        <div class="profile-content">
            <h1>MON PROFIL</h1>

            <div class="user-info">
                <p>
                    <strong>Nom :</strong>
                    {username}
                </p>

                <p>
                    <strong>Email :</strong>
                    {email || "Non renseigné"}
                </p>

                <p>
                    <strong>Rôle :</strong>
                    {role}
                </p>
            </div>

            <a class="add-button" href="#/user/addRecipe">
                + AJOUTER UNE RECETTE
            </a>
        </div>
    </section>

    <section class="recipes-section">
        <h2>MES RECETTES</h2>

        {#if loading}
            <div class="message">Chargement...</div>
        {:else if recipes.length === 0}
            <div class="message">Vous n'avez encore ajouté aucune recette.</div>
        {:else}
            <div class="recipes-grid">
                {#each recipes as recipe}
                    <article class="recipe-card">
                        {#if recipe.image_url}
                            <img src={recipe.image_url} alt={recipe.title} />
                        {:else if recipe.media?.image_url}
                            <img
                                src={recipe.media.image_url}
                                alt={recipe.media.title || recipe.title}
                            />
                        {:else}
                            <div class="no-image">
                                🍽️
                                <span>Aucune image</span>
                            </div>
                        {/if}

                        <div class="recipe-content">
                            <h3>
                                {recipe.title}
                            </h3>

                            <p class="movie">
                                🎬
                                {recipe.media?.title || "Film / Série"}
                            </p>

                            <div class="buttons">
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
                                    on:click={() => askDelete(recipe)}
                                >
                                    SUPPRIMER
                                </button>
                            </div>
                        </div>
                    </article>
                {/each}
            </div>
        {/if}
    </section>
</main>

{#if recipeToDelete}
    <div class="modal-overlay">
        <div class="delete-modal">
            <div class="modal-icon">🗑️</div>

            <h2>SUPPRIMER LA RECETTE ?</h2>

            <p>
                Voulez-vous vraiment supprimer
                <strong>
                    {recipeToDelete.title}
                </strong>
                ?
            </p>

            <p class="warning">Cette action est définitive.</p>

            {#if deleteError}
                <p class="delete-error">
                    {deleteError}
                </p>
            {/if}

            <div class="modal-buttons">
                <button
                    class="cancel-delete"
                    type="button"
                    on:click={cancelDelete}
                >
                    ANNULER
                </button>

                <button
                    class="confirm-delete"
                    type="button"
                    on:click={deleteRecipe}
                >
                    SUPPRIMER
                </button>
            </div>
        </div>
    </div>
{/if}

<style>
    .profile-page {
        width: 90%;
        max-width: 1100px;

        margin: 45px auto 70px;
    }

    .profile-card {
        display: flex;
        align-items: center;

        gap: 30px;

        padding: 35px;

        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 10px;
    }

    .avatar {
        display: flex;

        align-items: center;
        justify-content: center;

        flex-shrink: 0;

        width: 95px;
        height: 95px;

        background-color: #f34268;

        border-radius: 50%;

        color: white;

        font-size: 38px;
        font-weight: bold;
    }

    .profile-content {
        flex: 1;
    }

    .profile-content h1 {
        margin: 0 0 22px;

        color: #d4af37;

        font-size: 28px;
    }

    .user-info {
        margin-bottom: 25px;
    }

    .user-info p {
        margin: 10px 0;

        color: white;

        font-size: 16px;
    }

    .user-info strong {
        color: #d4af37;
    }

    .add-button {
        display: inline-block;

        padding: 13px 20px;

        background-color: #d4af37;

        border-radius: 5px;

        color: black;

        text-decoration: none;

        font-weight: bold;

        transition: 0.2s;
    }

    .add-button:hover {
        background-color: #f0ca45;

        transform: translateY(-1px);
    }

    .recipes-section {
        margin-top: 45px;
    }

    .recipes-section h2 {
        margin-bottom: 25px;

        color: white;

        font-size: 24px;
    }

    .recipes-grid {
        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 25px;
    }

    .recipe-card {
        overflow: hidden;

        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 8px;

        transition: 0.2s;
    }

    .recipe-card:hover {
        transform: translateY(-3px);
    }

    .recipe-card img {
        display: block;

        width: 100%;
        height: 210px;

        object-fit: cover;
    }

    .no-image {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        gap: 10px;

        height: 210px;

        background-color: #111526;

        color: #d4af37;

        font-size: 40px;
    }

    .no-image span {
        color: #aaa;

        font-size: 14px;
    }

    .recipe-content {
        padding: 20px;
    }

    .recipe-content h3 {
        margin: 0 0 12px;

        color: #d4af37;

        font-size: 19px;
    }

    .movie {
        margin-bottom: 20px;

        color: #ccc;
    }

    .buttons {
        display: flex;

        flex-wrap: wrap;

        gap: 8px;
    }

    .buttons a,
    .buttons button {
        padding: 9px 12px;

        border: none;
        border-radius: 4px;

        cursor: pointer;

        text-decoration: none;

        font-size: 12px;
        font-weight: bold;
    }

    .view {
        background-color: #d4af37;

        color: black;
    }

    .edit {
        background-color: #07558d;

        color: white;
    }

    .delete {
        background-color: #a82424;

        color: white;
    }

    .view:hover {
        background-color: #f0ca45;
    }

    .edit:hover {
        background-color: #0872bd;
    }

    .delete:hover {
        background-color: #cf3030;
    }

    .message {
        display: flex;

        align-items: center;
        justify-content: center;

        min-height: 130px;

        padding: 25px;

        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 8px;

        color: #a9a9c5;

        text-align: center;
    }

    /* MODALE SUPPRESSION */

    .modal-overlay {
        position: fixed;

        inset: 0;

        display: flex;

        align-items: center;
        justify-content: center;

        padding: 20px;

        background-color: rgba(0, 0, 0, 0.78);

        z-index: 9999;
    }

    .delete-modal {
        width: 90%;
        max-width: 430px;

        padding: 30px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 10px;

        color: white;

        text-align: center;

        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
    }

    .modal-icon {
        margin-bottom: 12px;

        font-size: 38px;
    }

    .delete-modal h2 {
        margin: 0 0 18px;

        color: #d4af37;

        font-size: 22px;
    }

    .delete-modal p {
        line-height: 1.6;
    }

    .delete-modal strong {
        color: #d4af37;
    }

    .warning {
        color: #aaa;

        font-size: 14px;
    }

    .delete-error {
        color: #ff6666;
    }

    .modal-buttons {
        display: flex;

        justify-content: center;

        gap: 12px;

        margin-top: 25px;
    }

    .modal-buttons button {
        padding: 11px 20px;

        border: none;
        border-radius: 5px;

        cursor: pointer;

        font-weight: bold;
    }

    .cancel-delete {
        background-color: #d4af37;

        color: black;
    }

    .confirm-delete {
        background-color: #a82424;

        color: white;
    }

    .cancel-delete:hover {
        background-color: #f0ca45;
    }

    .confirm-delete:hover {
        background-color: #cf3030;
    }

    @media (max-width: 850px) {
        .recipes-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .profile-page {
            width: 94%;

            margin-top: 25px;
        }

        .profile-card {
            flex-direction: column;

            align-items: flex-start;

            padding: 25px;
        }

        .avatar {
            width: 80px;
            height: 80px;

            font-size: 32px;
        }

        .profile-content {
            width: 100%;
        }

        .recipes-grid {
            grid-template-columns: 1fr;
        }

        .buttons {
            flex-direction: column;
        }

        .buttons a,
        .buttons button {
            width: 100%;

            box-sizing: border-box;

            text-align: center;
        }

        .add-button {
            box-sizing: border-box;

            width: 100%;

            text-align: center;
        }

        .modal-buttons {
            flex-direction: column;
        }

        .modal-buttons button {
            width: 100%;
        }
    }
</style>
