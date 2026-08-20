<main class="contact-page">
    <h1 class="title-contact">📬 CONTACTEZ-NOUS</h1>

    <p class="subtitle-contact">
        Nous serions ravis d'avoir de vos nouvelles
    </p>

    <section class="contact-layout">

        <!-- PARTIE GAUCHE -->

        <div class="contact-left">

            <!-- EMAIL -->

            <div class="container-email">
                <img
                    class="contact-icon"
                    src="/p/email.png"
                    alt="Icône email"
                />

                <h2>EMAIL</h2>

                <p>hello@cinedelices.com</p>
            </div>

            <!-- RÉSEAUX SOCIAUX -->

            <div class="container-social-media">
                <img
                    class="contact-icon"
                    src="/p/cercle.png"
                    alt="Icône réseaux sociaux"
                />

                <h2>RÉSEAUX SOCIAUX</h2>

                <ul class="social-icons-container">
                    <li>
                        <a href="https://x.com/">
                            <img
                                src="/p/twitter.png"
                                alt="Twitter"
                            />
                            X
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/">
                            <img
                                src="/p/instagram (1).png"
                                alt="Instagram"
                            />
                            Instagram
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/">
                            <img
                                src="/p/facebook (1).png"
                                alt="Facebook"
                            />
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>

            <!-- FEEDBACK -->

            <div class="container-feedback">
                <img
                    class="contact-icon"
                    src="/p/ampoule.png"
                    alt="Icône ampoule"
                />

                <h2>FEEDBACK</h2>

                <p>
                    Vous avez une suggestion de recette ou trouvé un bug ?
                    Dites-le-nous !
                </p>
            </div>
        </div>

        <!-- FORMULAIRE -->

        <div class="container-form-contact">
            <form class="contact-form" on:submit|preventDefault>

                <label for="nom">Ton nom</label>

                <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Ton nom"
                    required
                />

                <label for="email">Ton email</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ton@email.com"
                    required
                />

                <label for="sujet">Sujet</label>

                <select
                    class="option-sujet"
                    name="sujet"
                    id="sujet"
                    required
                >
                    <option value="" disabled selected>
                        Choisis un sujet...
                    </option>

                    <option value="question">
                        Enquête générale
                    </option>

                    <option value="retour">
                        Retour d'information
                    </option>

                    <option value="bug">
                        Rapport de bug
                    </option>

                    <option value="recette">
                        Suggestion de recette
                    </option>

                    <option value="partenariat">
                        Partenariat
                    </option>
                </select>

                <label for="message">Ton message</label>

                <textarea
                    class="container-message"
                    id="message"
                    name="message"
                    placeholder="Écris ton message..."
                    required
                ></textarea>

                <button class="submit" type="submit">
                    ENVOYER UN MESSAGE
                </button>
            </form>
        </div>
    </section>
</main>

<style>
    .contact-page {
        width: 90%;
        max-width: 800px;
        margin: 40px auto;
        color: white;
    }

    /* TITRE */

    .title-contact {
        margin: 0;
        text-align: center;
        color: #d4af37;
        font-size: 32px;
    }

    .subtitle-contact {
        margin: 10px 0 35px;
        color: white;
        text-align: center;
        font-style: italic;
    }

    /* DISPOSITION */

    .contact-layout {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 20px;
    }

    /* PARTIE GAUCHE */

    .contact-left {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .container-email,
    .container-social-media,
    .container-feedback {
        padding: 20px 15px;

        background-color: #1c2039;

        border: 1px solid #3d3d48;
        border-radius: 8px;

        text-align: center;
    }

    .container-email h2,
    .container-social-media h2,
    .container-feedback h2 {
        color: #d4af37;
        margin: 10px 0;
        font-size: 18px;
    }

    .container-email p,
    .container-feedback p {
        color: white;
        font-size: 13px;
        line-height: 1.5;
    }

    /* ICONES */

    .contact-icon {
        display: block;

        width: 30px;
        height: 30px;

        margin: 0 auto 8px;

        object-fit: contain;
    }

    /* RÉSEAUX SOCIAUX */

    .social-icons-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        list-style: none;

        padding: 0;
        margin: 10px 0 0;
    }

    .social-icons-container a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;

        color: #d4af37;

        text-decoration: none;
    }

    .social-icons-container img {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }

    /* FORMULAIRE */

    .container-form-contact {
        padding: 20px;

        background-color: #1c2039;

        border: 1px solid #3d3d48;
        border-radius: 8px;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
    }

    .contact-form label {
        color: white;
        margin-bottom: 7px;
    }

    .contact-form input,
    .contact-form select,
    .contact-form textarea {
        width: 100%;

        margin-bottom: 15px;
        padding: 11px;

        background-color: #111526;
        color: white;

        border: 1px solid #3d3d48;
        border-radius: 6px;

        outline: none;
    }

    .contact-form input:focus,
    .contact-form select:focus,
    .contact-form textarea:focus {
        border-color: #d4af37;
    }

    .container-message {
        min-height: 120px;
        resize: vertical;
    }

    /* BOUTON */

    .submit {
        width: 100%;

        padding: 12px;

        background-color: #e24d4d;
        color: white;

        border: none;
        border-radius: 5px;

        font-weight: bold;

        cursor: pointer;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .contact-page {
            width: 94%;
            margin: 30px auto;
        }

        .contact-layout {
            grid-template-columns: 1fr;
        }

        .contact-left {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .contact-page {
            width: 95%;
            margin: 25px auto;
        }

        .title-contact {
            font-size: 28px;
        }

        .subtitle-contact {
            font-size: 14px;
            margin-bottom: 25px;
        }

        .contact-left {
            grid-template-columns: 1fr;
        }

        .container-email,
        .container-social-media,
        .container-feedback,
        .container-form-contact {
            padding: 15px;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
            font-size: 16px;
        }
    }
</style>