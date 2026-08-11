<script>
</script>

<main class="admin-page">
    <h1>GESTION DES UTILISATEURS</h1>

    <a class="back" href="#/admin"> ← Retour au tableau de bord </a>

    <section class="admin-container">
        <h2>👥 UTILISATEURS</h2>

        <div class="user-card">
            <div>
                <h3>Nom utilisateur</h3>
                <p>utilisateur@email.com</p>
                <p>Rôle : user</p>
            </div>

            <button>SUPPRIMER</button>
        </div>

        <h2>👑 ADMINISTRATEURS</h2>

        <div class="user-card">
            <div>
                <h3>Nom administrateur</h3>
                <p>administrateur@email.com</p>
                <p>Rôle : admin</p>
            </div>

            <button>SUPPRIMER</button>
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
        font-family: "Bebas Neue", sans-serif;
    }

    .back {
        display: inline-block;
        color: #d4af37;
        margin-bottom: 25px;
        text-decoration: none;
    }

    .admin-container {
        background-color: rgb(6, 6, 48);
        border: 1px solid #d4af37;
        border-radius: 8px;
        padding: 20px;
    }

    .admin-container h2 {
        color: #d4af37;
    }

    .user-card {
        background-color: #111526;
        padding: 15px;
        margin-top: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 6px;
    }

    .user-card h3 {
        color: #d4af37;
    }

    .user-card p {
        color: white;
    }

    button {
        background-color: #e24d4d;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        .user-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }

        button {
            width: 100%;
        }
    }
</style>
