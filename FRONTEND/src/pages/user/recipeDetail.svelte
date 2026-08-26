<script>
    export let params = {
        id: "",
    };

    const recipes = [
        {
            id: "petite-sirene",

            title: "POISSON RÔTI ET LÉGUMES AU FOUR",
            movie: "La Petite Sirène",

            image: "/img-card-sct-1/poisson.jpg",
            movieImage: "/img-card-sct-1/sirène.jpg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "30 min",
            servings: "4",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "1989",

            ingredients: [
                "2 filets de poisson",
                "2 courgettes",
                "2 carottes",
                "1 poivron",
                "1 oignon",
                "Huile d'olive",
                "Citron",
                "Sel",
                "Poivre",
            ],

            preparation: [
                "Préchauffez le four à 180°C.",
                "Coupez les légumes en morceaux.",
                "Disposez les légumes dans un plat allant au four.",
                "Ajoutez les filets de poisson.",
                "Versez un filet d'huile d'olive et de citron.",
                "Salez et poivrez.",
                "Faites cuire environ 30 minutes.",
            ],
        },

        {
            id: "super-mario",

            title: "TAGLIATELLES CRÉMEUSES AUX CHAMPIGNONS",
            movie: "Super Mario Bros",

            image: "/img-card-sct-1/champignon.jpg",
            movieImage: "/img-home/Mario.jpg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "20 min",
            servings: "4",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2023",

            ingredients: [
                "300 g de tagliatelles",
                "250 g de champignons",
                "20 cl de crème fraîche",
                "1 oignon",
                "1 gousse d'ail",
                "Huile d'olive",
                "Sel",
                "Poivre",
                "Persil",
            ],

            preparation: [
                "Faites cuire les tagliatelles dans une casserole d'eau bouillante salée.",
                "Émincez l'oignon et les champignons.",
                "Faites revenir l'oignon avec un peu d'huile d'olive.",
                "Ajoutez les champignons.",
                "Ajoutez la crème fraîche, le sel et le poivre.",
                "Ajoutez les tagliatelles dans la sauce.",
                "Ajoutez du persil avant de servir.",
            ],
        },

        {
            id: "ratatouille",

            title: "RATATOUILLE AUX LÉGUMES",
            movie: "Ratatouille",

            image: "/img-card-sct-1/ratatouille.jpg",
            movieImage: "/img-card-sct-1/ratatouille.jpg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "30 min",
            cookTime: "45 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Film",
            releaseDate: "2007",

            ingredients: [
                "2 courgettes",
                "1 aubergine",
                "4 tomates",
                "1 poivron rouge",
                "1 oignon",
                "1 gousse d'ail",
                "Huile d'olive",
                "Herbes de Provence",
                "Sel",
                "Poivre",
            ],

            preparation: [
                "Préchauffez le four à 180°C.",
                "Lavez et coupez les légumes en fines rondelles.",
                "Disposez les légumes en alternance dans un plat.",
                "Ajoutez l'ail et les herbes de Provence.",
                "Versez un filet d'huile d'olive.",
                "Salez et poivrez.",
                "Faites cuire environ 45 minutes.",
            ],
        },

        {
            id: "soupe-choux",

            title: "SOUPE AUX CHOUX TRADITIONNELLE",
            movie: "La Soupe aux Choux",

            image: "/img-card-sct-1/choux.png",
            movieImage: "/img-home/La_Soupe_aux_choux.jpg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "45 min",
            servings: "6",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "1981",

            ingredients: [
                "1 chou vert",
                "3 pommes de terre",
                "3 carottes",
                "1 oignon",
                "2 poireaux",
                "1,5 litre d'eau",
                "Sel",
                "Poivre",
            ],

            preparation: [
                "Lavez et découpez tous les légumes.",
                "Faites revenir l'oignon dans une grande casserole.",
                "Ajoutez les carottes, les poireaux et les pommes de terre.",
                "Ajoutez le chou.",
                "Recouvrez avec l'eau.",
                "Salez et poivrez.",
                "Laissez mijoter environ 45 minutes.",
            ],
        },

        {
            id: "doctor-who",

            title: "TOURTE DU TARDIS",
            movie: "Doctor Who",

            image: "/img-home/who.webp",
            movieImage: "/img-home/who.webp",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "30 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Série",
            releaseDate: "1963",

            ingredients: [
                "2 pâtes feuilletées",
                "400 g de poulet",
                "200 g de champignons",
                "20 cl de crème",
                "1 oignon",
                "1 œuf",
                "Sel",
                "Poivre",
            ],

            preparation: [
                "Découpez le poulet en morceaux.",
                "Faites revenir le poulet, l'oignon et les champignons.",
                "Ajoutez la crème.",
                "Disposez une pâte dans un moule.",
                "Ajoutez la préparation.",
                "Recouvrez avec la deuxième pâte.",
                "Badigeonnez avec l'œuf et enfournez à 180°C pendant 30 minutes.",
            ],
        },

        {
            id: "charlie-chocolaterie",

            title: "MOELLEUX AU CHOCOLAT ET CARAMEL",
            movie: "Charlie et la Chocolaterie",

            image: "/img-home/chocolat.webp",
            movieImage: "/img-home/chocolat.webp",

            category: "Dessert",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "20 min",
            servings: "6",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2005",

            ingredients: [
                "200 g de chocolat noir",
                "100 g de beurre",
                "100 g de sucre",
                "3 œufs",
                "50 g de farine",
                "Caramel",
            ],

            preparation: [
                "Faites fondre le chocolat avec le beurre.",
                "Ajoutez le sucre.",
                "Ajoutez les œufs.",
                "Incorporez la farine.",
                "Versez la préparation dans un moule.",
                "Ajoutez un peu de caramel.",
                "Faites cuire environ 20 minutes à 180°C.",
            ],
        },

        {
            id: "vice-versa",

            title: "CUPCAKES DES ÉMOTIONS",
            movie: "Vice-Versa",

            image: "/img-home/vice versa.jpg",
            movieImage: "/img-home/vice versa.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "20 min",
            servings: "8",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2015",

            ingredients: [
                "200 g de farine",
                "100 g de sucre",
                "2 œufs",
                "100 g de beurre",
                "10 cl de lait",
                "1 sachet de levure",
                "Crème pour le glaçage",
                "Colorants alimentaires",
            ],

            preparation: [
                "Mélangez la farine, le sucre et la levure.",
                "Ajoutez les œufs et le beurre fondu.",
                "Ajoutez progressivement le lait.",
                "Versez la pâte dans des moules à cupcakes.",
                "Faites cuire 20 minutes à 180°C.",
                "Préparez plusieurs glaçages colorés.",
                "Décorez les cupcakes selon les différentes émotions.",
            ],
        },

        {
            id: "ne-quelque-part",

            title: "MAKROUTS AUX DATTES",
            movie: "Né quelque part",

            image: "/img-home/né.jpg",
            movieImage: "/img-home/né.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "30 min",
            cookTime: "20 min",
            servings: "8",
            difficulty: "Moyen",

            mediaType: "Film",
            releaseDate: "2013",

            ingredients: [
                "500 g de semoule",
                "200 g de pâte de dattes",
                "150 g de beurre",
                "Eau de fleur d'oranger",
                "Miel",
            ],

            preparation: [
                "Mélangez la semoule et le beurre.",
                "Ajoutez progressivement l'eau de fleur d'oranger.",
                "Formez un rouleau de pâte.",
                "Ajoutez la pâte de dattes au centre.",
                "Découpez les makrouts.",
                "Faites-les cuire ou frire.",
                "Trempez-les dans le miel.",
            ],
        },

        {
            id: "odyssee-pi",

            title: "RIZ AU CURRY ET LAIT DE COCO",
            movie: "L'Odyssée de Pi",

            image: "/img-home/odyssé.webp",
            movieImage: "/img-home/odyssé.webp",

            category: "Plat principal",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "20 min",
            servings: "4",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2012",

            ingredients: [
                "250 g de riz",
                "40 cl de lait de coco",
                "1 oignon",
                "2 cuillères de curry",
                "1 poivron",
                "1 carotte",
                "Huile",
                "Sel",
            ],

            preparation: [
                "Faites cuire le riz.",
                "Émincez l'oignon.",
                "Découpez les légumes.",
                "Faites revenir les légumes dans une poêle.",
                "Ajoutez le curry.",
                "Versez le lait de coco.",
                "Ajoutez le riz et mélangez.",
            ],
        },
    ];

    $: recipe = recipes.find(
        (item) => item.id === params.id
    );
