<script>
</script>

<main>
    <section class="banner">
        <div class="banner-content">
            <span class="movie-icon">🎥</span>

            <h2>Super Mario Bros</h2>
            <h3>Tagliatelles crémeuses aux champignons</h3>

            <p>
                Une offre que vous ne pourrez pas refuser. Récreer le plat
                emblématique du chef-d'oeuvre cinématographique.
            </p>

            <a href="./cardRecipe.html" class="banner-button">
                VOIR L'ASSOCIATION RECETTE ET FILM
            </a>
        </div>
    </section>

    <h1 class="title-sct-two">EN ATTENTE : FONCTIONNALITéS CULINAIRES</h1>

    <section class="container-card-one">
        <article class="card">
            <img src="./public/img-card-sct-1/poisson.jpg" alt="" />
            <h3><em>La Petite Siréne :</em></h3>
            <h2>Poisson Rôti et Légumes au Four</h2>
            <a href="./cardRecipe.html">VOIR LA RECETTE</a>
        </article>

        <article class="card">
            <img
                src="./public/img-card-sct-1/champignon.jpg"
                alt="plat de pâtes au champignons"
            />
            <h3><em>Super Mario Bros :</em></h3>
            <h2>Tagliatelles crémeuses aux champignons</h2>
            <a href="./cardRecipe.html">VOIR LA RECETTE</a>
        </article>

        <article class="card">
            <img
                src="./public/img-card-sct-1/ratatouille.jpg"
                alt="ratatouille"
            />
            <h3><em>Ratatouille :</em></h3>
            <h2>Ratatouille aux légumes</h2>
            <a href="./cardRecipe.html">VOIR LA RECETTE</a>
        </article>

        <article class="card">
            <img src="./public/img-card-sct-1/choux.png" alt="soupe au choux" />
            <h3><em>La Soupe Aux Choux :</em></h3>
            <h2>Soupe aux choux traditionnelle</h2>
            <a href="./cardRecipe.html">VOIR LA RECETTE</a>
        </article>
    </section>

    <div class="footer-film-strip">
        <div class="barre"></div>
    </div>

    <h1 class="title-card">PLUS D'AVENTURES CULINAIRES</h1>

    <section class="container-card">
        <article class="card">
            <img
                src="./public/img-card-sct-1/sirène.jpg"
                alt="La petite sirène"
            />
            <h2>La petite sirène</h2>
            <p>Poisson Rôti et Légumes au Four</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>

        <article class="card">
            <img src="./public/img-home/La_Soupe_aux_choux.jpg" alt="" />
            <h2>La soupe aux choux</h2>
            <p>Soupe aux choux traditionnelle</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>

        <article class="card">
            <img src="./public/img-home/who.webp" alt="doctor who" />
            <h2>Doctor who</h2>
            <p>Tourte du Tardis</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>

        <article class="card">
            <img
                src="./public/img-home/chocolat.webp"
                alt="Charlie et la chocolaterie"
            />
            <h2>Charlie et la chocolaterie</h2>
            <p>Moêlleux au chocolat et caramel</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>

        <article class="card">
            <img src="./public/img-home/vice versa.jpg" alt="vice versa" />
            <h2>Vice versa</h2>
            <p>Cupcakes des émotions</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>

        <article class="card">
            <img src="./public/img-home/né.jpg" alt="né quelque part" />
            <h2>Né quelque part</h2>
            <p>Makrout aux Dattes</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>

        <article class="card">
            <img src="./public/img-home/odyssé.webp" alt="l'odyssée de pi" />
            <h2>L'odyssée de pi</h2>
            <p>Riz au curry et lait de coco</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>

        <article class="card">
            <img src="./public/img-home/Mario.jpg" alt="super mario bros" />
            <h2>Super mario bros</h2>
            <p>Tagliatelles crémeuses aux champignons</p>
            <a href="./cardRecipe.html">Voir la recette</a>
        </article>
    </section>
</main>

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
        background-image: url("./public/img-home/Mario.jpg");

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

</style>
