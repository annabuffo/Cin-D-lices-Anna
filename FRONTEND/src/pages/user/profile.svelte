<script>
    let username = "Utilisateur";
    let email = "utilisateur@email.com";
    let role = "Utilisateur";

    let recipes = [
        {
            id: "super-mario",
            title: "Tagliatelles crémeuses aux champignons",
            movie: "Super Mario Bros",
            image: "/img-card-sct-1/champignon.jpg",
        },
        {
            id: "ratatouille",
            title: "Ratatouille aux légumes",
            movie: "Ratatouille",
            image: "/img-card-sct-1/ratatouille.jpg",
        },
    ];

    function deleteRecipe(id = "") {
        const confirmation = window.confirm(
            "Voulez-vous vraiment supprimer cette recette ?"
        );

        if (confirmation) {
            recipes = recipes.filter((recipe) => recipe.id !== id);
        }
    }
</script>

<main class="profile-page">
    <h1>👤 MON PROFIL</h1>

    <p class="subtitle">
        Gérez votre profil et retrouvez votre activité sur Ciné Délices
    </p>

    <!-- INFORMATIONS UTILISATEUR -->

    <section class="profile-container">
        <div class="profile-header">
            <div class="avatar">
                👤
            </div>

            <div class="user-info">
                <h2>{username}</h2>

                <p>
                    <strong>Email :</strong>
                    {email}
                </p>

                <p>
                    <strong>Rôle :</strong>
                    {role}
                </p>
            </div>
        </div>
    </section>

    <!-- MES RECETTES -->

    <section class="profile-section">
        <div class="section-header">
            <h2>🍽️ MES RECETTES</h2>

            <a
                class="add-recipe"
                href="#/user/addRecipe"
            >
                + AJOUTER UNE RECETTE
            </a>
        </div>

        {#if recipes.length === 0}
            <p class="empty-message">
                Vous n'avez encore créé aucune recette.
            </p>
        {:else}
            <div class="recipe-grid">
                {#each recipes as recipe}
                    <article class="recipe-card">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                        />

                        <div class="recipe-content">
                            <h3>
                                {recipe.title}
                            </h3>

                            <p>
                                Inspirée de {recipe.movie}
                            </p>

                            <div class="recipe-actions">
                                <a
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
                                    onclick={() => deleteRecipe(recipe.id)}
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

    <!-- FAVORIS -->

    <section class="profile-section">
        <h2>⭐ MES FAVORIS</h2>

        <div class="favorite-card">
            <img
                src="/img-card-sct-1/poisson.jpg"
                alt="Poisson rôti et légumes au four"
            />

            <div class="favorite-info">
                <h3>
                    Poisson Rôti et Légumes au Four
                </h3>

                <p>
                    Inspirée de La Petite Sirène
                </p>
            </div>

            <a href="#/user/recipe/petite-sirene">
                VOIR LA RECETTE
            </a>
        </div>

        <a
            class="all-favorites"
            href="#/user/favorite"
        >
            VOIR TOUS MES FAVORIS
        </a>
    </section>
</main>

<style>
    .profile-page {
        width: 90%;
        max-width: 1000px;

        margin: 40px auto;
    }

    /* TITRE */

    .profile-page h1 {
        color: #d4af37;

        text-align: center;

        margin-bottom: 10px;
    }

    .subtitle {
        color: white;

        text-align: center;

        margin-bottom: 35px;
    }

    /* PROFIL */

    .profile-container {
        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        padding: 25px;

        margin-bottom: 35px;
    }

    .profile-header {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .avatar {
        width: 90px;
        height: 90px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #111526;

        border: 2px solid #d4af37;
        border-radius: 50%;

        font-size: 40px;
    }

    .user-info {
        flex: 1;
    }

    .user-info h2 {
        color: #d4af37;

        margin-top: 0;
        margin-bottom: 10px;
    }

    .user-info p {
        color: white;

        margin: 6px 0;
    }

    .user-info strong {
        color: #d4af37;
    }

    /* SECTIONS */

    .profile-section {
        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 8px;

        padding: 25px;

        margin-bottom: 30px;
    }

    .profile-section h2 {
        color: #d4af37;

        margin-top: 0;

        border-bottom: 1px solid #d4af37;

        padding-bottom: 10px;
    }

    .section-header {
        margin-bottom: 20px;
    }

    /* RECETTES */

    .recipe-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 20px;
    }

    .recipe-card {
        background-color: #111526;

        border-radius: 6px;

        overflow: hidden;
    }

    .recipe-card img {
        width: 100%;
        height: 180px;

        object-fit: cover;
    }

    .recipe-content {
        padding: 15px;
    }

    .recipe-content h3 {
        color: #d4af37;

        margin-top: 0;
    }

    .recipe-content p {
        color: white;
    }

    /* ACTIONS */

    .recipe-actions {
        display: flex;
        gap: 8px;

        margin-top: 15px;
    }

    .recipe-actions a,
    .recipe-actions button {
        padding: 8px 10px;

        border: none;
        border-radius: 4px;

        font-weight: bold;

        cursor: pointer;

        text-decoration: none;
    }

    .recipe-actions a {
        background-color: #07558d;
        color: white;
    }

    .recipe-actions .edit {
        background-color: #d4af37;
        color: black;
    }

    .delete {
        background-color: #e24d4d;
        color: white;
    }

    /* AJOUTER UNE RECETTE */

    .add-recipe {
        display: inline-block;

        padding: 10px 15px;

        background-color: #d4af37;
        color: black;

        border-radius: 4px;

        text-decoration: none;
        font-weight: bold;
    }

    .add-recipe:hover {
        background-color: #e24d4d;
        color: white;
    }

    /* MESSAGE VIDE */

    .empty-message {
        color: white;

        text-align: center;

        padding: 20px;
    }

    /* FAVORIS */

    .favorite-card {
        background-color: #111526;

        padding: 15px;

        border-radius: 6px;

        display: flex;
        align-items: center;
        gap: 20px;

        margin-top: 20px;
    }

    .favorite-card img {
        width: 120px;
        height: 100px;

        object-fit: cover;

        border-radius: 4px;
    }

    .favorite-info {
        flex: 1;
    }

    .favorite-info h3 {
        color: #d4af37;

        margin: 0 0 8px;
    }

    .favorite-info p {
        color: white;

        margin: 0;
    }

    .favorite-card a {
        background-color: #d4af37;
        color: black;

        padding: 10px 15px;

        border-radius: 4px;

        text-decoration: none;
        font-weight: bold;
    }

    .all-favorites {
        display: inline-block;

        margin-top: 20px;

        color: #d4af37;

        text-decoration: underline;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .profile-page {
            width: 94%;
        }

        .recipe-grid {
            grid-template-columns: 1fr;
        }

        .favorite-card {
            align-items: flex-start;
        }
    }

    /* MOBILE */

    @media (max-width: 375px) {
        .profile-page {
            width: 95%;

            margin: 25px auto;
        }

        .profile-page h1 {
            font-size: 28px;
        }

        .subtitle {
            font-size: 14px;
        }

        .profile-container,
        .profile-section {
            padding: 15px;
        }

        .profile-header {
            flex-direction: column;

            text-align: center;
        }

        .avatar {
            width: 75px;
            height: 75px;

            font-size: 32px;
        }

        .recipe-actions {
            flex-direction: column;
        }

        .recipe-actions a,
        .recipe-actions button {
            width: 100%;

            text-align: center;

            box-sizing: border-box;
        }

        .favorite-card {
            flex-direction: column;
            align-items: stretch;

            text-align: center;
        }

        .favorite-card img {
            width: 100%;
            height: 200px;
        }

        .favorite-card a {
            width: 100%;

            text-align: center;

            box-sizing: border-box;
        }

        .profile-section h2 {
            font-size: 22px;
        }

        .add-recipe {
            width: 100%;

            padding: 12px 10px;

            text-align: center;

            box-sizing: border-box;
        }
    }
</style>