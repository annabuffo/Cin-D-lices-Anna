<script>
    import Cookies from "../components/cookies.svelte";
</script>

<main>
    <section class="banner">
        <div class="banner-content">
            <span class="movie-icon">🎥</span>

            <h2>Super Mario Bros</h2>
            <h3>Tagliatelles crémeuses aux champignons</h3>

            <p>
                Une offre que vous ne pourrez pas refuser. Recréer le plat
                emblématique du chef-d'œuvre cinématographique.
            </p>

            <a href="#/recipes" class="banner-button">
                VOIR L'ASSOCIATION RECETTE ET FILM
            </a>
        </div>
    </section>

    <h1 class="title-sct-two">
        EN ATTENTE : FONCTIONNALITÉS CULINAIRES
    </h1>

    <section class="container-card-one">
        <article class="card">
            <img
                src="/img-card-sct-1/poisson.jpg"
                alt="Poisson rôti et légumes au four"
            />

            <h3><em>La Petite Sirène :</em></h3>

            <h2>Poisson Rôti et Légumes au Four</h2>

            <a href="#/recipes">
                VOIR LA RECETTE
            </a>
        </article>

        <article class="card">
            <img
                src="/img-card-sct-1/champignon.jpg"
                alt="Plat de pâtes aux champignons"
            />

            <h3><em>Super Mario Bros :</em></h3>

            <h2>
                Tagliatelles crémeuses aux champignons
            </h2>

            <a href="#/recipes">
                VOIR LA RECETTE
            </a>
        </article>

        <article class="card">
            <img
                src="/img-card-sct-1/ratatouille.jpg"
                alt="Ratatouille aux légumes"
            />

            <h3><em>Ratatouille :</em></h3>

            <h2>Ratatouille aux légumes</h2>

            <a href="#/recipes">
                VOIR LA RECETTE
            </a>
        </article>

        <article class="card">
            <img
                src="/img-card-sct-1/choux.png"
                alt="Soupe aux choux"
            />

            <h3><em>La Soupe Aux Choux :</em></h3>

            <h2>Soupe aux choux traditionnelle</h2>

            <a href="#/recipes">
                VOIR LA RECETTE
            </a>
        </article>
    </section>

    <div class="footer-film-strip">
        <div class="barre"></div>
    </div>

    <h1 class="title-card">
        PLUS D'AVENTURES CULINAIRES
    </h1>

    <section class="container-card">
        <article class="card">
            <img
                src="/img-card-sct-1/sirène.jpg"
                alt="La Petite Sirène"
            />

            <h2>La Petite Sirène</h2>

            <p>
                Poisson Rôti et Légumes au Four
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>

        <article class="card">
            <img
                src="/img-home/La_Soupe_aux_choux.jpg"
                alt="La Soupe aux Choux"
            />

            <h2>La soupe aux choux</h2>

            <p>
                Soupe aux choux traditionnelle
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>

        <article class="card">
            <img
                src="/img-home/who.webp"
                alt="Doctor Who"
            />

            <h2>Doctor Who</h2>

            <p>
                Tourte du Tardis
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>

        <article class="card">
            <img
                src="/img-home/chocolat.webp"
                alt="Charlie et la chocolaterie"
            />

            <h2>Charlie et la chocolaterie</h2>

            <p>
                Moelleux au chocolat et caramel
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>

        <article class="card">
            <img
                src="/img-home/vice versa.jpg"
                alt="Vice Versa"
            />

            <h2>Vice Versa</h2>

            <p>
                Cupcakes des émotions
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>

        <article class="card">
            <img
                src="/img-home/né.jpg"
                alt="Né quelque part"
            />

            <h2>Né quelque part</h2>

            <p>
                Makrout aux dattes
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>

        <article class="card">
            <img
                src="/img-home/odyssé.webp"
                alt="L'Odyssée de Pi"
            />

            <h2>L'Odyssée de Pi</h2>

            <p>
                Riz au curry et lait de coco
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>

        <article class="card">
            <img
                src="/img-home/Mario.jpg"
                alt="Super Mario Bros"
            />

            <h2>Super Mario Bros</h2>

            <p>
                Tagliatelles crémeuses aux champignons
            </p>

            <a href="#/recipes">
                Voir la recette
            </a>
        </article>
    </section>
</main>

