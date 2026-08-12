<script>
</script>

<main class="admin-page">
    <h1>GESTION DES CATÉGORIES</h1>

    <a class="back" href="#/admin"> ← Retour au tableau de bord </a>

    <section class="admin-container">
        <button class="add">AJOUTER UNE CATÉGORIE</button>

        <div class="item-card">
            <div>
                <h2>Entrée</h2>
                <p>Catégorie utilisée pour les entrées.</p>
            </div>

            <div class="actions">
                <button class="edit">MODIFIER</button>
                <button class="delete">SUPPRIMER</button>
            </div>

        </div>

        <div class="item-card">
            <div>
                <h2>Plat principal</h2>
                <p>Catégorie utilisée pour les plats principaux.</p>
            </div>

            <div class="actions">
                <button class="edit">MODIFIER</button>
                <button class="delete">SUPPRIMER</button>
            </div>
        </div>

        <div class="item-card">
            <div>
                <h2>Dessert</h2>
                <p>Catégorie utilisée pour les desserts.</p>
            </div>

            <div class="actions">
                <button class="edit">MODIFIER</button>
                <button class="delete">SUPPRIMER</button>
            </div>
        </div>
        
        <div class="item-card">
            <div>
                <h2>Boisson</h2>
                <p>Catégorie utilisée pour les boissons.</p>
            </div>

            <div class="actions">
                <button class="edit">MODIFIER</button>
                <button class="delete">SUPPRIMER</button>
            </div>
        </div>
    </section>
</main>

<Footer />

<style>
    .admin-page {
        width: 90%;
        max-width: 1000px;
        margin: 40px auto;
    }

    .admin-page h1 {
        text-align: center;
        color: #d4af37;
    }

    .back {
        display: inline-block;
        color: #d4af37;
        margin-bottom: 25px;
    }

    .admin-container {
        background-color: rgb(6, 6, 48);
        border: 1px solid #d4af37;
        border-radius: 8px;
        padding: 20px;
    }

    .add {
        background-color: #d4af37;
        color: black;
        border: none;
        padding: 10px 15px;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .item-card {
        background-color: #111526;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 6px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .item-card h2 {
        color: #d4af37;
    }

    .item-card p {
        color: white;
    }

    .actions {
        display: flex;
        gap: 10px;
    }

    .edit {
        background-color: #d4af37;
        color: black;
    }

    .delete {
        background-color: #e24d4d;
        color: white;
    }

    .edit,
    .delete {
        border: none;
        padding: 10px 15px;
        cursor: pointer;
    }

    @media (max-width: 650px) {
        .item-card {
            flex-direction: column;
            align-items: flex-start;
        }

        .actions {
            width: 100%;
            flex-direction: column;
        }

        .edit,
        .delete {
            width: 100%;
        }
    }
</style>
