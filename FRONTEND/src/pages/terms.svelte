<script>
</script>

<main>
    <h1>CONDITIONS D'UTILISATION</h1>

    <section class="editeur-section">
        <h2>1. Editeur du site</h2>
        <div class="inline"></div>
        <p>Ce site web, accessible à www.cinedelices.com, est publié par :</p>
        <p>
            <strong>Anna Ciné Délices</strong>, élève de l'école O'clock, Situé
            au 10, rue cinéma, 75000, Paris, France.
        </p>
    </section>

    <section class="animation-section">
        <h2>2. Animation</h2>
        <div class="inline"></div>
        <p>
            Le site est hébergé par <strong>"..."</strong> situé au "...."."
        </p>
    </section>

    <section class="directeur-section">
        <h2>3. Directeur de publication</h2>
        <div class="inline"></div>
        <p>Le directeur de publication du site est Anna Ciné Déciles</p>
    </section>

    <section class="contact-section">
        <h2>4. Contactez-nous</h2>
        <div class="inline"></div>
        <p class="email">
            Par courriel : <a href="mailto:contact@cinedelices.com"
                >contact@cinedelices.com</a
            >
        </p>
    </section>

    <section class="donnees-section">
        <h2>5. Données personnelles</h2>
        <div class="inline"></div>
        <p>
            Le traitements de vos données personnelles est régi par notre <a
                href="#/privacy">Politique de Confidentialité</a
            >, disponible dans la section "Politique de onfidentialité".
        </p>
    </section>
</main>

<style>
    h1,
    h2 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
    }

    a {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }

    h1 {
        text-align: center;
        color: #d4af37;
        margin-top: 40px;
    }

    .editeur-section,
    .animation-section,
    .directeur-section,
    .contact-section,
    .donnees-section {
        color: white;
        background-color: rgb(6, 6, 48);

        width: 90%;
        max-width: 600px;

        padding: 20px;
        margin: 40px auto;

        border: 1px solid #d4af37;
        border-radius: 8px;
    }

    .editeur-section h2,
    .animation-section h2,
    .directeur-section h2,
    .contact-section h2,
    .donnees-section h2 {
        margin-top: 0;
    }

    .inline {
        border-bottom: 1px solid #d4af37;
        margin-bottom: 15px;
    }

    .contact-section a,
    .donnees-section a {
        color: #d4af37;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
            padding: 0 15px;
        }

        .editeur-section,
        .animation-section,
        .directeur-section,
        .contact-section,
        .donnees-section {
            width: 94%;
            padding: 18px;
            margin: 25px auto;
        }

        .editeur-section h2,
        .animation-section h2,
        .directeur-section h2,
        .contact-section h2,
        .donnees-section h2 {
            font-size: 1.4rem;
        }

        .editeur-section p,
        .animation-section p,
        .directeur-section p,
        .contact-section p,
        .donnees-section p {
            font-size: 0.9rem;
            line-height: 1.6;
        }
    }

    /*ajout pour les très petits écrans*/

    @media (max-width: 480px) {
        h1 {
            font-size: 1.6rem;
        }

        .editeur-section,
        .animation-section,
        .directeur-section,
        .contact-section,
        .donnees-section {
            width: 95%;
            padding: 15px;
        }
    }
</style>
