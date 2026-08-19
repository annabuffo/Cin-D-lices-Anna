<main class="admin-page">
    <h1>GESTION DES UTILISATEURS</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">
        <h2>👥 UTILISATEURS</h2>

        <div class="user-card">
            <div class="user-info">
                <h3>Nom utilisateur</h3>
                <p>utilisateur@email.com</p>
                <p>Rôle : user</p>
            </div>

            <button class="delete" type="button">
                SUPPRIMER
            </button>
        </div>

        <h2 class="admin-title">👑 ADMINISTRATEURS</h2>

        <div class="user-card">
            <div class="user-info">
                <h3>Nom administrateur</h3>
                <p>administrateur@email.com</p>
                <p>Rôle : admin</p>
            </div>

            <button class="delete" type="button">
                SUPPRIMER
            </button>
        </div>
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
        margin-bottom: 25px;
    }

    .back {
        display: inline-block;
        color: #d4af37;
        margin-bottom: 25px;
        text-decoration: none;
    }

    .back:hover {
        text-decoration: underline;
    }

    .admin-container {
        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 8px;

        padding: 20px;
    }

    .admin-container h2 {
        color: #d4af37;
        margin-top: 0;
    }

    .admin-title {
        margin-top: 30px;
    }

    .user-card {
        background-color: #111526;

        padding: 15px;
        margin-top: 15px;

        border-radius: 6px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .user-info {
        flex: 1;
    }

    .user-card h3 {
        color: #d4af37;
        margin: 0 0 8px;
    }

    .user-card p {
        color: white;
        margin: 5px 0;
    }

    .delete {
        background-color: #e24d4d;
        color: white;

        border: none;
        border-radius: 4px;

        padding: 10px 15px;

        cursor: pointer;
        font-weight: bold;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .admin-page {
            width: 94%;
        }

        .user-card {
            align-items: flex-start;
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

        .admin-container h2 {
            font-size: 22px;
        }

        .user-card {
            flex-direction: column;
            align-items: stretch;
        }

        .user-info {
            text-align: center;
        }

        .delete {
            width: 100%;
        }
    }
</style>