<script>
    let categories = [
        {
            id: "entree",
            name: "Entrée",
            description: "Catégorie utilisée pour les entrées.",
        },
        {
            id: "plat-principal",
            name: "Plat principal",
            description: "Catégorie utilisée pour les plats principaux.",
        },
        {
            id: "dessert",
            name: "Dessert",
            description: "Catégorie utilisée pour les desserts.",
        },
        {
            id: "boisson",
            name: "Boisson",
            description: "Catégorie utilisée pour les boissons.",
        },
    ];

    function addCategory() {
        const name = window.prompt(
            "Nom de la nouvelle catégorie :"
        );

        if (!name || !name.trim()) {
            return;
        }

        const description = window.prompt(
            "Description de la catégorie :"
        );

        const newCategory = {
            id: Date.now().toString(),
            name: name.trim(),
            description:
                description?.trim() ||
                "Nouvelle catégorie.",
        };

        categories = [
            ...categories,
            newCategory,
        ];
    }

    function editCategory(id = "") {
        const category = categories.find(
            (item) => item.id === id
        );

        if (!category) {
            return;
        }

        const newName = window.prompt(
            "Modifier le nom de la catégorie :",
            category.name
        );

        if (!newName || !newName.trim()) {
            return;
        }

        const newDescription = window.prompt(
            "Modifier la description :",
            category.description
        );

        categories = categories.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name: newName.trim(),
                    description:
                        newDescription?.trim() ||
                        item.description,
                };
            }

            return item;
        });
    }

    function deleteCategory(id = "") {
        const confirmation = window.confirm(
            "Voulez-vous vraiment supprimer cette catégorie ?"
        );

        if (confirmation) {
            categories = categories.filter(
                (category) => category.id !== id
            );
        }
    }
</script>

<main class="admin-page">
    <h1>GESTION DES CATÉGORIES</h1>

    <a class="back" href="#/admin">
        ← Retour au tableau de bord
    </a>

    <section class="admin-container">
        <button
            class="add"
            type="button"
            onclick={addCategory}
        >
            AJOUTER UNE CATÉGORIE
        </button>

        {#if categories.length === 0}
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
                            {category.description}
                        </p>
                    </div>

                    <div class="actions">
                        <button
                            class="edit"
                            type="button"
                            onclick={() =>
                                editCategory(category.id)}
                        >
                            MODIFIER
                        </button>

                        <button
                            class="delete"
                            type="button"
                            onclick={() =>
                                deleteCategory(category.id)}
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
    }
</style>