</script>

<main class="recipe-detail-page">

    {#if recipe}

        <div class="detail-layout">

            <!-- RECETTE -->

            <section class="recipe-card-detail">

                <div class="recipe-header">

                    <div>
                        <h1>{recipe.title}</h1>

                        <p class="movie-name">
                            Inspirée de {recipe.movie}
                        </p>
                    </div>

                    <div class="author">
                        <p>
                            <strong>Auteur :</strong>
                            {recipe.author}
                        </p>
                    </div>

                </div>

                <img
                    class="recipe-image"
                    src={recipe.image}
                    alt={recipe.title}
                />

                <!-- INFORMATIONS -->

                <div class="recipe-stats">

                    <div class="stat">
                        <span>⏱️</span>
                        <p>PRÉPARATION</p>
                        <strong>{recipe.prepTime}</strong>
                    </div>

                    <div class="stat">
                        <span>🍳</span>
                        <p>CUISSON</p>
                        <strong>{recipe.cookTime}</strong>
                    </div>

                    <div class="stat">
                        <span>👥</span>
                        <p>PORTIONS</p>
                        <strong>{recipe.servings}</strong>
                    </div>

                    <div class="stat">
                        <span>📊</span>
                        <p>DIFFICULTÉ</p>
                        <strong>{recipe.difficulty}</strong>
                    </div>

                    <div class="stat">
                        <span>📁</span>
                        <p>CATÉGORIE</p>
                        <strong>{recipe.category}</strong>
                    </div>

                </div>

                <!-- INGREDIENTS -->

                <div class="ingredients">

                    <h2>🍲 INGRÉDIENTS</h2>

                    <ul>
                        {#each recipe.ingredients as ingredient}
                            <li>{ingredient}</li>
                        {/each}
                    </ul>

                </div>

            </section>

            <!-- FILM / SERIE -->

            <aside class="movie-card">

                <img
                    src={recipe.movieImage}
                    alt={recipe.movie}
                />

                <h2>{recipe.movie}</h2>

                <p class="media-type">
                    🎬 {recipe.mediaType}
                </p>

                <h3>INFO</h3>

                <div class="line"></div>

                <p>
                    <strong>Sortie :</strong>
                    {recipe.releaseDate}
                </p>

            </aside>

        </div>

        <!-- INSTRUCTIONS -->

        <section class="instructions">

            <h2>INSTRUCTIONS</h2>

            <div class="instructions-grid">

                {#each recipe.preparation as step, index}

                    <div class="instruction-card">

                        <span class="step-number">
                            {index + 1}
                        </span>

                        <p>{step}</p>

                    </div>

                {/each}

            </div>

        </section>

        <!-- BOUTONS -->

        <div class="buttons">

            <a class="back" href="#/recipes">
                ← RETOUR AUX RECETTES
            </a>

            <a
                class="favorite"
                href="#/user/favorite"
            >
                ⭐ VOIR MES FAVORIS
            </a>

        </div>

    {:else}

        <section class="recipe-not-found">

            <h1>RECETTE INTROUVABLE</h1>

            <p>
                Cette recette n'existe pas ou n'est pas encore disponible.
            </p>

            <a href="#/recipes">
                ← RETOUR AUX RECETTES
            </a>

        </section>

    {/if}

</main>

<style>
    .recipe-detail-page {
        width: 95%;
        max-width: 1200px;

        margin: 40px auto 60px;
    }

    /* DISPOSITION PRINCIPALE */

    .detail-layout {
        display: grid;

        grid-template-columns: 2fr 1fr;

        gap: 25px;

        align-items: start;
    }

    /* CARTE RECETTE */

    .recipe-card-detail {
        overflow: hidden;

        background-color: #351010;

        border: 1px solid #d4af37;
        border-radius: 8px;
    }

    /* ENTETE */

    .recipe-header {
        padding: 20px;

        display: flex;

        justify-content: space-between;
        align-items: flex-start;

        gap: 20px;
    }

    .recipe-header h1 {
        color: #d4af37;

        margin: 0 0 10px;

        font-size: 25px;
    }

    .movie-name {
        color: #e5b936;

        margin: 0;

        font-style: italic;
    }

    .author {
        min-width: 120px;

        color: white;

        text-align: right;
    }

    .author p {
        margin: 0;
    }

    .author strong {
        color: #d4af37;
    }

    /* IMAGE RECETTE */

    .recipe-image {
        display: block;

        width: 100%;
        height: 350px;

        object-fit: cover;
    }

    /* INFORMATIONS */

    .recipe-stats {
        display: grid;

        grid-template-columns: repeat(5, 1fr);

        gap: 10px;

        padding: 18px 10px;

        background-color: #d4af37;

        color: black;

        text-align: center;
    }

    .stat span {
        display: flex;

        align-items: center;
        justify-content: center;

        width: 38px;
        height: 38px;

        margin: 0 auto 8px;

        background-color: #9f8326;

        border-radius: 50%;

        font-size: 20px;
    }

    .stat p {
        margin: 5px 0;

        font-size: 11px;
    }

    .stat strong {
        font-size: 12px;
    }

    /* INGREDIENTS */

    .ingredients {
        padding: 25px;

        text-align: center;
    }

    .ingredients h2 {
        color: #d4af37;

        font-size: 22px;
    }

    .ingredients ul {
        margin: 20px 0 0;

        padding: 0;

        list-style: none;
    }

    .ingredients li {
        display: inline;

        color: white;

        line-height: 1.8;
    }

    .ingredients li:not(:last-child)::after {
        content: " - ";
    }

    /* CARTE FILM */

    .movie-card {
        padding: 15px;

        background-color: #111;

        border: 1px solid #d4af37;
        border-radius: 8px;

        text-align: center;
    }

    .movie-card img {
        width: 100%;
        height: 300px;

        object-fit: cover;

        border: 1px solid #d4af37;
        border-radius: 6px;
    }

    .movie-card h2 {
        margin: 15px 0 5px;

        color: #d4af37;
    }

    .movie-card h3 {
        margin-top: 25px;

        color: #d4af37;

        text-align: left;
    }

    .movie-card p {
        color: white;
    }

    .movie-card strong {
        color: #d4af37;
    }

    .media-type {
        color: #aaa !important;
    }

    .line {
        border-bottom: 1px solid #d4af37;

        margin-bottom: 15px;
    }

    /* INSTRUCTIONS */

    .instructions {
        margin-top: 45px;
    }

    .instructions h2 {
        color: #d4af37;

        margin-bottom: 25px;
    }

    .instructions-grid {
        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 20px;
    }

    .instruction-card {
        min-height: 130px;

        padding: 20px;

        background-color: #111;

        border: 1px solid #554b27;
        border-radius: 6px;
    }

    .instruction-card p {
        color: white;

        line-height: 1.5;
    }

    .step-number {
        display: flex;

        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;

        margin-bottom: 15px;

        background-color: #d4af37;
        color: black;

        border-radius: 50%;

        font-weight: bold;
    }

    /* BOUTONS */

    .buttons {
        display: flex;

        justify-content: space-between;

        gap: 15px;

        margin-top: 35px;
    }

    .back,
    .favorite {
        padding: 12px 15px;

        border-radius: 4px;

        font-weight: bold;

        text-decoration: none;
    }

    .back {
        background-color: #d4af37;
        color: black;
    }

    .favorite {
        background-color: #e24d4d;
        color: white;
    }

    /* RECETTE INTROUVABLE */

    .recipe-not-found {
        padding: 40px 20px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;

        text-align: center;
    }

    .recipe-not-found h1 {
        color: #d4af37;
    }

    .recipe-not-found p {
        color: white;
    }

    .recipe-not-found a {
        display: inline-block;

        margin-top: 20px;
        padding: 10px 15px;

        background-color: #d4af37;
        color: black;

        border-radius: 4px;

        text-decoration: none;
        font-weight: bold;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .detail-layout {
            grid-template-columns: 1fr;
        }

        .movie-card {
            width: 100%;
            max-width: 400px;

            margin: 0 auto;
        }

        .recipe-stats {
            grid-template-columns: repeat(3, 1fr);
        }

        .instructions-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* MOBILE */

    @media (max-width: 375px) {
        .recipe-detail-page {
            width: 95%;

            margin: 25px auto;
        }

        .recipe-header {
            flex-direction: column;
        }

        .author {
            text-align: left;
        }

        .recipe-image {
            height: 230px;
        }

        .recipe-stats {
            grid-template-columns: repeat(2, 1fr);
        }

        .movie-card img {
            height: 250px;
        }

        .instructions-grid {
            grid-template-columns: 1fr;
        }

        .buttons {
            flex-direction: column;
        }

        .back,
        .favorite {
            width: 100%;

            text-align: center;

            box-sizing: border-box;
        }
    }

    /* PETIT MOBILE */

    @media (max-width: 400px) {
        .recipe-header {
            padding: 15px;
        }

        .recipe-header h1 {
            font-size: 22px;
        }

        .recipe-stats {
            grid-template-columns: 1fr 1fr;
        }

        .ingredients {
            padding: 20px 15px;
        }
    }
</style>