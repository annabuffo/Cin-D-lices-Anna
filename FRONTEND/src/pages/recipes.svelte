<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:3000";

    let search = "";
    let selectedCategory = "all";
    let selectedMedia = "all";

    let recipes = [];
    let loading = true;
    let error = "";

    function normalizeRecipe(recipe) {
        return {
            id: recipe.id,
            title: recipe.title || "Recette",
            movie: recipe.media?.title || "Film / Série",
            category: recipe.category?.name || "Sans catégorie",
            image:
                recipe.image_url ||
                recipe.media?.image_url ||
                "",
            description:
                recipe.description ||
                "Recette inspirée de cette œuvre.",
            author:
                recipe.author?.username ||
                "Utilisateur",
        };
    }

    function removeDuplicates(recipeList) {
        const seen = new Set();

        return recipeList.filter((recipe) => {
            const key = `${recipe.title}-${recipe.movie}-${recipe.category}`;

            if (seen.has(key)) {
                return false;
            }

            seen.add(key);
            return true;
        });
    }

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
                        "Erreur lors du chargement des recettes."
                );
            }

            const normalized = Array.isArray(data)
                ? data.map(normalizeRecipe)
                : [];

            recipes = removeDuplicates(normalized);

        } catch (err) {
            console.error(err);

            error =
                "Impossible de charger les recettes pour le moment.";

            recipes = [];
        } finally {
            loading = false;
        }
    }

    function resetFilters() {
        search = "";
        selectedCategory = "all";
        selectedMedia = "all";
    }

    onMount(() => {
        loadRecipes();
    });

    $: hasActiveFilters =
        search.trim() !== "" ||
        selectedCategory !== "all" ||
        selectedMedia !== "all";

    $: filteredRecipes = hasActiveFilters
        ? recipes.filter((recipe) => {
              const searchValue =
                  search.trim().toLowerCase();

              const matchesSearch =
                  searchValue === "" ||
                  recipe.title
                      .toLowerCase()
                      .includes(searchValue) ||
                  recipe.movie
                      .toLowerCase()
                      .includes(searchValue);

              const matchesCategory =
                  selectedCategory === "all" ||
                  recipe.category === selectedCategory;

              const matchesMedia =
                  selectedMedia === "all" ||
                  recipe.movie === selectedMedia;

              return (
                  matchesSearch &&
                  matchesCategory &&
                  matchesMedia
              );
          })
        : [];

    $: categories = [
        "all",
        ...new Set(
            recipes.map(
                (recipe) => recipe.category
            )
        ),
    ];

    $: mediaOptions = [
        "all",
        ...new Set(
            recipes.map(
                (recipe) => recipe.movie
            )
        ),
    ];
</script>

