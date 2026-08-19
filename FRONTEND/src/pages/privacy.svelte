<main>
    <div class="privacy-container">

        <h1>
            <img
                class="lock"
                src="/security.png"
                alt="Icône cadenas"
            />

            POLITIQUE DE CONFIDENTIALITÉ

            <img
                class="lock"
                src="/security.png"
                alt="Icône cadenas"
            />
        </h1>

        <h2>1. COLLECTE DES DONNÉES</h2>

        <div class="inline"></div>

        <p>
            En utilisant le site Ciné Délices, nous collectons les données
            suivantes lorsque vous créez un compte :
        </p>

        <ul>
            <li>Nom d'utilisateur</li>
            <li>Adresse e-mail</li>
            <li>Mot de passe haché</li>
            <li>Préférences de recettes et favoris</li>
        </ul>

        <h2>2. UTILISATION DES DONNÉES</h2>

        <div class="inline"></div>

        <p>
            Vos données sont utilisées uniquement pour :
        </p>

        <ul>
            <li>Vous permettre de vous connecter à votre compte.</li>

            <li>
                Conserver vos préférences de recettes et vos favoris.
            </li>

            <li>
                Publier et gérer vos propres recettes.
            </li>

            <li>
                Personnaliser votre expérience sur le site.
            </li>
        </ul>

        <h2>3. COOKIES</h2>

        <div class="inline"></div>

        <p>
            Nous utilisons uniquement les cookies nécessaires au fonctionnement
            du site, notamment pour la gestion de l'authentification et des
            sessions utilisateur.
        </p>

        <h2>4. VOS DROITS</h2>

        <div class="inline"></div>

        <p>
            Conformément au Règlement général sur la protection des données
            (RGPD), vous disposez notamment des droits suivants :
        </p>

        <ul>
            <li>
                Droit d'accès : consulter les données que nous possédons
                sur vous.
            </li>

            <li>
                Droit de rectification : modifier vos données.
            </li>

            <li>
                Droit d'effacement : demander la suppression de vos données.
            </li>
        </ul>

        <p>
            Pour exercer ces droits, vous pouvez nous contacter via notre
            <a href="#/contact">page de contact</a>
            ou supprimer votre compte directement depuis votre espace personnel.
        </p>

    </div>
</main>

<style>
    .privacy-container {
        width: 90%;
        max-width: 800px;

        margin: 50px auto 60px;
        padding: 30px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 6px;
    }

    /* TITRE */

    .privacy-container h1 {
        color: #d4af37;
        text-align: center;

        margin-top: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .lock {
        width: 50px;
        height: auto;
    }

    /* SOUS-TITRES */

    .privacy-container h2 {
        color: #d4af37;
        text-align: left;

        margin-top: 40px;
        margin-bottom: 10px;
    }

    .inline {
        border-bottom: 1px solid #d4af37;
        margin-bottom: 15px;
    }

    /* TEXTE */

    .privacy-container p,
    .privacy-container ul {
        color: white;

        line-height: 1.6;
    }

    .privacy-container p {
        text-align: justify;
    }

    .privacy-container ul {
        padding-left: 25px;
    }

    .privacy-container li {
        margin-bottom: 8px;
    }

    .privacy-container a {
        color: #d4af37;
        text-decoration: underline;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .privacy-container {
            width: 94%;

            margin: 30px auto 40px;
            padding: 20px;
        }

        .privacy-container h1 {
            font-size: 30px;
        }

        .privacy-container h2 {
            font-size: 22px;
            margin-top: 30px;
        }

        .lock {
            width: 40px;
        }

        .privacy-container p,
        .privacy-container ul {
            font-size: 15px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .privacy-container {
            width: 95%;

            margin: 25px auto;
            padding: 15px;
        }

        .privacy-container h1 {
            font-size: 24px;

            flex-direction: column;
            gap: 5px;
        }

        .privacy-container h1 .lock:last-child {
            display: none;
        }

        .lock {
            width: 35px;
        }

        .privacy-container h2 {
            font-size: 20px;
            margin-top: 25px;
        }

        .privacy-container p {
            text-align: left;
            font-size: 14px;
        }

        .privacy-container ul {
            font-size: 14px;
            padding-left: 20px;
        }
    }
</style>