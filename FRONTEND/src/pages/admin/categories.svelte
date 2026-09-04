<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let categories = [];
    let loading = true;
    let error = "";

    let showFormModal = false;
    let showDeleteModal = false;

    let editingCategory = null;
    let categoryToDelete = null;

    let formName = "";
    let formDescription = "";
    let formError = "";


    function getToken() {
        return localStorage.getItem("token");
    }


    async function loadCategories() {
        loading = true;
        error = "";

        try {
            const response = await fetch(
                `${API_URL}/api/categories`
            );

            if (!response.ok) {
                throw new Error(
                    "Impossible de charger les catégories."
                );
            }

            const data = await response.json();

            categories = Array.isArray(data)
                ? data
                : [];

        } catch (err) {
            console.error(err);

            error =
                "Impossible de charger les catégories.";

        } finally {
            loading = false;
        }
    }


    function openAddModal() {
        editingCategory = null;

        formName = "";
        formDescription = "";
        formError = "";

        showFormModal = true;
    }


    function openEditModal(category) {
        editingCategory = category;

        formName =
            category.name || "";

        formDescription =
            category.description || "";

        formError = "";

        showFormModal = true;
    }


    function closeFormModal() {
        showFormModal = false;

        editingCategory = null;

        formName = "";
        formDescription = "";
        formError = "";
    }


    async function saveCategory() {
        const name =
            formName.trim();

        const description =
            formDescription.trim();

        if (!name) {
            formError =
                "Le nom de la catégorie est obligatoire.";

            return;
        }

        const token = getToken();

        if (!token) {
            formError =
                "Vous devez être connecté.";

            return;
        }

        try {
            const isEditing =
                Boolean(editingCategory);

            const url =
                isEditing
                    ? `${API_URL}/api/categories/${editingCategory.id}`
                    : `${API_URL}/api/categories`;

            const response = await fetch(
                url,
                {
                    method:
                        isEditing
                            ? "PUT"
                            : "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        Authorization:
                            `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        name,
                        description,
                    }),
                }
            );

            const data =
                response.status !== 204
                    ? await response.json()
                    : null;

            if (!response.ok) {
                throw new Error(
                    data?.message ||
                    data?.error ||
                    "Impossible d'enregistrer la catégorie."
                );
            }

            await loadCategories();

            closeFormModal();

        } catch (err) {
            console.error(err);

            formError =
                err.message ||
                "Impossible d'enregistrer la catégorie.";
        }
    }


    function askDelete(category) {
        categoryToDelete =
            category;

        showDeleteModal = true;
    }


    function cancelDelete() {
        categoryToDelete = null;

        showDeleteModal = false;
    }


    async function confirmDelete() {
        if (!categoryToDelete) {
            return;
        }

        const token = getToken();

        if (!token) {
            error =
                "Vous devez être connecté.";

            cancelDelete();

            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/api/categories/${categoryToDelete.id}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                let message =
                    "Impossible de supprimer cette catégorie.";

                try {
                    const data =
                        await response.json();

                    message =
                        data?.message ||
                        data?.error ||
                        message;

                } catch {
                    // aucune réponse JSON
                }

                throw new Error(message);
            }

            await loadCategories();

            cancelDelete();

        } catch (err) {
            console.error(err);

            error =
                err.message ||
                "Impossible de supprimer cette catégorie.";

            cancelDelete();
        }
    }


    onMount(() => {
        loadCategories();
    });
</script>


<main class="admin-page">

    <h1>
        GESTION DES CATÉGORIES
    </h1>


    <a
        class="back"
        href="#/admin"
    >
        ← Retour au tableau de bord
    </a>


    <section class="admin-container">

        <button
            class="add"
            type="button"
            onclick={openAddModal}
        >
            AJOUTER UNE CATÉGORIE
        </button>


        {#if error}

            <p class="error-message">
                {error}
            </p>

        {/if}


        {#if loading}

            <p class="empty-message">
                Chargement des catégories...
            </p>


        {:else if categories.length === 0}

            <p class="empty-message">
                Aucune catégorie disponible.
            </p>


        {:else}

            {#each categories as category}

                <div class="item-card">

                    <div>

                        <h2>
                            {category.name}
                        </h2>

                        <p>
                            {category.description ||
                            "Aucune description."}
                        </p>

                    </div>


                    <div class="actions">

                        <button
                            class="edit"
                            type="button"
                            onclick={() =>
                                openEditModal(category)}
                        >
                            MODIFIER
                        </button>


                        <button
                            class="delete"
                            type="button"
                            onclick={() =>
                                askDelete(category)}
                        >
                            SUPPRIMER
                        </button>

                    </div>

                </div>

            {/each}

        {/if}

    </section>

</main>


{#if showFormModal}

    <div class="modal-overlay">

        <div class="modal">

            <h2>
                {editingCategory
                    ? "MODIFIER LA CATÉGORIE"
                    : "AJOUTER UNE CATÉGORIE"}
            </h2>


            <label for="category-name">
                Nom
            </label>

            <input
                id="category-name"
                type="text"
                bind:value={formName}
                placeholder="Nom de la catégorie"
            />


            <label for="category-description">
                Description
            </label>

            <textarea
                id="category-description"
                bind:value={formDescription}
                placeholder="Description de la catégorie"
            ></textarea>


            {#if formError}

                <p class="modal-error">
                    {formError}
                </p>

            {/if}


            <div class="modal-actions">

                <button
                    class="cancel-button"
                    type="button"
                    onclick={closeFormModal}
                >
                    ANNULER
                </button>


                <button
                    class="confirm-button"
                    type="button"
                    onclick={saveCategory}
                >
                    {editingCategory
                        ? "ENREGISTRER"
                        : "AJOUTER"}
                </button>

            </div>

        </div>

    </div>

{/if}


{#if showDeleteModal}

    <div class="modal-overlay">

        <div class="modal delete-modal">

            <h2>
                SUPPRIMER LA CATÉGORIE
            </h2>


            <p>
                Voulez-vous vraiment supprimer
                <strong>
                    {categoryToDelete?.name}
                </strong>
                ?
            </p>


            <p class="warning">
                Cette action est irréversible.
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
                    class="delete-confirm-button"
                    type="button"
                    onclick={confirmDelete}
                >
                    SUPPRIMER
                </button>

            </div>

        </div>

    </div>

{/if}


<style>
    .admin-page {
        width: 90%;
        max-width: 1000px;

        margin: 40px auto;
    }


    .admin-page h1 {
        text-align: center;

        color: #d4af37;

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


    /* AJOUT */

    .add {
        background-color: #d4af37;
        color: black;

        border: none;
        border-radius: 4px;

        padding: 10px 15px;
        margin-bottom: 20px;

        cursor: pointer;
        font-weight: bold;
    }


    .add:hover {
        background-color: #f0c94d;
    }


    /* CARTE */

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


    .item-card:last-child {
        margin-bottom: 0;
    }


    .item-card h2 {
        color: #d4af37;

        margin: 0 0 8px;
    }


    .item-card p {
        color: white;

        margin: 0;
    }


    /* ACTIONS */

    .actions {
        display: flex;

        gap: 10px;
    }


    .edit,
    .delete {
        border: none;
        border-radius: 4px;

        padding: 10px 15px;

        cursor: pointer;
        font-weight: bold;
    }


    .edit {
        background-color: #d4af37;
        color: black;
    }


    .edit:hover {
        background-color: #f0c94d;
    }


    .delete {
        background-color: #d4af37;
        color: black;
    }


    .delete:hover {
        background-color: #f0c94d;
    }


    /* MESSAGES */

    .empty-message {
        color: white;

        text-align: center;

        padding: 25px 15px;

        background-color: #111526;

        border-radius: 6px;
    }


    .error-message {
        padding: 12px;

        margin-bottom: 15px;

        background-color: #351111;

        border: 1px solid #ff5c5c;
        border-radius: 5px;

        color: #ff8a8a;
    }


    /* MODALES */

    .modal-overlay {
        position: fixed;

        inset: 0;

        z-index: 1000;

        display: flex;

        align-items: center;
        justify-content: center;

        padding: 20px;

        background-color:
            rgba(0, 0, 0, 0.75);
    }


    .modal {
        width: 100%;
        max-width: 480px;

        padding: 28px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 10px;

        box-shadow:
            0 15px 40px
            rgba(0, 0, 0, 0.7);
    }


    .modal h2 {
        margin-top: 0;
        margin-bottom: 25px;

        color: #d4af37;

        text-align: center;
    }


    .modal label {
        display: block;

        margin: 15px 0 7px;

        color: white;

        font-weight: bold;
    }


    .modal input,
    .modal textarea {
        box-sizing: border-box;

        width: 100%;

        padding: 12px;

        background-color: #111526;

        border: 1px solid #d4af37;
        border-radius: 5px;

        color: white;

        font-family: inherit;
        font-size: 16px;
    }


    .modal textarea {
        min-height: 110px;

        resize: vertical;
    }


    .modal p {
        color: white;

        line-height: 1.6;

        text-align: center;
    }


    .modal strong {
        color: #d4af37;
    }


    .warning {
        color: #ff7777 !important;

        font-weight: bold;
    }


    .modal-error {
        color: #ff7777 !important;

        margin-top: 15px;
    }


    .modal-actions {
        display: flex;

        justify-content: center;

        gap: 12px;

        margin-top: 25px;
    }


    .modal-actions button {
        min-width: 120px;

        padding: 11px 18px;

        border-radius: 5px;

        cursor: pointer;

        font-weight: bold;
    }


    .cancel-button {
        background-color: transparent;

        border: 1px solid #d4af37;

        color: #d4af37;
    }


    .cancel-button:hover {
        background-color: #d4af37;

        color: black;
    }


    .confirm-button {
        background-color: #d4af37;

        border: 1px solid #d4af37;

        color: black;
    }


    .confirm-button:hover {
        background-color: #f0c94d;
    }


    .delete-confirm-button {
        background-color: #a51919;

        border: 1px solid #ff5c5c;

        color: white;
    }


    .delete-confirm-button:hover {
        background-color: #c62828;
    }


    /* TABLETTE */

    @media (max-width: 768px) {

        .admin-page {
            width: 94%;
        }


        .item-card {
            align-items: flex-start;
        }


        .actions {
            flex-direction: column;
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


        .add {
            width: 100%;
        }


        .item-card {
            flex-direction: column;

            align-items: stretch;
        }


        .item-card div:first-child {
            text-align: center;
        }


        .actions {
            width: 100%;

            flex-direction: column;
        }


        .edit,
        .delete {
            width: 100%;
        }


        .modal {
            padding: 22px;
        }


        .modal-actions {
            flex-direction: column;
        }


        .modal-actions button {
            width: 100%;
        }
    }
</style>