<main class="recipes-page">

    <h1>🍽️ RECHERCHER UNE RECETTE</h1>

    <section class="filters">

        <input
            type="search"
            placeholder="Rechercher une recette ou un film..."
            bind:value={search}
        />

        <select bind:value={selectedCategory}>
            {#each categories as category}
                <option value={category}>
                    {category === "all"
                        ? "Toutes les catégories"
                        : category}
                </option>
            {/each}
        </select>

        <select bind:value={selectedMedia}>
            {#each mediaOptions as media}
                <option value={media}>
                    {media === "all"
                        ? "Tous les films / séries"
                        : media}
                </option>
            {/each}
        </select>

        {#if hasActiveFilters}
            <button
                type="button"
                class="reset-button"
                on:click={resetFilters}
            >
                RÉINITIALISER
            </button>
        {/if}

    </section>

    {#if loading}

        <div class="no-results">
            <h2>Chargement des recettes...</h2>
        </div>

    {:else if error}

        <div class="no-results">
            <h2>Erreur</h2>
            <p>{error}</p>
        </div>

    {:else if !hasActiveFilters}

        <div class="no-results">
            <h2>Recherchez une recette</h2>

            <p>
                Utilisez la barre de recherche,
                sélectionnez une catégorie
                ou choisissez un film / une série.
            </p>
        </div>

    {:else if filteredRecipes.length === 0}

        <div class="no-results">
            <h2>Aucune recette trouvée</h2>

            <p>
                Essayez de modifier votre recherche
                ou vos filtres.
            </p>
        </div>

    {:else}

        <section class="recipes-grid">

            {#each filteredRecipes as recipe}

                <article class="recipe-card">

                    {#if recipe.image}

                        <img
                            src={recipe.image}
                            alt={recipe.title}
                        />

                    {:else}

                        <div class="no-image">
                            🍽️
                            <span>Aucune image</span>
                        </div>

                    {/if}

                    <div class="card-content">

                        <p class="movie-name">
                            🎬 {recipe.movie}
                        </p>

                        <h2>
                            {recipe.title}
                        </h2>

                        <p class="author">
                            Par {recipe.author}
                        </p>

                        <span class="category">
                            {recipe.category}
                        </span>

                        <a
                            class="recipe-link"
                            href={`#/user/recipe/${recipe.id}`}
                        >
                            VOIR LA RECETTE
                        </a>

                    </div>

                </article>

            {/each}

        </section>

    {/if}

</main>

<style>

    .recipes-page {
        width: 95%;
        max-width: 1400px;
        margin: 30px auto 80px;
    }

    .recipes-page h1 {
        text-align: center;
        margin-bottom: 35px;
        color: #d4af37;
    }

    .filters {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 40px;
    }

    .filters input,
    .filters select {
        width: 100%;
        padding: 12px;
        background-color: #1c1c35;
        color: white;
        border: 1px solid #444;
        border-radius: 6px;
        outline: none;
    }

    .filters input:focus,
    .filters select:focus {
        border-color: #d4af37;
    }

    .reset-button {
        width: fit-content;
        padding: 10px 14px;
        background-color: transparent;
        color: #d4af37;
        border: 1px solid #d4af37;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    .reset-button:hover {
        background-color: #d4af37;
        color: black;
    }

    .recipes-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }

    .recipe-card {
        overflow: hidden;
        background-color: #1c1c35;
        border: 1px solid #554b27;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }

    .recipe-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .no-image {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #111126;
        color: white;
        gap: 8px;
    }

    .card-content {
        padding: 15px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .movie-name {
        margin: 0 0 10px;
        color: #d4af37;
        font-size: 13px;
        font-weight: bold;
    }

    .recipe-card h2 {
        margin: 0 0 12px;
        color: white;
        font-size: 18px;
        text-transform: uppercase;
    }

    .author {
        color: #999;
        margin: 0 0 12px;
    }

    .category {
        display: inline-block;
        width: fit-content;
        padding: 5px 8px;
        background-color: #07558d;
        color: white;
        border-radius: 3px;
        font-size: 12px;
    }

    .recipe-link {
        display: inline-block;
        width: fit-content;
        margin-top: 15px;
        padding: 9px 12px;
        background-color: #d4af37;
        color: black;
        border-radius: 4px;
        text-decoration: none;
        font-size: 13px;
        font-weight: bold;
    }

    .recipe-link:hover {
        background-color: #f0c94d;
    }

    .no-results {
        padding: 40px;
        background-color: #1c1c35;
        border: 1px solid #554b27;
        border-radius: 8px;
        text-align: center;
    }

    .no-results h2 {
        color: #d4af37;
    }

    .no-results p {
        color: white;
    }

    @media (max-width: 768px) {

        .recipes-page {
            width: 94%;
        }

        .recipes-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 480px) {

        .recipes-page {
            width: 95%;
            margin-top: 25px;
        }

        .recipes-page h1 {
            font-size: 25px;
        }

        .recipes-grid {
            grid-template-columns: 1fr;
        }

        .filters {
            width: 100%;
        }

        .filters input,
        .filters select {
            font-size: 16px;
        }

        .reset-button {
            width: 100%;
        }

        .recipe-card img,
        .no-image {
            height: 200px;
        }

        .recipe-card h2 {
            font-size: 17px;
        }

        .card-content {
            padding: 12px;
        }
    }

</style>