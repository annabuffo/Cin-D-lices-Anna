<script>
    import Footer from "../../components/Footer.svelte";
    import Header from "../../components/Header.svelte";
</script>

<main class="admin-page">

    <h1>ESPACE ADMINISTRATEUR</h1>

    <p class="subtitle">
        Gérez le contenu et les utilisateurs de Ciné Délices
    </p>

    <section class="admin-grid">

        <article class="admin-card">
            <h2>👥 UTILISATEURS</h2>
            <p>
                Consultez et gérez les utilisateurs inscrits.
            </p>
            <a href="#/admin/users">GÉRER LES UTILISATEURS</a>
        </article>

        <article class="admin-card">
            <h2>🍽️ RECETTES</h2>
            <p>
                Consultez, modifiez ou supprimez les recettes.
            </p>
            <a href="#/admin/recipes">GÉRER LES RECETTES</a>
        </article>

        <article class="admin-card">
            <h2>📁 CATÉGORIES</h2>
            <p>
                Gérez les différentes catégories de recettes.
            </p>
            <a href="#/admin/categories">GÉRER LES CATÉGORIES</a>
        </article>

        <article class="admin-card">
            <h2>🎬 MÉDIAS</h2>
            <p>
                Gérez les films et séries associés aux recettes.
            </p>
            <a href="#/admin/media">GÉRER LES MÉDIAS</a>
        </article>

        <article class="admin-card">
            <h2>💬 COMMENTAIRES</h2>
            <p>
                Consultez et modérez les commentaires.
            </p>
            <a href="#/admin/comments">GÉRER LES COMMENTAIRES</a>
        </article>

    </section>

</main>

<style>
    .admin-page {
        width: 90%;
        max-width: 1000px;
        margin: 40px auto;
    }

    .admin-page h1 {
        color: #d4af37;
        text-align: center;
        font-family: "Bebas Neue", sans-serif;
        letter-spacing: 1px;
    }

    .subtitle {
        color: white;
        text-align: center;
        margin-bottom: 40px;
    }

    .admin-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .admin-card {
        background-color: rgb(6, 6, 48);
        border: 1px solid #d4af37;
        border-radius: 8px;
        padding: 25px;
        text-align: center;
    }

    .admin-card h2 {
        color: #d4af37;
        font-family: "Bebas Neue", sans-serif;
    }

    .admin-card p {
        color: white;
        margin-bottom: 25px;
    }

    .admin-card a {
        display: inline-block;
        background-color: #d4af37;
        color: black;
        padding: 10px 15px;
        text-decoration: none;
        font-weight: 600;
        border-radius: 4px;
    }

    .admin-card a:hover {
        background-color: #e24d4d;
        color: white;
    }

    /* RESPONSIVE */

    @media (max-width: 768px) {
        .admin-grid {
            grid-template-columns: 1fr;
        }

        .admin-page {
            width: 94%;
        }

        .admin-page h1 {
            font-size: 2rem;
        }
    }
</style>

<Footer />
