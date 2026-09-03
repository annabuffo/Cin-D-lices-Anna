<script>
    // @ts-nocheck

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    function goToAddRecipe() {
        window.location.hash = "#/user/addRecipe";
    }
</script>

<main class="admin-page">

    <section class="profile-card">
        <div class="avatar">
            {user.username
                ? user.username.charAt(0).toUpperCase()
                : "A"}
        </div>

        <div class="profile-info">
            <h2>MON PROFIL</h2>

            <p>
                <strong>Nom :</strong>
                {user.username || "admin"}
            </p>

            <p>
                <strong>Email :</strong>
                {user.email || "admin@cinedelices.com"}
            </p>

            <p>
                <strong>Rôle :</strong>
                {user.role || "admin"}
            </p>

            <button on:click={goToAddRecipe}>
                + AJOUTER UNE RECETTE
            </button>
        </div>
    </section>


    <section class="dashboard-section">
        <h1>ESPACE ADMINISTRATEUR</h1>

        <p class="subtitle">
            Gérez le contenu et les utilisateurs de Ciné Délices
        </p>

        <div class="dashboard-grid">

            <article class="admin-card">
                <h2>👥 UTILISATEURS</h2>

                <p>
                    Consultez et gérez les utilisateurs inscrits.
                </p>

                <a href="#/admin/users">
                    GÉRER LES UTILISATEURS
                </a>
            </article>


            <article class="admin-card">
                <h2>🍽️ RECETTES</h2>

                <p>
                    Consultez, modifiez ou supprimez les recettes.
                </p>

                <a href="#/admin/recipes">
                    GÉRER LES RECETTES
                </a>
            </article>


            <article class="admin-card">
                <h2>📁 CATÉGORIES</h2>

                <p>
                    Gérez les différentes catégories de recettes.
                </p>

                <a href="#/admin/categories">
                    GÉRER LES CATÉGORIES
                </a>
            </article>


            <article class="admin-card">
                <h2>🎬 MÉDIAS</h2>

                <p>
                    Gérez les films et séries associés aux recettes.
                </p>

                <a href="#/admin/media">
                    GÉRER LES MÉDIAS
                </a>
            </article>


            <article class="admin-card">
                <h2>💬 COMMENTAIRES</h2>

                <p>
                    Consultez et modérez les commentaires.
                </p>

                <a href="#/admin/comments">
                    GÉRER LES COMMENTAIRES
                </a>
            </article>

        </div>
    </section>

</main>


<style>
    .admin-page {
        width: 90%;
        max-width: 1200px;
        margin: 50px auto 80px;
    }

    .profile-card {
        display: flex;
        align-items: center;
        gap: 30px;

        padding: 35px;

        background-color: #05003f;
        border: 1px solid #d4af37;
        border-radius: 10px;

        margin-bottom: 55px;
    }

    .avatar {
        width: 95px;
        height: 95px;

        border-radius: 50%;

        background-color: #fa3f67;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;

        font-size: 40px;
        font-weight: bold;
    }

    .profile-info {
        flex: 1;
    }

    .profile-info h2 {
        color: #d4af37;
        margin-bottom: 25px;
    }

    .profile-info p {
        color: white;
        margin: 10px 0;
        font-size: 17px;
    }

    .profile-info strong {
        color: #d4af37;
    }

    .profile-info button {
        margin-top: 20px;

        padding: 14px 20px;

        border: none;
        border-radius: 5px;

        background-color: #d4af37;
        color: black;

        font-weight: bold;
        font-size: 15px;

        cursor: pointer;
    }

    .profile-info button:hover {
        background-color: #f0c94d;
    }

    .dashboard-section h1 {
        text-align: center;
        color: #d4af37;
        margin-bottom: 15px;
    }

    .subtitle {
        text-align: center;
        color: white;
        margin-bottom: 40px;
    }

    .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .admin-card {
        background-color: #05003f;
        border: 1px solid #d4af37;
        border-radius: 8px;

        padding: 30px;

        text-align: center;
    }

    .admin-card h2 {
        color: #d4af37;
        margin-bottom: 20px;
    }

    .admin-card p {
        color: white;
        margin-bottom: 25px;
    }

    .admin-card a {
        display: inline-block;

        padding: 12px 16px;

        background-color: #d4af37;
        color: black;

        text-decoration: none;
        border-radius: 5px;

        font-weight: bold;
    }

    .admin-card a:hover {
        background-color: #f0c94d;
    }

    @media (max-width: 768px) {
        .profile-card {
            flex-direction: column;
            text-align: center;
        }

        .dashboard-grid {
            grid-template-columns: 1fr;
        }
    }
</style>