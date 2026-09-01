<script>
    let users = [
        {
            id: "user-1",
            username: "Nom utilisateur",
            email: "utilisateur@email.com",
            role: "user",
        },
        {
            id: "admin-1",
            username: "Nom administrateur",
            email: "administrateur@email.com",
            role: "admin",
        },
    ];

    function deleteUser(id = "") {
        const confirmation = window.confirm(
            "Voulez-vous vraiment supprimer cet utilisateur ?"
        );

        if (confirmation) {
            users = users.filter((user) => user.id !== id);
        }
    }
</script>

<main class="admin-page">
    <h1>GESTION DES UTILISATEURS</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">
        <h2>👥 UTILISATEURS</h2>

        {#if users.filter((user) => user.role === "user").length === 0}
            <p class="empty-message">
                Aucun utilisateur.
            </p>
        {:else}
            {#each users.filter((user) => user.role === "user") as user}
                <div class="user-card">
                    <div class="user-info">
                        <h3>{user.username}</h3>

                        <p>{user.email}</p>

                        <p>
                            Rôle : {user.role}
                        </p>
                    </div>

                    <button
                        class="delete"
                        type="button"
                        on:click={() => deleteUser(user.id)}
                    >
                        SUPPRIMER
                    </button>
                </div>
            {/each}
        {/if}

        <h2 class="admin-title">
            👑 ADMINISTRATEURS
        </h2>

        {#if users.filter((user) => user.role === "admin").length === 0}
            <p class="empty-message">
                Aucun administrateur.
            </p>
        {:else}
            {#each users.filter((user) => user.role === "admin") as user}
                <div class="user-card">
                    <div class="user-info">
                        <h3>{user.username}</h3>

                        <p>{user.email}</p>

                        <p>
                            Rôle : {user.role}
                        </p>
                    </div>

                    <button
                        class="delete"
                        type="button"
                        on:click={() => deleteUser(user.id)}
                    >
                        SUPPRIMER
                    </button>
                </div>
            {/each}
        {/if}
    </section>
</main>

<style>
    .admin-page {
        width: 90%;
        max-width: 1000px;

        margin: 40px auto;
    }

    /* TITRE */

    .admin-page h1 {
        color: #d4af37;

        text-align: center;

        margin-bottom: 25px;
    }

    /* RETOUR */

    .back {
        display: inline-block;

        color: #d4af37;

        margin-bottom: 25px;

        text-decoration: none;
    }

    .back:hover {
        text-decoration: underline;
    }

    /* CONTENEUR */

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
        margin-top: 30px !important;
    }

    /* UTILISATEUR */

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

    /* SUPPRESSION */

    .delete {
        background-color: #e24d4d;
        color: white;

        border: none;
        border-radius: 4px;

        padding: 10px 15px;

        cursor: pointer;
        font-weight: bold;
    }

    .delete:hover {
        background-color: #d13f3f;
    }

    /* LISTE VIDE */

    .empty-message {
        color: white;

        padding: 15px;

        background-color: #111526;

        border-radius: 6px;

        text-align: center;
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