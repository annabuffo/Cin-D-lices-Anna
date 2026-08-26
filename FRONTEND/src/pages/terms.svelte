<main class="terms-page">
    <h1>CONDITIONS D'UTILISATION</h1>

    <section class="terms-section">
        <h2>1. Éditeur du site</h2>

        <div class="inline"></div>

        <p>
            Le site Ciné Délices est un projet réalisé dans le cadre de la
            formation Développeur Web et Web Mobile.
        </p>

        <p>
            <strong>Ciné Délices</strong> est une plateforme dédiée aux recettes
            inspirées de films et séries.
        </p>
    </section>

    <section class="terms-section">
        <h2>2. Hébergement</h2>

        <div class="inline"></div>

        <p>
            Le site sera hébergé par un prestataire qui sera renseigné lors du
            déploiement du projet.
        </p>
    </section>

    <section class="terms-section">
        <h2>3. Directeur de publication</h2>

        <div class="inline"></div>

        <p>
            Le directeur de publication du site est la créatrice de Ciné
            Délices.
        </p>
    </section>

    <section class="terms-section">
        <h2>4. Contactez-nous</h2>

        <div class="inline"></div>

        <p class="email">
            Par courriel :
            <a href="mailto:contact@cinedelices.com">
                contact@cinedelices.com
            </a>
        </p>

        <p>
            Vous pouvez également utiliser notre
            <a href="#/contact">page de contact</a>.
        </p>
    </section>

    <section class="terms-section">
        <h2>5. Données personnelles</h2>

        <div class="inline"></div>

        <p>
            Le traitement de vos données personnelles est présenté dans notre
            <a href="#/privacy">
                Politique de confidentialité
            </a>,
            disponible dans la section dédiée.
        </p>
    </section>
</main>

<style>
    .terms-page {
        width: 100%;
        padding-bottom: 40px;
    }

    .terms-page h1 {
        text-align: center;
        color: #d4af37;

        margin-top: 40px;
        margin-bottom: 30px;
    }

    .terms-section {
        width: 90%;
        max-width: 600px;

        margin: 30px auto;
        padding: 20px;

        color: white;
        background-color: rgb(6, 6, 48);

        border: 1px solid #d4af37;
        border-radius: 8px;
    }

    .terms-section h2 {
        color: #d4af37;

        margin-top: 0;
        margin-bottom: 10px;
    }

    .terms-section p {
        line-height: 1.6;
    }

    .inline {
        border-bottom: 1px solid #d4af37;
        margin-bottom: 15px;
    }

    .terms-section a {
        color: #d4af37;
        text-decoration: underline;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .terms-page h1 {
            font-size: 30px;
            padding: 0 15px;
        }

        .terms-section {
            width: 94%;
            padding: 18px;
            margin: 25px auto;
        }

        .terms-section h2 {
            font-size: 22px;
        }

        .terms-section p {
            font-size: 15px;
        }
    }

    /* MOBILE */

    @media (max-width: 375px) {
        .terms-page h1 {
            font-size: 26px;
            margin-top: 25px;
        }

        .terms-section {
            width: 95%;
            padding: 15px;
            margin: 20px auto;
        }

        .terms-section h2 {
            font-size: 20px;
        }

        .terms-section p {
            font-size: 14px;
        }
    }
</style>