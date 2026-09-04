<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3000";

    let mediaList = [];
    let loading = true;
    let error = "";

    let showFormModal = false;
    let showDeleteModal = false;

    let editingMedia = null;
    let mediaToDelete = null;

    let formTitle = "";
    let formType = "film";
    let formImage = "";
    let formDescription = "";
    let formReleaseDate = "";

    let formError = "";


    function getToken() {
        return localStorage.getItem("token");
    }


    async function loadMedia() {
        loading = true;
        error = "";

        try {
            const response = await fetch(
                `${API_URL}/api/media`
            );

            if (!response.ok) {
                throw new Error(
                    "Impossible de charger les films et séries."
                );
            }

            const data = await response.json();

            mediaList =
                Array.isArray(data)
                    ? data
                    : [];

        } catch (err) {
            console.error(err);

            error =
                "Impossible de charger les films et séries.";

        } finally {
            loading = false;
        }
    }


    function openAddModal() {
        editingMedia = null;

        formTitle = "";
        formType = "film";
        formImage = "";
        formDescription = "";
        formReleaseDate = "";
        formError = "";

        showFormModal = true;
    }


    function openEditModal(media) {
        editingMedia = media;

        formTitle =
            media.title || "";

        formType =
            media.type || "film";

        formImage =
            media.image_url || "";

        formDescription =
            media.description || "";

        formReleaseDate =
            media.release_date
                ? String(media.release_date).slice(0, 10)
                : "";

        formError = "";

        showFormModal = true;
    }


    function closeFormModal() {
        showFormModal = false;

        editingMedia = null;

        formTitle = "";
        formType = "film";
        formImage = "";
        formDescription = "";
        formReleaseDate = "";
        formError = "";
    }


    async function saveMedia() {
        const title =
            formTitle.trim();

        if (!title) {
            formError =
                "Le titre est obligatoire.";

            return;
        }


        if (
            formType !== "film" &&
            formType !== "serie"
        ) {
            formError =
                "Le type doit être Film ou Série.";

            return;
        }


        const token = getToken();

        if (!token) {
            formError =
                "Vous devez être connecté.";

            return;
        }


        const payload = {
            title,
            type: formType,

            image_url:
                formImage.trim() || null,

            description:
                formDescription.trim() || null,

            release_date:
                formReleaseDate || null,
        };


        try {
            const isEditing =
                Boolean(editingMedia);

            const url =
                isEditing
                    ? `${API_URL}/api/media/${editingMedia.id}`
                    : `${API_URL}/api/media`;


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

                    body:
                        JSON.stringify(payload),
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
                    "Impossible d'enregistrer le film ou la série."
                );
            }


            await loadMedia();

            closeFormModal();

        } catch (err) {
            console.error(err);

            formError =
                err.message ||
                "Impossible d'enregistrer le film ou la série.";
        }
    }


    function askDelete(media) {
        mediaToDelete = media;

        showDeleteModal = true;
    }


    function cancelDelete() {
        mediaToDelete = null;

        showDeleteModal = false;
    }


    async function confirmDelete() {
        if (!mediaToDelete) {
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
                `${API_URL}/api/media/${mediaToDelete.id}`,
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
                    "Impossible de supprimer ce film ou cette série.";

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


            await loadMedia();

            cancelDelete();

        } catch (err) {
            console.error(err);

            error =
                err.message ||
                "Impossible de supprimer ce film ou cette série.";

            cancelDelete();
        }
    }


    function displayType(type) {
        return type === "serie"
            ? "Série"
            : "Film";
    }


    onMount(() => {
        loadMedia();
    });
</script>


<main class="admin-page">

    <h1>
        GESTION DES FILMS ET SÉRIES
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
            AJOUTER UN FILM OU UNE SÉRIE
        </button>


        {#if error}

            <p class="error-message">
                {error}
            </p>

        {/if}


        {#if loading}

            <p class="empty-message">
                Chargement des films et séries...
            </p>


        {:else if mediaList.length === 0}

            <p class="empty-message">
                Aucun film ou série disponible.
            </p>


        {:else}

            {#each mediaList as media}

                <div class="item-card">

                    {#if media.image_url}

                        <img
                            src={media.image_url}
                            alt={media.title}
                        />

                    {:else}

                        <div class="no-image">
                            🎬
                        </div>

                    {/if}


                    <div class="info">

                        <h2>
                            {media.title}
                        </h2>

                        <p>
                            Type :
                            {displayType(media.type)}
                        </p>


                        {#if media.release_date}

                            <p class="date">
                                Sortie :
                                {media.release_date}
                            </p>

                        {/if}

                    </div>


                    <div class="actions">

                        <button
                            class="edit"
                            type="button"
                            onclick={() =>
                                openEditModal(media)}
                        >
                            MODIFIER
                        </button>


                        <button
                            class="delete"
                            type="button"
                            onclick={() =>
                                askDelete(media)}
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
                {editingMedia
                    ? "MODIFIER LE FILM / LA SÉRIE"
                    : "AJOUTER UN FILM / UNE SÉRIE"}
            </h2>


            <label for="media-title">
                Titre
            </label>

            <input
                id="media-title"
                type="text"
                bind:value={formTitle}
                placeholder="Titre du film ou de la série"
            />


            <label for="media-type">
                Type
            </label>

            <select
                id="media-type"
                bind:value={formType}
            >
                <option value="film">
                    Film
                </option>

                <option value="serie">
                    Série
                </option>
            </select>


            <label for="media-image">
                Image
            </label>

            <input
                id="media-image"
                type="text"
                bind:value={formImage}
                placeholder="/img-card-sct-1/exemple.jpg"
            />


            <label for="media-release">
                Date de sortie
            </label>

            <input
                id="media-release"
                type="date"
                bind:value={formReleaseDate}
            />


            <label for="media-description">
                Description
            </label>

            <textarea
                id="media-description"
                bind:value={formDescription}
                placeholder="Description du film ou de la série"
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
                    onclick={saveMedia}
                >
                    {editingMedia
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
                SUPPRIMER LE MÉDIA
            </h2>


            <p>
                Voulez-vous vraiment supprimer
                <strong>
                    {mediaToDelete?.title}
                </strong>
                ?
            </p>


            <p class="warning">
                ⚠️ Si des recettes utilisent ce film
                ou cette série, elles peuvent également
                être supprimées.
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
        align-items: center;

        gap: 20px;
    }


    .item-card:last-child {
        margin-bottom: 0;
    }


    .item-card img,
    .no-image {
        width: 100px;
        height: 100px;

        flex-shrink: 0;

        border: 1px solid #d4af37;
        border-radius: 4px;
    }


    .item-card img {
        object-fit: cover;
    }


    .no-image {
        display: flex;

        align-items: center;
        justify-content: center;

        background-color: #080b18;

        font-size: 40px;
    }


    /* INFORMATIONS */

    .info {
        flex: 1;
    }


    .info h2 {
        color: #d4af37;

        margin: 0 0 8px;
    }


    .info p {
        color: white;

        margin: 0 0 5px;
    }


    .info .date {
        color: #aaa;

        font-size: 14px;
    }


    /* BOUTONS */

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
        background-color: #e24d4d;

        color: white;
    }


    .delete:hover {
        background-color: #d13f3f;
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
        max-width: 520px;

        max-height: 90vh;
        overflow-y: auto;

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
    .modal select,
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


    .modal select option {
        background-color: #111526;

        color: white;
    }


    .modal textarea {
        min-height: 100px;

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
        margin-top: 15px;

        color: #ff7777 !important;
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


        .item-card img,
        .no-image {
            width: 100%;
            height: 200px;
        }


        .info {
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