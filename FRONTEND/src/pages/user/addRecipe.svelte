<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    let title = "";
    let movie = "";
    let categoryId = "";
    let preparation = "";
    let cooking = "";
    let servings = "";
    let ingredients = "";
    let instructions = "";
    let description = "";
    let message = "";
    let categories = [];
    let medias = [];
    let mediaId = "";

    async function loadSelectData() {
        const token = localStorage.getItem("token");
        if (!token) {
            message = "Vous devez être connecté pour ajouter une recette.";
            return;
        }

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
            message = "Impossible de charger les catégories et médias.";
        }
    }

    async function addRecipe() {
        message = "";

        const token = localStorage.getItem("token");

        if (!token) {
            message = "Vous devez être connecté pour ajouter une recette.";
            window.location.hash = "#/login";
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
            const response = await fetch(`${API_URL}/api/recipes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: title.trim(),
                    description: description.trim(),
                    ingredients: ingredients.trim(),
                    instructions: instructions.trim(),
                    image_url: "",
                    prep_time: Number(preparation),
                    cook_time: Number(cooking),
                    servings: Number(servings),
                    category_id: Number(categoryId),
                    media_id: Number(mediaId),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erreur lors de l'ajout de la recette.");
            }

            message = "Recette ajoutée avec succès.";
            
            // Réinitialiser le formulaire
            title = "";
            movie = "";
            categoryId = "";
            mediaId = "";
            preparation = "";
            cooking = "";
            servings = "";
            ingredients = "";
            instructions = "";
            description = "";

            setTimeout(() => {
                window.location.hash = "#/user/profile";
            }, 1500);
        } catch (error) {
            console.error(error);
            message = error.message || "Impossible d'ajouter la recette.";
        }
    }

    onMount(() => {
        loadSelectData();
    });
</script>

<main class="add-recipe-page">

    <h1>🍽️ AJOUTER UNE RECETTE</h1>

    <p class="subtitle">
        Créez une recette inspirée de votre film ou série préféré
    </p>

    <section class="recipe-container">

        <form
            class="recipe-form"
            on:submit|preventDefault={addRecipe}
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
                placeholder="Ex : Tagliatelles crémeuses aux champignons"
                required
            />

            <!-- FILM OU SERIE -->

            <label for="movie">
                Film ou série associé
            </label>

            <select
                id="movie"
                name="movie"
                bind:value={mediaId}
                required
            >
                <option value="" disabled>
                    Choisissez un film ou une série
                </option>
                {#each medias as media}
                    <option value={media.id}>{media.title}</option>
                {/each}
            </select>

            <!-- CATEGORIE -->

            <label for="category">
                Catégorie
            </label>

            <select
                id="category"
                name="category"
                bind:value={categoryId}
                required
            >
                <option value="" disabled>
                    Choisissez une catégorie
                </option>
                {#each categories as category}
                    <option value={category.id}>{category.name}</option>
                {/each}
            </select>

            <!-- IMAGE -->

            <label for="image">
                Image de la recette
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
                        placeholder="Minutes"
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
                        placeholder="Minutes"
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
                placeholder="Ex : 4"
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
                placeholder="Ex :
400 g de tagliatelles
250 g de champignons
20 cl de crème fraîche..."
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
                placeholder="Décrivez les différentes étapes de votre recette..."
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
                placeholder="Présentez votre recette et son lien avec le film ou la série..."
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
                    AJOUTER LA RECETTE
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

    .add-recipe-page {
        width: 90%;
        max-width: 800px;

        margin: 40px auto;
    }

    /* TITRE */

    .add-recipe-page h1 {
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

        .add-recipe-page {
            width: 94%;
        }

        .recipe-container {
            padding: 20px;
        }

    }

    /* MOBILE */

    @media (max-width: 375px) {

        .add-recipe-page {
            width: 95%;

            margin: 25px auto;
        }

        .add-recipe-page h1 {
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