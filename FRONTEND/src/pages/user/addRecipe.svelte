<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    let title = "";
    let categoryId = "";
    let mediaId = "";
    let prepTime = "";
    let cookTime = "";
    let ingredients = "";
    let instructions = "";
    let description = "";

    let categories = [];
    let medias = [];
    let message = "";

    async function loadData() {
        try {
            const categoriesResponse = await fetch(`${API_URL}/api/categories`);

            const mediasResponse = await fetch(`${API_URL}/api/media`);

            if (!categoriesResponse.ok || !mediasResponse.ok) {
                throw new Error("Erreur lors du chargement");
            }

            categories = await categoriesResponse.json();
            medias = await mediasResponse.json();

            console.log("Catégories :", categories);
            console.log("Médias :", medias);
        } catch (error) {
            console.error("Erreur loadData :", error);
            message = "Impossible de charger les catégories et les médias.";
        }
    }

    async function addRecipe() {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.hash = "#/login";
            return;
        }

        if (
            !title ||
            !categoryId ||
            !mediaId ||
            !ingredients ||
            !instructions
        ) {
            message = "Veuillez remplir les champs obligatoires.";

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
                    title,
                    description,
                    ingredients,
                    instructions,
                    prep_time: prepTime ? Number(prepTime) : null,

                    cook_time: cookTime ? Number(cookTime) : null,

                    category_id: Number(categoryId),

                    media_id: Number(mediaId),

                    image_url: getSelectedMediaImage(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                message = data.message || "Erreur lors de l'ajout.";

                return;
            }

            window.location.hash = "#/user/profile";
        } catch (error) {
            console.error(error);

            message = "Impossible d'ajouter la recette.";
        }
    }

    onMount(() => {
        loadData();
    });

    function getSelectedMediaImage() {
        const selectedMedia = medias.find(
            (media) => Number(media.id) === Number(mediaId),
        );

        return selectedMedia?.image_url || "";
    }
</script>

<main class="add-recipe-page">
    <h1>🍽️ AJOUTER UNE RECETTE</h1>

    <section class="recipe-container">
        <form class="recipe-form" on:submit|preventDefault={addRecipe}>
            <label for="title"> Titre </label>

            <input id="title" type="text" bind:value={title} required />

            <label for="media"> Film ou série </label>

            <select id="media" bind:value={mediaId} required>
                <option value=""> Choisissez un film ou une série </option>

                {#each medias as media}
                    <option value={media.id}>
                        {media.title}
                    </option>
                {/each}
            </select>

            <label for="category"> Catégorie </label>

            <select id="category" bind:value={categoryId} required>
                <option value=""> Choisissez une catégorie </option>

                {#each categories as category}
                    <option value={category.id}>
                        {category.name}
                    </option>
                {/each}
            </select>

            <div class="time-container">
                <div>
                    <label for="prepTime"> Préparation </label>

                    <input
                        id="prepTime"
                        type="number"
                        bind:value={prepTime}
                        placeholder="Minutes"
                        min="0"
                    />
                </div>

                <div>
                    <label for="cookTime"> Cuisson </label>

                    <input
                        id="cookTime"
                        type="number"
                        bind:value={cookTime}
                        placeholder="Minutes"
                        min="0"
                    />
                </div>
            </div>

            <label for="ingredients"> Ingrédients </label>

            <textarea id="ingredients" bind:value={ingredients} required
            ></textarea>

            <label for="instructions"> Instructions </label>

            <textarea id="instructions" bind:value={instructions} required
            ></textarea>

            <label for="description"> Description </label>

            <textarea id="description" bind:value={description}></textarea>

            {#if message}
                <p class="message">
                    {message}
                </p>
            {/if}

            <div class="buttons">
                <button class="submit" type="submit"> AJOUTER </button>

                <a class="cancel" href="#/user/profile"> ANNULER </a>
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

    h1 {
        color: #d4af37;

        text-align: center;

        margin-bottom: 30px;
    }

    .recipe-container {
        padding: 25px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;
    }

    .recipe-form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-top: 15px;
        margin-bottom: 6px;

        color: white;
    }

    input,
    select,
    textarea {
        width: 100%;

        padding: 12px;

        background-color: #111526;
        color: white;

        border: 1px solid #3d3d48;
        border-radius: 5px;

        box-sizing: border-box;
    }

    textarea {
        min-height: 120px;

        resize: vertical;
    }

    .time-container {
        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 20px;
    }

    .time-container div {
        display: flex;
        flex-direction: column;
    }

    .message {
        margin-top: 20px;

        color: #d4af37;

        text-align: center;
    }

    .buttons {
        display: flex;

        gap: 10px;

        margin-top: 25px;
    }

    .submit,
    .cancel {
        padding: 12px 20px;

        border: none;
        border-radius: 4px;

        font-weight: bold;

        text-decoration: none;
        text-align: center;
    }

    .submit {
        background-color: #d4af37;

        color: black;

        cursor: pointer;
    }

    .cancel {
        background-color: #e24d4d;

        color: white;
    }

    @media (max-width: 600px) {
        .time-container {
            grid-template-columns: 1fr;
        }

        .buttons {
            flex-direction: column;
        }
    }
</style>
