<script>
    import Footer from "../../components/Footer.svelte";
    import Header from "../../components/Header.svelte";
</script>

<main class="admin-page">
    <h1>GESTION DES FILMS ET SÉRIES</h1>

    <a class="back" href="#/admin"> ← Retour au tableau de bord </a>

    <section class="admin-container">
        <button class="add"> AJOUTER UN FILM OU UNE SÉRIE </button>

        <div class="item-card">
            <img src="/img-home/sirène.jpg" alt="La petite sirène" />

            <div class="info">
                <h2>La petite sirène</h2>
                <p>Type : Film</p>
            </div>

            <div class="actions">
                <button class="edit">MODIFIER</button>
                <button class="delete">SUPPRIMER</button>
            </div>
        </div>
    </section>

    <section class="admin-container">
        <button class="add"> AJOUTER UN FILM OU UNE SÉRIE </button>

        <div class="item-card">
            <img src="/img-home/Mario.jpg" alt="Super Mario Bros" />

            <div class="info">
                <h2>Super Mario Bros</h2>
                <p>Type : Film</p>
            </div>

            <div class="actions">
                <button class="edit">MODIFIER</button>
                <button class="delete">SUPPRIMER</button>
            </div>
        </div>
    </section>

    <section class="admin-container">
        <button class="add"> AJOUTER UN FILM OU UNE SÉRIE </button>

        <div class="item-card">
            <img src="/img-card-sct-1/ratatouille.jpg" alt="Ratatouille" />

            <div class="info">
                <h2>Ratatouille</h2>
                <p>Type : Film</p>
            </div>

            <div class="actions">
                <button class="edit">MODIFIER</button>
                <button class="delete">SUPPRIMER</button>
            </div>
        </div>
    </section>

    <section class="admin-container">
        <button class="add"> AJOUTER UN FILM OU UNE SÉRIE </button>

        <div class="item-card">
            <img src="/img-card-sct-1/choux.png" alt="La soupe aux choux" />

            <div class="info">
                <h2>La soupe aux choux</h2>
                <p>Type : Film</p>
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
        align-items: center;
        gap: 20px;
    }

    .item-card img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border: 1px solid #d4af37;
    }

    .info {
        flex: 1;
    }

    .info h2 {
        color: #d4af37;
    }

    .info p {
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

        .item-card img {
            width: 100%;
            height: 180px;
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
