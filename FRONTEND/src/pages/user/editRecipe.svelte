<main class="edit-recipe-page">
    <h1>✏️ MODIFIER MA RECETTE</h1>

    <p class="subtitle">Modifiez les informations de votre recette</p>

    <section class="recipe-container">
        <form class="recipe-form">
            <!-- TITRE -->

            <label for="title"> Titre de la recette </label>

            <input
                type="text"
                id="title"
                name="title"
                value="Tagliatelles crémeuses aux champignons"
                required
            />

            <!-- FILM OU SERIE -->

            <label for="movie"> Film ou série associé </label>

            <input
                type="text"
                id="movie"
                name="movie"
                value="Super Mario Bros"
                required
            />

            <!-- CATEGORIE -->

            <label for="category"> Catégorie </label>

            <select id="category" name="category" required>
                <option value="entree"> Entrée </option>

                <option value="plat" selected> Plat principal </option>

                <option value="dessert"> Dessert </option>

                <option value="boisson"> Boisson </option>
            </select>

            <!-- IMAGE -->

            <label for="image"> Modifier l'image </label>

            <input type="file" id="image" name="image" accept="image/*" />

            <!-- TEMPS -->

            <div class="time-container">
                <div>
                    <label for="preparation"> Temps de préparation </label>

                    <input
                        type="number"
                        id="preparation"
                        name="preparation"
                        value="20"
                        min="1"
                        required
                    />
                </div>

                <div>
                    <label for="cooking"> Temps de cuisson </label>

                    <input
                        type="number"
                        id="cooking"
                        name="cooking"
                        value="15"
                        min="0"
                        required
                    />
                </div>
            </div>

            <!-- PERSONNES -->

            <label for="servings"> Nombre de personnes </label>

            <input
                type="number"
                id="servings"
                name="servings"
                value="4"
                min="1"
                required
            />

            <!-- INGREDIENTS -->

            <label for="ingredients"> Ingrédients </label>

            <textarea id="ingredients" name="ingredients" required
                >400 g de tagliatelles 250 g de champignons 20 cl de crème
                fraîche 1 oignon Sel et poivre</textarea
            >

            <!-- PREPARATION -->

            <label for="instructions"> Étapes de préparation </label>

            <textarea id="instructions" name="instructions" required
                >1. Faites cuire les tagliatelles. 2. Coupez les champignons et
                l'oignon. 3. Faites revenir les champignons et l'oignon. 4.
                Ajoutez la crème fraîche. 5. Mélangez avec les tagliatelles et
                servez.</textarea
            >

            <!-- DESCRIPTION -->

            <label for="description"> Description </label>

            <textarea id="description" name="description"
                >Une recette de tagliatelles crémeuses aux champignons inspirée
                de l'univers de Super Mario Bros.</textarea
            >

            <!-- BOUTONS -->

            <div class="buttons">
                <button class="submit" type="submit">
                    ENREGISTRER LES MODIFICATIONS
                </button>

                <a class="cancel" href="#/user/profile"> ANNULER </a>
            </div>
        </form>
    </section>
</main>

<style>
    .edit-recipe-page {
        width: 90%;
        max-width: 800px;

        margin: 40px auto;
    }

    /* TITRE */

    .edit-recipe-page h1 {
        color: #d4af37;

        text-align: center;

        margin-bottom: 10px;
    }

    .subtitle {
        color: white;

        text-align: center;

        margin-bottom: 35px;
    }

    /* CONTENEUR */

    .recipe-container {
        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        padding: 25px;
    }

    /* FORMULAIRE */

    .recipe-form {
        display: flex;
        flex-direction: column;
    }

    .recipe-form label {
        color: white;

        margin-top: 15px;
        margin-bottom: 7px;
    }

    .recipe-form input,
    .recipe-form select,
    .recipe-form textarea {
        width: 100%;

        padding: 12px;

        background-color: #111526;
        color: white;

        border: 1px solid #3d3d48;
        border-radius: 5px;

        outline: none;
    }

    .recipe-form input:focus,
    .recipe-form select:focus,
    .recipe-form textarea:focus {
        border-color: #d4af37;
    }

    /* TEXTAREA */

    .recipe-form textarea {
        min-height: 130px;

        resize: vertical;
    }

    /* TEMPS */

    .time-container {
        display: grid;

        grid-template-columns: repeat(2, 1fr);

        gap: 20px;
    }

    .time-container div {
        display: flex;
        flex-direction: column;
    }

    /* BOUTONS */

    .buttons {
        display: flex;

        gap: 10px;

        margin-top: 25px;
    }

    .submit,
    .cancel {
        padding: 12px 20px;

        border-radius: 4px;

        font-weight: bold;

        text-align: center;
    }

    .submit {
        background-color: #d4af37;
        color: black;

        border: none;

        cursor: pointer;
    }

    .cancel {
        background-color: #e24d4d;
        color: white;

        text-decoration: none;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .edit-recipe-page {
            width: 94%;
        }

        .recipe-container {
            padding: 20px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .edit-recipe-page {
            width: 95%;

            margin: 25px auto;
        }

        .edit-recipe-page h1 {
            font-size: 27px;
        }

        .subtitle {
            font-size: 14px;
        }

        .recipe-container {
            padding: 15px;
        }

        .time-container {
            grid-template-columns: 1fr;

            gap: 0;
        }

        .recipe-form input,
        .recipe-form select,
        .recipe-form textarea {
            font-size: 16px;
        }

        .buttons {
            flex-direction: column;
        }

        .submit,
        .cancel {
            width: 100%;
        }
    }
</style>