<Cookies />

<style>
    main {
        background-color: black;
    }

    /* BANNIÈRE */

    body {
        margin: 0;
        background-color: #0d0d0d;
        font-family: "Poppins", sans-serif;
    }

    h1,
    h2,
    h3 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
    }

    .banner {
        height: 400px;

        background-image: url("/img-home/Mario.jpg");
        background-position: center;
        background-size: cover;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        border-top: 5px solid #d4af37;
        border-bottom: 5px solid #d4af37;
    }

    .banner-content {
        width: 35%;
        padding: 30px;

        background-color: rgba(0, 0, 0, 0.7);
    }

    .banner-content h2 {
        font-size: 40px;
        margin: 0;
    }

    .banner-content h3 {
        color: #e95c5c;
        background-color: transparent;
    }

    .banner-content p {
        color: white;
    }

    .banner-button {
        display: inline-block;

        padding: 10px;

        background-color: darkred;
        color: #d4af37;

        border: 2px solid #d4af37;

        text-decoration: none;
    }

    /* TITRES */

    .title-sct-two {
        text-align: center;
        margin: 35px 0;
    }

    .title-card {
        text-align: center;

        color: black;
        background-color: #d4af37;

        margin: 0;
        padding: 30px;
    }

    /* PREMIÈRE SECTION : 4 CARTES */

    .container-card-one {
        width: 90%;

        margin: 0 auto 40px;
        padding: 15px;

        display: grid;
        grid-template-columns: repeat(4, 1fr);

        gap: 15px;

        border: 2px solid #d4af37;
    }

    /* DEUXIÈME SECTION : 8 CARTES */

    .container-card {
        padding: 40px 8%;

        display: grid;
        grid-template-columns: repeat(4, 1fr);

        gap: 15px;

        background-color: #d4af37;
    }

    /* TOUTES LES CARTES */

    .card {
        background-color: rgb(6, 6, 48);

        padding: 10px;

        display: flex;
        flex-direction: column;
    }

    .card img {
        width: 100%;
        height: 180px;

        object-fit: cover;

        border: 2px solid #d4af37;
    }

    .card h3 {
        color: #e95c5c;
        background-color: rgb(6, 6, 48);
    }

    .card h2 {
        color: black;
        background-color: #d4af37;

        text-align: center;

        padding: 8px;
    }

    .card p {
        color: #d4af37;
        background-color: rgb(6, 6, 48);
    }

    .card a {
        color: #d4af37;

        margin-top: auto;

        background-color: rgb(6, 6, 48);
    }

    /* BARRE FILM */

    .footer-film-strip {
        background-color: #d4af37;

        padding: 8px 0;
    }

    .barre {
        height: 10px;

        background: repeating-linear-gradient(
            to right,
            black 0,
            black 12px,
            #d4af37 12px,
            #d4af37 18px
        );
    }

    /* TABLETTE */

    @media (max-width: 1000px) {
        .banner {
            height: auto;
            min-height: 350px;

            background-position: center;
            background-size: cover;
        }

        .banner-content {
            width: 50%;

            padding: 20px;
        }

        .banner-content h2 {
            font-size: 32px;
        }

        .container-card-one,
        .container-card {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* MOBILE */

    @media (max-width: 650px) {
        .banner {
            min-height: 500px;

            justify-content: flex-end;
            align-items: flex-end;

            background-position: center;
            background-size: cover;
        }

        .banner-content {
            width: 100%;

            padding: 20px;

            background-color: rgba(0, 0, 0, 0.75);
        }

        .banner-content h2 {
            font-size: 30px;
        }

        .banner-content h3 {
            font-size: 20px;
        }

        .banner-content p {
            font-size: 14px;
            line-height: 1.5;
        }

        .banner-button {
            display: block;

            text-align: center;

            font-size: 14px;
        }

        .title-sct-two,
        .title-card {
            font-size: 28px;

            padding: 20px 10px;
        }

        .container-card-one {
            width: 95%;

            grid-template-columns: 1fr;

            padding: 10px;
        }

        .container-card {
            grid-template-columns: 1fr;

            padding: 30px 20px;
        }

        .card img {
            height: auto;
            max-height: 260px;
        }

        .card h2 {
            font-size: 22px;
        }

        .card h3 {
            font-size: 18px;
        }
    }
</style>