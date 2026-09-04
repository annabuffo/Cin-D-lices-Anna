<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:3000";

    let users = [];
    let userToDelete = null;

    let loading = true;
    let error = "";

    async function loadUsers() {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.hash = "#/login";
            return;
        }

        try {
            loading = true;
            error = "";

            const response = await fetch(
                `${API_URL}/api/users`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Impossible de récupérer les utilisateurs."
                );
            }

            users = Array.isArray(data) ? data : [];
        } catch (err) {
            console.error(err);

            error =
                err.message ||
                "Erreur lors du chargement des utilisateurs.";

            users = [];
        } finally {
            loading = false;
        }
    }

    function askDeleteUser(user) {
        userToDelete = user;
    }

    function cancelDelete() {
        userToDelete = null;
    }

    async function confirmDelete() {
        if (!userToDelete) {
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            window.location.hash = "#/login";
            return;
        }

        try {
            error = "";

            const response = await fetch(
                `${API_URL}/api/users/${userToDelete.id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            let data = {};

            if (response.status !== 204) {
                data = await response.json();
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Impossible de supprimer cet utilisateur."
                );
            }

            users = users.filter(
                (user) => user.id !== userToDelete.id
            );

            userToDelete = null;
        } catch (err) {
            console.error(err);

            error =
                err.message ||
                "Erreur lors de la suppression.";
        }
    }

    onMount(() => {
        loadUsers();
    });
</script>

<main class="admin-page">
    <h1>GESTION DES UTILISATEURS</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">

        {#if loading}

            <p class="empty-message">
                Chargement des utilisateurs...
            </p>

        {:else if error}

            <p class="error-message">
                {error}
            </p>

        {:else}

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
                            onclick={() => askDeleteUser(user)}
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
                            onclick={() => askDeleteUser(user)}
                        >
                            SUPPRIMER
                        </button>

                    </div>

                {/each}

            {/if}

        {/if}

    </section>


    {#if userToDelete}

        <div class="modal-overlay">

            <div class="modal">

                <h2>
                    SUPPRIMER L'UTILISATEUR ?
                </h2>

                <p>
                    Voulez-vous vraiment supprimer
                    <strong>
                        {userToDelete.username}
                    </strong>
                    ?
                </p>

                <div class="modal-actions">

                    <button
                        class="cancel-button"
                        type="button"
                        onclick={cancelDelete}
                    >
                        ANNULER
                    </button>

                    <button
                        class="confirm-delete"
                        type="button"
                        onclick={confirmDelete}
                    >
                        SUPPRIMER
                    </button>

                </div>

            </div>

        </div>

    {/if}

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
        margin-top: 30px !important;
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

    .delete:hover {
        background-color: #d13f3f;
    }

    .empty-message {
        color: white;

        padding: 15px;

        background-color: #111526;

        border-radius: 6px;

        text-align: center;
    }

    .error-message {
        color: #ff8b8b;

        padding: 15px;

        background-color: #111526;

        border-radius: 6px;

        text-align: center;
    }

    /* MODALE */

    .modal-overlay {
        position: fixed;
        inset: 0;

        background-color: rgba(0, 0, 0, 0.75);

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 1000;
    }

    .modal {
        width: 90%;
        max-width: 430px;

        background-color: #060630;

        border: 1px solid #d4af37;
        border-radius: 10px;

        padding: 30px;

        text-align: center;
    }

    .modal h2 {
        color: #d4af37;

        margin-top: 0;
        margin-bottom: 20px;
    }

    .modal p {
        color: white;
        margin-bottom: 25px;
    }

    .modal strong {
        color: #d4af37;
    }

    .modal-actions {
        display: flex;
        justify-content: center;

        gap: 15px;
    }

    .cancel-button,
    .confirm-delete {
        border: none;
        border-radius: 5px;

        padding: 11px 18px;

        font-weight: bold;
        cursor: pointer;
    }

    .cancel-button {
        background-color: #d4af37;
        color: black;
    }

    .cancel-button:hover {
        background-color: #f0c94d;
    }

    .confirm-delete {
        background-color: #e24d4d;
        color: white;
    }

    .confirm-delete:hover {
        background-color: #d13f3f;
    }

    @media (max-width: 768px) {
        .admin-page {
            width: 94%;
        }

        .user-card {
            align-items: flex-start;
        }
    }

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

        .modal-actions {
            flex-direction: column;
        }

        .cancel-button,
        .confirm-delete {
            width: 100%;
        }
    }
</style>