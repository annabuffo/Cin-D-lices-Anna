<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let recipeId = "";

    let title = "";
    let description = "";
    let categoryId = "";
    let mediaId = "";
    let prepTime = "";
    let cookTime = "";
    let ingredients = "";
    let instructions = "";

    let categories = [];
    let medias = [];

    let message = "";
    let loading = true;


    function getRecipeId() {
        const parts =
            window.location.hash.split("/");

        recipeId =
            parts[parts.length - 1];
    }


    async function loadData() {
        const token =
            localStorage.getItem("token");

        if (!token) {
            window.location.hash = "#/login";
            return;
        }


        try {
            const recipeResponse = await fetch(
                `${API_URL}/api/recipes/${recipeId}`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


            const categoriesResponse = await fetch(
                `${API_URL}/api/categories`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


            const mediasResponse = await fetch(
                `${API_URL}/api/media`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


            const recipe =
                await recipeResponse.json();

            categories =
                await categoriesResponse.json();

            medias =
                await mediasResponse.json();


            if (!recipeResponse.ok) {
                message =
                    "Recette introuvable.";

                return;
            }


            title =
                recipe.title || "";

            description =
                recipe.description || "";

            categoryId =
                recipe.category_id || "";

            mediaId =
                recipe.media_id || "";

            prepTime =
                recipe.prep_time || "";

            cookTime =
                recipe.cook_time || "";

            ingredients =
                recipe.ingredients || "";

            instructions =
                recipe.instructions || "";


        } catch (error) {
            console.error(error);

            message =
                "Impossible de charger la recette.";

        } finally {
            loading = false;
        }
    }


    async function updateRecipe() {
        const token =
            localStorage.getItem("token");


        if (
            !title ||
            !categoryId ||
            !mediaId ||
            !ingredients ||
            !instructions
        ) {
            message =
                "Veuillez remplir les champs obligatoires.";

            return;
        }


        try {
            const response = await fetch(
                `${API_URL}/api/recipes/${recipeId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json",

                        Authorization:
                            `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        title,
                        description,
                        ingredients,
                        instructions,

                        prep_time:
                            prepTime
                                ? Number(prepTime)
                                : null,

                        cook_time:
                            cookTime
                                ? Number(cookTime)
                                : null,

                        category_id:
                            Number(categoryId),

                        media_id:
                            Number(mediaId)
                    })
                }
            );


            const data =
                await response.json();


            if (!response.ok) {
                message =
                    data.message ||
                    "Erreur lors de la modification.";

                return;
            }


            window.location.hash =
                "#/user/profile";


        } catch (error) {
            console.error(error);

            message =
                "Impossible de modifier la recette.";
        }
    }


    onMount(() => {
        getRecipeId();
        loadData();
    });
</script>


<main class="edit-recipe-page">

    <h1>✏️ MODIFIER MA RECETTE</h1>


    {#if loading}

        <p class="message">
            Chargement...
        </p>


    {:else}

        <section class="recipe-container">

            <form
                class="recipe-form"
                on:submit|preventDefault={updateRecipe}
            >

                <label for="title">
                    Titre
                </label>

                <input
                    id="title"
                    type="text"
                    bind:value={title}
                    required
                />


                <label for="media">
                    Film ou série
                </label>

                <select
                    id="media"
                    bind:value={mediaId}
                    required
                >

                    <option value="">
                        Sélectionner
                    </option>

                    {#each medias as media}

                        <option value={media.id}>
                            {media.title}
                        </option>

                    {/each}

                </select>


                <label for="category">
                    Catégorie
                </label>

                <select
                    id="category"
                    bind:value={categoryId}
                    required
                >

                    <option value="">
                        Sélectionner
                    </option>

                    {#each categories as category}

                        <option value={category.id}>
                            {category.name}
                        </option>

                    {/each}

                </select>


                <div class="time-container">

                    <div>

                        <label for="prepTime">
                            Préparation
                        </label>

                        <input
                            id="prepTime"
                            type="number"
                            bind:value={prepTime}
                            min="0"
                        />

                    </div>


                    <div>

                        <label for="cookTime">
                            Cuisson
                        </label>

                        <input
                            id="cookTime"
                            type="number"
                            bind:value={cookTime}
                            min="0"
                        />

                    </div>

                </div>


                <label for="ingredients">
                    Ingrédients
                </label>

                <textarea
                    id="ingredients"
                    bind:value={ingredients}
                    required
                ></textarea>


                <label for="instructions">
                    Instructions
                </label>

                <textarea
                    id="instructions"
                    bind:value={instructions}
                    required
                ></textarea>


                <label for="description">
                    Description
                </label>

                <textarea
                    id="description"
                    bind:value={description}
                ></textarea>


                {#if message}

                    <p class="message">
                        {message}
                    </p>

                {/if}


                <div class="buttons">

                    <button
                        class="submit"
                        type="submit"
                    >
                        ENREGISTRER
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

    {/if}

</main>


<style>
    .edit-recipe-page {
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
        margin: 20px 0;

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