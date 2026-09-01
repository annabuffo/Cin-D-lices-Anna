<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    let recipeId = null;
    let recipe = null;
    let loading = true;
    let isFavorite = false;

    onMount(() => {
        // Récupérer l'ID de la recette depuis l'URL
        const hash = window.location.hash;
        const match = hash.match(/#\/user\/recipeDetail\/(\d+)/);
        recipeId = match ? match[1] : null;

        if (!recipeId) {
            loading = false;
            return;
        }

        loadRecipe();
        checkFavorite();
    });

    async function loadRecipe() {
        const token = localStorage.getItem("token");

        try {
            loading = true;
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_URL}/api/recipes/${recipeId}`, {
                headers,
            });

            if (!response.ok) {
                throw new Error("Recette non trouvée");
            }

            recipe = await response.json();
        } catch (error) {
            console.error(error);
            recipe = null;
        } finally {
            loading = false;
        }
    }

    function checkFavorite() {
        const favorites = JSON.parse(localStorage.getItem("cin_delices_favorites") || "[]");
        isFavorite = favorites.includes(Number(recipeId));
    }

    async function toggleFavorite() {
        const favorites = JSON.parse(localStorage.getItem("cin_delices_favorites") || "[]");
        const recipeIdNum = Number(recipeId);

        if (isFavorite) {
            const index = favorites.indexOf(recipeIdNum);
            if (index > -1) {
                favorites.splice(index, 1);
            }
        } else {
            if (!favorites.includes(recipeIdNum)) {
                favorites.push(recipeIdNum);
            }
        }

        localStorage.setItem("cin_delices_favorites", JSON.stringify(favorites));
        isFavorite = !isFavorite;
    }

    function goBack() {
        window.history.back();
    }
</script>

<main class="recipe-detail-page">

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
            id: "petite-sirene-entree",

            title: "SALADIER DE CRABE ET MANGUE",
            movie: "La Petite Sirène",

            image: "/img-card-sct-1/poisson.jpg",
            movieImage: "/img-card-sct-1/sirène.jpg",

            category: "Entrée",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "0 min",
            servings: "2",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "1989",

            ingredients: [
                "200 g de crabes",
                "1 mangue",
                "1 citron vert",
                "1 petite salade",
                "Huile d'olive",
                "Sel",
                "Poivre",
            ],

            preparation: [
                "Coupez la mangue en petits morceaux.",
                "Disposez la salade dans un bol.",
                "Ajoutez le crabe et la mangue.",
                "Assaisonnez avec l'huile et le citron.",
                "Salez, poivrez et servez frais.",
            ],
        },

        {
            id: "super-mario-plat",

            title: "PIZZA TOAD AUX CHAMPIGNONS",
            movie: "Super Mario Bros",

            image: "/img-card-sct-1/champignon.jpg",
            movieImage: "/img-home/Mario.jpg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "20 min",
            servings: "4",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2023",

            ingredients: [
                "1 pâte à pizza",
                "200 g de champignons",
                "150 g de mozzarella",
                "1 tomate",
                "Basilic",
                "Huile d'olive",
            ],

            preparation: [
                "Étalez la pâte à pizza sur une plaque.",
                "Ajoutez les morceaux de tomate et de champignons.",
                "Recouvrez de mozzarella.",
                "Ajoutez un filet d'huile et du basilic.",
                "Enfournez 20 minutes à 200°C.",
            ],
        },

        {
            id: "vice-versa-dessert",

            title: "GÂTEAU DES ÉMOTIONS COLORÉ",
            movie: "Vice-Versa",

            image: "/img-home/vice versa.jpg",
            movieImage: "/img-home/vice versa.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "25 min",
            servings: "8",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2015",

            ingredients: [
                "200 g de farine",
                "150 g de sucre",
                "2 œufs",
                "100 g de beurre",
                "10 cl de lait",
                "Colorants alimentaires",
            ],

            preparation: [
                "Mélangez la farine, le sucre et les œufs.",
                "Ajoutez le beurre fondu et le lait.",
                "Séparez la pâte en plusieurs bols.",
                "Ajoutez des colorants selon les émotions.",
                "Faites cuire 25 minutes à 180°C.",
            ],
        },

        {
            id: "doctor-who-entree",

            title: "VELOUTÉ DU TARDIS",
            movie: "Doctor Who",

            image: "/img-home/who.webp",
            movieImage: "/img-home/who.webp",

            category: "Entrée",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "25 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Série",
            releaseDate: "1963",

            ingredients: [
                "500 g de potiron",
                "1 oignon",
                "1 litre de bouillon",
                "20 cl de crème",
                "Sel",
                "Poivre",
                "Curry",
            ],

            preparation: [
                "Faites revenir l'oignon dans une casserole.",
                "Ajoutez le potiron coupé en morceaux.",
                "Versez le bouillon et laissez mijoter.",
                "Mixez le tout jusqu'à obtenir un velouté lisse.",
                "Ajoutez la crème et les épices avant de servir.",
            ],
        },

        {
            id: "pirates-caraibes-plat",

            title: "POULET ÉPICÉ AUX ÉPICES DES CARAÏBES",
            movie: "Pirates des Caraïbes",

            image: "/img-card-sct-1/pdc3.webp",
            movieImage: "/img-card-sct-1/pdc1.webp",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "35 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Film",
            releaseDate: "2003",

            ingredients: [
                "4 morceaux de poulet",
                "2 échalotes",
                "1 piment",
                "1 citron vert",
                "2 cuillères de sauce soja",
                "Sel",
                "Poivre",
            ],

            preparation: [
                "Mélangez le citron, la sauce soja et les épices.",
                "Faites mariner le poulet.",
                "Faites revenir les échalotes et le piment.",
                "Ajoutez le poulet et laissez cuire.",
                "Servez avec du riz ou des légumes.",
            ],
        },

        {
            id: "pirates-caraibes-dessert",

            title: "TARTE TROPICALE COCO ET ANANAS",
            movie: "Pirates des Caraïbes",

            image: "/img-card-sct-1/pdc4.webp",
            movieImage: "/img-card-sct-1/pdc1.webp",

            category: "Dessert",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "30 min",
            servings: "6",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2003",

            ingredients: [
                "1 pâte brisée",
                "200 g de coco râpée",
                "1 ananas",
                "50 g de sucre",
                "2 œufs",
                "20 cl de crème",
            ],

            preparation: [
                "Étalez la pâte dans un moule.",
                "Mélangez la coco, le sucre et les œufs.",
                "Ajoutez la crème et l'ananas coupé en morceaux.",
                "Versez sur la pâte.",
                "Faites cuire 30 minutes à 180°C.",
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
        {
            id: "aquaman-entree-1",

            title: "SALADE DE MANGUE ET CREVETTES",
            movie: "Aquaman",

            image: "/img-card-sct-1/aquaman1.webp",
            movieImage: "/img-card-sct-1/aquaman2.webp",

            category: "Entrée",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "0 min",
            servings: "2",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2018",

            ingredients: [
                "200 g de crevettes",
                "1 mangue",
                "1 citron vert",
                "1 petite salade",
                "Huile d'olive",
                "Sel",
            ],

            preparation: [
                "Préparez la salade dans un bol.",
                "Ajoutez la mangue tranchée.",
                "Disposez les crevettes dessus.",
                "Assaisonnez avec citron et huile.",
                "Servez frais.",
            ],
        },
        {
            id: "aquaman-plat-1",

            title: "RISOTTO AUX FRUITS DE MER",
            movie: "Aquaman",

            image: "/img-card-sct-1/aquaman1.webp",
            movieImage: "/img-card-sct-1/aquaman2.webp",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "25 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Film",
            releaseDate: "2018",

            ingredients: [
                "250 g de riz arborio",
                "200 g de fruits de mer",
                "1 oignon",
                "20 cl de vin blanc",
                "Bouillon",
                "Parmesan",
            ],

            preparation: [
                "Faites revenir l'oignon.",
                "Ajoutez le riz et le vin blanc.",
                "Versez progressivement le bouillon.",
                "Ajoutez les fruits de mer.",
                "Terminez avec du parmesan avant de servir.",
            ],
        },
        {
            id: "aquaman-dessert-1",

            title: "CRÈME BRÛLÉE TROPICALE",
            movie: "Aquaman",

            image: "/img-card-sct-1/aquaman2.webp",
            movieImage: "/img-card-sct-1/aquaman1.webp",

            category: "Dessert",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "30 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Film",
            releaseDate: "2018",

            ingredients: [
                "500 ml de crème",
                "3 jaunes d'œufs",
                "80 g de sucre",
                "Extrait de coco",
                "Sucre roux",
            ],

            preparation: [
                "Chauffez la crème avec l'extrait de coco.",
                "Mélangez avec les jaunes et le sucre.",
                "Versez dans des ramequins.",
                "Faites cuire au bain-marie.",
                "Saupoudrez de sucre et caramélisez.",
            ],
        },
        {
            id: "alice-dessert-1",

            title: "SCONES ANGLAIS ET CONFITURE",
            movie: "Alice au pays des merveilles",

            image: "/img-card-sct-1/alice.webp",
            movieImage: "/img-card-sct-1/alice.webp",

            category: "Dessert",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "15 min",
            servings: "6",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2010",

            ingredients: [
                "200 g de farine",
                "100 g de beurre",
                "50 g de sucre",
                "1 œuf",
                "Confiture de fraises",
            ],

            preparation: [
                "Mélangez la farine, le beurre et le sucre.",
                "Ajoutez l'œuf et formez une pâte.",
                "Découpez des petits biscuits.",
                "Faites cuire 15 minutes à 180°C.",
                "Servez avec de la confiture.",
            ],
        },
        {
            id: "simpson-dessert-1",

            title: "DONUTS GLACÉS",
            movie: "Les Simpson le film",

            image: "/img-card-sct-1/simpson.webp",
            movieImage: "/img-card-sct-1/simpson.webp",

            category: "Dessert",
            author: "Admin",

            prepTime: "25 min",
            cookTime: "15 min",
            servings: "8",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2007",

            ingredients: [
                "250 g de farine",
                "80 g de sucre",
                "1 œuf",
                "10 cl de lait",
                "Glacage au chocolat",
            ],

            preparation: [
                "Mélangez la farine, le sucre et l'œuf.",
                "Ajoutez le lait pour former la pâte.",
                "Formez des donuts.",
                "Faites-les frire ou cuire au four.",
                "Nappes de chocolat avant de servir.",
            ],
        },
        {
            id: "vaiana-entree-1",

            title: "SALADE DE MANGUE ET AVOCAT",
            movie: "Vaiana",

            image: "/img-card-sct-1/vaiana.webp",
            movieImage: "/img-card-sct-1/vaiana2.webp",

            category: "Entrée",
            author: "Admin",

            prepTime: "10 min",
            cookTime: "0 min",
            servings: "2",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2016",

            ingredients: [
                "1 avocat",
                "1 mangue",
                "1 citron",
                "Feuilles de salade",
                "Huile d'olive",
            ],

            preparation: [
                "Coupez la mangue et l'avocat.",
                "Disposez les feuilles de salade.",
                "Ajoutez les morceaux et arrosez d'huile.",
                "Ajoutez le citron et servez.",
            ],
        },
        {
            id: "vaiana-plat-1",

            title: "POKÉ BOWL AU SAUMON",
            movie: "Vaiana",

            image: "/img-card-sct-1/vaiana.webp",
            movieImage: "/img-card-sct-1/vaiana2.webp",

            category: "Plat principal",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "10 min",
            servings: "2",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2016",

            ingredients: [
                "200 g de saumon",
                "150 g de riz",
                "1 mangue",
                "1 carotte",
                "Sauce soja",
                "Citron",
            ],

            preparation: [
                "Cuisez le riz.",
                "Pensez le saumon à la poêle.",
                "Ajoutez la mangue et la carotte.",
                "Disposez dans un bol et arrosez de sauce.",
            ],
        },
        {
            id: "vaiana-dessert-1",

            title: "PARFAIT COCO ET FRUITS",
            movie: "Vaiana",

            image: "/img-card-sct-1/vaiana2.webp",
            movieImage: "/img-card-sct-1/vaiana.webp",

            category: "Dessert",
            author: "Admin",

            prepTime: "10 min",
            cookTime: "0 min",
            servings: "2",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2016",

            ingredients: [
                "200 g de yaourt",
                "1 mangue",
                "Coco râpée",
                "Miel",
            ],

            preparation: [
                "Disposez le yaourt dans des verres.",
                "Ajoutez la mangue en morceaux.",
                "Saupoudrez de coco et de miel.",
                "Servez bien frais.",
            ],
        },
        {
            id: "toy-story-plat-1",

            title: "PIZZA COWBOY AU POULARD BBQ",
            movie: "Toy Story",

            image: "/img-card-sct-1/toysStory.jpg",
            movieImage: "/img-card-sct-1/toysStory.jpg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "20 min",
            servings: "4",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "1995",

            ingredients: [
                "1 pâte à pizza",
                "200 g de poulet",
                "200 g de fromage",
                "Sauce barbecue",
            ],

            preparation: [
                "Étalez la pâte.",
                "Ajoutez la sauce et le poulet.",
                "Recouvrez de fromage.",
                "Enfournez 20 minutes.",
            ],
        },
        {
            id: "toy-story-dessert-1",

            title: "COOKIES AUX MORCEAUX DE CHOCOLAT",
            movie: "Toy Story",

            image: "/img-card-sct-1/toysStory.jpg",
            movieImage: "/img-card-sct-1/toysStory.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "12 min",
            servings: "8",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "1995",

            ingredients: [
                "200 g de farine",
                "100 g de chocolat",
                "100 g de beurre",
                "1 œuf",
                "90 g de sucre",
            ],

            preparation: [
                "Mélangez la farine, le beurre et le sucre.",
                "Ajoutez l'œuf et le chocolat.",
                "Formez des cookies.",
                "Enfournez 12 minutes."
            ],
        },
        {
            id: "raiponce-dessert-1",

            title: "COOKIES DORÉS AUX NOISETTES",
            movie: "Raiponce",

            image: "/img-card-sct-1/raiponce.jpg",
            movieImage: "/img-card-sct-1/raiponce.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "12 min",
            servings: "8",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2010",

            ingredients: [
                "200 g de farine",
                "100 g de sucre",
                "80 g de noisettes",
                "1 œuf",
                "Beurre",
            ],

            preparation: [
                "Mélangez les ingrédients de la pâte.",
                "Ajoutez les noisettes.",
                "Formez des cookies.",
                "Cuisez 12 minutes à 180°C.",
            ],
        },
        {
            id: "rio-plat-1",

            title: "FEIJOADA BRÉSILIENNE",
            movie: "Rio",

            image: "/img-card-sct-1/rio1.jpg",
            movieImage: "/img-card-sct-1/rio2.jpg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "45 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Film",
            releaseDate: "2011",

            ingredients: [
                "500 g de viande",
                "200 g de haricots",
                "1 oignon",
                "2 gousses d'ail",
                "Palette de légumes",
            ],

            preparation: [
                "Faites cuire les haricots.",
                "Faites revenir les viandes et l'oignon.",
                "Ajoutez le tout dans une cocotte.",
                "Laissez mijoter 45 minutes.",
            ],
        },
        {
            id: "rio-dessert-1",

            title: "BRIGADEIROS AU CHOCOLAT",
            movie: "Rio",

            image: "/img-card-sct-1/rio2.jpg",
            movieImage: "/img-card-sct-1/rio1.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "10 min",
            servings: "6",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2011",

            ingredients: [
                "200 g de chocolat",
                "1 boîte de lait concentré",
                "10 g de beurre",
                "Coco râpée",
            ],

            preparation: [
                "Faites fondre le chocolat avec le lait concentré.",
                "Ajoutez le beurre.",
                "Laissez refroidir et formez des boules.",
                "Passez dans la coco.",
            ],
        },
        {
            id: "epic-entree-1",

            title: "SALADE FORESTIÈRE AUX POMMES",
            movie: "Epic",

            image: "/img-card-sct-1/epic.jpg",
            movieImage: "/img-card-sct-1/epic.jpg",

            category: "Entrée",
            author: "Admin",

            prepTime: "10 min",
            cookTime: "0 min",
            servings: "2",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2013",

            ingredients: [
                "2 pommes",
                "1 poignée de noix",
                "Laitue",
                "Huile d'olive",
                "Miel",
            ],

            preparation: [
                "Coupez les pommes en tranches.",
                "Disposez les feuilles de laitue.",
                "Ajoutez les pommes et les noix.",
                "Assaisonnez avec huile et miel.",
            ],
        },
        {
            id: "ralph-dessert-1",

            title: "CUPCAKES AUX BONBONS",
            movie: "Le Monde de Ralph",

            image: "/img-card-sct-1/lmdr.jpg",
            movieImage: "/img-card-sct-1/lmdr.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "20 min",
            servings: "8",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2012",

            ingredients: [
                "200 g de farine",
                "1 œuf",
                "100 g de beurre",
                "80 g de sucre",
                "Bonbons colorés",
            ],

            preparation: [
                "Mélangez les ingrédients de la pâte.",
                "Ajoutez les bonbons.",
                "Versez dans des moules.",
                "Faites cuire 20 minutes à 180°C.",
            ],
        },
        {
            id: "coco-plat-1",

            title: "TAMALES MEXICAINS AU POULET",
            movie: "Coco",

            image: "/img-card-sct-1/coco.jpeg",
            movieImage: "/img-card-sct-1/coco.jpeg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "30 min",
            cookTime: "35 min",
            servings: "4",
            difficulty: "Moyen",

            mediaType: "Film",
            releaseDate: "2017",

            ingredients: [
                "500 g de pâte de maïs",
                "250 g de poulet",
                "1 piment",
                "Tomates",
                "Sel",
            ],

            preparation: [
                "Préparez la farce au poulet.",
                "Étalez la pâte de maïs.",
                "Ajoutez la farce et roulez.",
                "Cuisez à la vapeur 35 minutes.",
            ],
        },
        {
            id: "soul-plat-1",

            title: "PIZZA NEW-YORKAISE AUX LÉGUMES",
            movie: "Soul",

            image: "/img-card-sct-1/soul.jpeg",
            movieImage: "/img-card-sct-1/soul.jpeg",

            category: "Plat principal",
            author: "Admin",

            prepTime: "20 min",
            cookTime: "20 min",
            servings: "4",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2020",

            ingredients: [
                "1 pâte à pizza",
                "Tomates",
                "Poivrons",
                "Oignons",
                "Fromage",
            ],

            preparation: [
                "Étalez la pâte.",
                "Ajoutez les légumes et le fromage.",
                "Enfournez 20 minutes à 200°C.",
                "Servez chaud.",
            ],
        },
        {
            id: "grinch-dessert-1",

            title: "SABLÉS VERTS DE NOËL",
            movie: "Le Grinch",

            image: "/img-card-sct-1/grinch.jpg",
            movieImage: "/img-card-sct-1/grinch.jpg",

            category: "Dessert",
            author: "Admin",

            prepTime: "15 min",
            cookTime: "12 min",
            servings: "8",
            difficulty: "Facile",

            mediaType: "Film",
            releaseDate: "2018",

            ingredients: [
                "200 g de farine",
                "100 g de beurre",
                "Vanille",
                "Sucre",
                "Colorant vert",
            ],

            preparation: [
                "Mixez les ingrédients.",
                "Formez des sablés.",
                "Cuisez 12 minutes.",
                "Laissez refroidir avant de servir.",
            ],
        },
    ];

    let isLogged = false;
    let isFavorite = false;

    function getStoredFavorites() {
        try {
            const saved = JSON.parse(
                localStorage.getItem("cin_delices_favorites") || "[]"
            );

            return Array.isArray(saved) ? saved : [];
        } catch {
            return [];
        }
    }

    function toggleFavorite() {
        if (!localStorage.getItem("token")) {
            alert("Connectez-vous pour ajouter une recette aux favoris.");
            window.location.hash = "#/login";
            return;
        }

        const favorites = getStoredFavorites();

        const updated = favorites.includes(recipe.id)
            ? favorites.filter((id) => id !== recipe.id)
            : [...favorites, recipe.id];

        localStorage.setItem(
            "cin_delices_favorites",
            JSON.stringify(updated)
        );

        isFavorite = updated.includes(recipe.id);
    }

    $: recipe = recipes.find(
        (item) => item.id === params.id
    );

    $: {
        isLogged = Boolean(localStorage.getItem("token"));
        isFavorite = recipe
            ? getStoredFavorites().includes(recipe.id)
            : false;
    }
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

            {#if localStorage.getItem("token")}
                <button
                    class="favorite-toggle"
                    type="button"
                    on:click={toggleFavorite}
                >
                    {isFavorite ? "⭐ RETIRER DES FAVORIS" : "⭐ AJOUTER AUX FAVORIS"}
                </button>
            {:else}
                <button
                    class="favorite-toggle disabled"
                    type="button"
                    on:click={() => {
                        alert("Connectez-vous pour ajouter une recette aux favoris.");
                        window.location.hash = "#/login";
                    }}
                >
                    ⭐ CONNECTER POUR AJOUTER
                </button>
            {/if}

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