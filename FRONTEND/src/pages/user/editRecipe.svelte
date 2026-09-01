<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    // Récupérer l'ID de la recette depuis l'URL
    let recipeId = null;
    let title = "";
    let description = "";
    let categoryId = "";
    let preparation = "";
    let cooking = "";
    let servings = "";
    let ingredients = "";
    let instructions = "";
    let categories = [];
    let medias = [];
    let mediaId = "";
    let message = "";
    let loading = true;

    onMount(() => {
        // Extraire l'ID de l'URL
        const hash = window.location.hash;
        const match = hash.match(/#\/user\/editRecipe\/(\d+)/);
        recipeId = match ? match[1] : null;

        if (!recipeId) {
            message = "ID de recette manquant.";
            loading = false;
            return;
        }

        loadRecipeData();
        loadSelectData();
    });

    async function loadRecipeData() {
        const token = localStorage.getItem("token");
        if (!token || !recipeId) {
            loading = false;
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/recipes/${recipeId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!response.ok) {
                throw new Error("Recette non trouvée");
            }

            const recipe = await response.json();
            title = recipe.title || "";
            description = recipe.description || "";
            categoryId = recipe.category_id || "";
            mediaId = recipe.media_id || "";
            preparation = recipe.prep_time || "";
            cooking = recipe.cook_time || "";
            servings = recipe.servings || "";
            ingredients = recipe.ingredients || "";
            instructions = recipe.instructions || "";
        } catch (error) {
            console.error(error);
            message = "Impossible de charger la recette.";
        } finally {
            loading = false;
        }
    }

    async function loadSelectData() {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const [categoriesResponse, mediaResponse] = await Promise.all([
                fetch(`${API_URL}/api/categories`, {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                fetch(`${API_URL}/api/media`, {
                    headers: { Authorization: `Bearer ${token}` },
                }),
            ]);

            const categoriesData = await categoriesResponse.json();
            const mediaData = await mediaResponse.json();

            categories = Array.isArray(categoriesData) ? categoriesData : [];
            medias = Array.isArray(mediaData) ? mediaData : [];
        } catch (error) {
            console.error(error);
        }
    }

    async function updateRecipe() {
        message = "";

        const token = localStorage.getItem("token");
        if (!token || !recipeId) {
            message = "Vous devez être connecté.";
            return;
        }

        if (
            !title.trim() ||
            !categoryId ||
            !mediaId ||
            !preparation ||
            !cooking ||
            !servings ||
            !ingredients.trim() ||
            !instructions.trim()
        ) {
            message = "Veuillez remplir tous les champs obligatoires.";
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/recipes/${recipeId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: title.trim(),
                    description: description.trim(),
                    ingredients: ingredients.trim(),
                    instructions: instructions.trim(),
                    prep_time: Number(preparation),
                    cook_time: Number(cooking),
                    servings: Number(servings),
                    category_id: Number(categoryId),
                    media_id: Number(mediaId),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erreur lors de la modification.");
            }

            message = "Recette modifiée avec succès.";

            setTimeout(() => {
                window.location.hash = "#/user/profile";
            }, 1500);
        } catch (error) {
            console.error(error);
            message = error.message || "Impossible de modifier la recette.";
        }
    }
</script>

<main class="edit-recipe-page">
    <h1>✏️ MODIFIER MA RECETTE</h1>

    <p class="subtitle">
        Modifiez les informations de votre recette
    </p>

    <section class="recipe-container">

        <form
            class="recipe-form"
            on:submit|preventDefault={updateRecipe}
        >

            <!-- TITRE -->

            <label for="title">
                Titre de la recette
            </label>

            <input
                type="text"
                id="title"
                name="title"
                bind:value={title}
                required
            />

            <!-- FILM OU SERIE -->

            <label for="mediaId">
                Film ou série associé
            </label>

            <select
                id="mediaId"
                name="mediaId"
                bind:value={mediaId}
                required
            >
                <option value="">-- Sélectionner un film/série --</option>
                {#each medias as media}
                    <option value={media.id}>
                        {media.title}
                    </option>
                {/each}
            </select>

            <!-- CATEGORIE -->

            <label for="categoryId">
                Catégorie
            </label>

            <select
                id="categoryId"
                name="categoryId"
                bind:value={categoryId}
                required
            >
                <option value="">-- Sélectionner une catégorie --</option>
                {#each categories as category}
                    <option value={category.id}>
                        {category.name}
                    </option>
                {/each}
            </select>

            <!-- IMAGE -->

            <label for="image">
                Modifier l'image
            </label>

            <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
            />

            <!-- TEMPS -->

            <div class="time-container">

                <div>
                    <label for="preparation">
                        Temps de préparation
                    </label>

                    <input
                        type="number"
                        id="preparation"
                        name="preparation"
                        bind:value={preparation}
                        min="1"
                        required
                    />
                </div>

                <div>
                    <label for="cooking">
                        Temps de cuisson
                    </label>

                    <input
                        type="number"
                        id="cooking"
                        name="cooking"
                        bind:value={cooking}
                        min="0"
                        required
                    />
                </div>

            </div>

            <!-- PERSONNES -->

            <label for="servings">
                Nombre de personnes
            </label>

            <input
                type="number"
                id="servings"
                name="servings"
                bind:value={servings}
                min="1"
                required
            />

            <!-- INGREDIENTS -->

            <label for="ingredients">
                Ingrédients
            </label>

            <textarea
                id="ingredients"
                name="ingredients"
                bind:value={ingredients}
                required
            ></textarea>

            <!-- PREPARATION -->

            <label for="instructions">
                Étapes de préparation
            </label>

            <textarea
                id="instructions"
                name="instructions"
                bind:value={instructions}
                required
            ></textarea>

            <!-- DESCRIPTION -->

            <label for="description">
                Description
            </label>

            <textarea
                id="description"
                name="description"
                bind:value={description}
            ></textarea>

            <!-- MESSAGE -->

            {#if message}
                <p class="message">
                    {message}
                </p>
            {/if}

            <!-- BOUTONS -->

            <div class="buttons">

                <button
                    class="submit"
                    type="submit"
                >
                    ENREGISTRER LES MODIFICATIONS
                </button>

                <a
                    class="cancel"
                    href="#/user/profile"
                >
                    ANNULER
                </a>

            </div>

        </form>

    </section>

</main>

<style>
    .edit-recipe-page {
        width: 90%;
        max-width: 800px;

        margin: 40px auto;
    }

    /* TITRE */

    .edit-recipe-page h1 {
        color: #d4af37;

        text-align: center;

        margin-bottom: 10px;
    }

    .subtitle {
        color: white;

        text-align: center;

        margin-bottom: 35px;
    }

    /* CONTENEUR */

    .recipe-container {
        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        padding: 25px;
    }

    /* FORMULAIRE */

    .recipe-form {
        display: flex;
        flex-direction: column;
    }

    .recipe-form label {
        color: white;

        margin-top: 15px;
        margin-bottom: 7px;
    }

    .recipe-form input,
    .recipe-form select,
    .recipe-form textarea {
        width: 100%;

        padding: 12px;

        background-color: #111526;
        color: white;

        border: 1px solid #3d3d48;
        border-radius: 5px;

        outline: none;

        box-sizing: border-box;
    }

    .recipe-form input:focus,
    .recipe-form select:focus,
    .recipe-form textarea:focus {
        border-color: #d4af37;
    }

    /* TEXTAREA */

    .recipe-form textarea {
        min-height: 130px;

        resize: vertical;
    }

    /* TEMPS */

    .time-container {
        display: grid;

        grid-template-columns: repeat(2, 1fr);

        gap: 20px;
    }

    .time-container div {
        display: flex;
        flex-direction: column;
    }

    /* MESSAGE */

    .message {
        margin: 20px 0 0;

        color: #d4af37;

        text-align: center;
        font-weight: bold;
    }

    /* BOUTONS */

    .buttons {
        display: flex;

        gap: 10px;

        margin-top: 25px;
    }

    .submit,
    .cancel {
        padding: 12px 20px;

        border-radius: 4px;

        font-weight: bold;

        text-align: center;

        box-sizing: border-box;
    }

    .submit {
        background-color: #d4af37;
        color: black;

        border: none;

        cursor: pointer;
    }

    .submit:hover {
        background-color: #f0c94d;
    }

    .cancel {
        background-color: #e24d4d;
        color: white;

        text-decoration: none;
    }

    .cancel:hover {
        background-color: #d13f3f;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .edit-recipe-page {
            width: 94%;
        }

        .recipe-container {
            padding: 20px;
        }
    }

    /* MOBILE */

    @media (max-width: 375px) {
        .edit-recipe-page {
            width: 95%;

            margin: 25px auto;
        }

        .edit-recipe-page h1 {
            font-size: 27px;
        }

        .subtitle {
            font-size: 14px;
        }

        .recipe-container {
            padding: 15px;
        }

        .time-container {
            grid-template-columns: 1fr;

            gap: 0;
        }

        .recipe-form input,
        .recipe-form select,
        .recipe-form textarea {
            font-size: 16px;
        }

        .buttons {
            flex-direction: column;
        }

        .submit,
        .cancel {
            width: 100%;
        }
    }
</style>