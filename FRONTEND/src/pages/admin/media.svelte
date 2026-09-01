<script>
    let mediaList = [
        {
            id: "petite-sirene",
            title: "La Petite Sirène",
            type: "Film",
            image: "/img-home/sirène.jpg",
        },
        {
            id: "super-mario",
            title: "Super Mario Bros",
            type: "Film",
            image: "/img-home/Mario.jpg",
        },
        {
            id: "ratatouille",
            title: "Ratatouille",
            type: "Film",
            image: "/img-card-sct-1/ratatouille.jpg",
        },
        {
            id: "soupe-choux",
            title: "La Soupe aux Choux",
            type: "Film",
            image: "/img-card-sct-1/choux.png",
        },
    ];

    function addMedia() {
        const title = window.prompt(
            "Nom du film ou de la série :"
        );

        if (!title || !title.trim()) {
            return;
        }

        const type = window.prompt(
            "Type : Film ou Série ?",
            "Film"
        );

        if (!type || !type.trim()) {
            return;
        }

        const newMedia = {
            id: Date.now().toString(),
            title: title.trim(),
            type: type.trim(),
            image: "/img-home/Mario.jpg",
        };

        mediaList = [
            ...mediaList,
            newMedia,
        ];
    }

    function editMedia(id = "") {
        const media = mediaList.find(
            (item) => item.id === id
        );

        if (!media) {
            return;
        }

        const newTitle = window.prompt(
            "Modifier le nom :",
            media.title
        );

        if (!newTitle || !newTitle.trim()) {
            return;
        }

        const newType = window.prompt(
            "Modifier le type :",
            media.type
        );

        mediaList = mediaList.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    title: newTitle.trim(),
                    type:
                        newType?.trim() ||
                        item.type,
                };
            }

            return item;
        });
    }

    function deleteMedia(id = "") {
        const confirmation = window.confirm(
            "Voulez-vous vraiment supprimer ce film ou cette série ?"
        );

        if (confirmation) {
            mediaList = mediaList.filter(
                (media) => media.id !== id
            );
        }
    }
</script>

<main class="admin-page">
    <h1>GESTION DES FILMS ET SÉRIES</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">

        <button
            class="add"
            type="button"
            on:click={addMedia}
        >
            AJOUTER UN FILM OU UNE SÉRIE
        </button>

        {#if mediaList.length === 0}

            <p class="empty-message">
                Aucun film ou série disponible.
            </p>

        {:else}

            {#each mediaList as media}

                <div class="item-card">

                    <img
                        src={media.image}
                        alt={media.title}
                    />

                    <div class="info">
                        <h2>
                            {media.title}
                        </h2>

                        <p>
                            Type : {media.type}
                        </p>
                    </div>

                    <div class="actions">

                        <button
                            class="edit"
                            type="button"
                            on:click={() => editMedia(media.id)}
                        >
                            MODIFIER
                        </button>

                        <button
                            class="delete"
                            type="button"
                            on:click={() => deleteMedia(media.id)}
                        >
                            SUPPRIMER
                        </button>

                    </div>

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

    /* BOUTON AJOUT */

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

    .item-card img {
        width: 100px;
        height: 100px;

        object-fit: cover;

        border: 1px solid #d4af37;
        border-radius: 4px;
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

        margin: 0;
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

    .delete {
        background-color: #e24d4d;
        color: white;
    }

    .delete:hover {
        background-color: #d13f3f;
    }

    /* LISTE VIDE */

    .empty-message {
        color: white;

        text-align: center;

        padding: 25px 15px;

        background-color: #111526;

        border-radius: 6px;
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

        .item-card img {
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
    }
</style>