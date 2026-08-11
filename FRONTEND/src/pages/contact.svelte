<main class="contact-page">
    <h1 class="title-contact">📬 CONTACTEZ-NOUS</h1>

    <p class="subtitle-contact">Nous serions ravis d'avoir de vos nouvelles</p>

    <section class="contact-layout">
        <!-- PARTIE GAUCHE -->

        <div class="contact-left">
            <!-- CARTE EMAIL -->

            <div class="container-email">
                <img
                    class="img-email"
                    src="./public/p/email.png"
                    alt="Icône email"
                />

                <h2 class="title-email">EMAIL</h2>

                <p>hello@cinedelices.com</p>
            </div>

            <!-- CARTE RÉSEAUX SOCIAUX -->

            <div class="container-social-media">
                <img
                    class="img-inteface-reseaux"
                    src="./public/p/cercle.png"
                    alt="Icône réseaux sociaux"
                />

                <h2 class="title-reseaux-sociaux">RÉSEAUX SOCIAUX</h2>

                <ul class="social-icons-container">
                    <li>
                        <a href="https://www.x.com/">
                            <img src="./public/p/twitter.png" alt="Twitter" />
                            X
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/">
                            <img
                                src="./public/p/instagram (1).png"
                                alt="Instagram"
                            />
                            Instagram
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/">
                            <img
                                src="./public/p/facebook (1).png"
                                alt="Facebook"
                            />
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>

            <!-- CARTE FEEDBACK -->

            <div class="container-feedback">
                <img
                    class="img-feedback"
                    src="./public/p/ampoule.png"
                    alt="Icône ampoule"
                />

                <h2 class="title-feedback">FEEDBACK</h2>

                <p>
                    Vous avez une suggestion de recette ou trouvé un bug ?
                    Dites-le-nous !
                </p>
            </div>
        </div>

        <!-- PARTIE DROITE : FORMULAIRE -->

        <div class="container-form-contact">
            <form class="contact-form">
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

                <select class="option-sujet" name="sujet" id="sujet" required>
                    <option value="" disabled selected>
                        Choisis un sujet...
                    </option>

                    <option value="question"> Enquête générale </option>

                    <option value="retour"> Retour d'information </option>

                    <option value="bug"> Rapport de bug </option>

                    <option value="recette"> Suggestion de recette </option>

                    <option value="partenariat"> Partenariat </option>
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
    /*PARTIE MAIN*/
    h1,
    h2 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
    }

    .contact-page {
        width: min(100% - 32px, 800px);
        margin: 20px auto 40px;
        color: white;
    }

    /* TITRE */

    .contact-page .title-contact {
        margin: 0;
        text-align: center;
        color: #d4af37;
        font-family: "Bebas Neue", sans-serif;
        font-size: 2rem;
        letter-spacing: 1px;
    }

    .contact-page .subtitle-contact {
        margin: 10px 0 35px;
        color: white;
        text-align: center;
        font-family: serif;
        font-style: italic;
        font-size: 0.9rem;
    }

    /* DISPOSITION GÉNÉRALE */

    .contact-page .contact-layout {
        display: grid;
        grid-template-columns: 200px minmax(0, 1fr);
        gap: 20px;
        align-items: start;
    }

    /* COLONNE GAUCHE */

    .contact-page .contact-left {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    /* CARTES */

    .contact-page .container-email,
    .contact-page .container-social-media,
    .contact-page .container-feedback {
        padding: 20px 15px;
        box-sizing: border-box;
        background-color: #1c2039;
        border: 1px solid #3d3d48;
        border-radius: 8px;
        text-align: center;
    }

    /* Empêche les titres de récupérer
   les styles globaux avec fond ou padding */

    .contact-page .container-email h2,
    .contact-page .container-social-media h2,
    .contact-page .container-feedback h2 {
        margin: 10px 0;
        padding: 0;
        background: transparent;
        color: #d4af37;
        font-size: 1rem;
        line-height: 1.2;
    }

    .contact-page .container-email p,
    .contact-page .container-feedback p {
        margin: 8px 0 0;
        color: white;
        font-size: 0.72rem;
        line-height: 1.6;
    }

    /* ICÔNES DES CARTES */

    .contact-page .img-email,
    .contact-page .img-inteface-reseaux,
    .contact-page .img-feedback {
        display: block;
        width: 24px;
        height: 24px;
        margin: 0 auto 8px;
        object-fit: contain;
    }

    /* RÉSEAUX SOCIAUX */

    .contact-page .social-icons-container {
        display: flex;
        flex-direction: column;
        gap: 7px;
        margin: 10px 0 0;
        padding: 0;
        list-style: none;
    }

    .contact-page .social-icons-container li {
        margin: 0;
    }

    .contact-page .social-icons-container a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        color: #d4af37;
        font-size: 0.75rem;
        text-decoration: none;
    }

    .contact-page .social-icons-container img {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }

    /* FORMULAIRE */

    .contact-page .container-form-contact {
        height: auto;
        padding: 20px;
        box-sizing: border-box;
        background-color: #1c2039;
        border: 1px solid #3d3d48;
        border-radius: 8px;
    }

    .contact-page .contact-form {
        display: flex;
        flex-direction: column;
    }

    .contact-page .contact-form label {
        margin: 0 0 7px;
        padding: 0;
        background: transparent;
        color: white;
        font-size: 0.75rem;
    }

    .contact-page .contact-form input,
    .contact-page .contact-form select,
    .contact-page .contact-form textarea {
        width: 100%;
        margin: 0 0 15px;
        padding: 11px;
        box-sizing: border-box;
        background-color: #111526;
        color: white;
        font: inherit;
        font-size: 0.75rem;
        border: 1px solid #3d3d48;
        border-radius: 6px;
        outline: none;
    }

    .contact-page .contact-form input:focus,
    .contact-page .contact-form select:focus,
    .contact-page .contact-form textarea:focus {
        border-color: #d4af37;
    }

    .contact-page .contact-form input::placeholder,
    .contact-page .contact-form textarea::placeholder {
        color: #818395;
    }

    .contact-page .container-message {
        min-height: 120px;
        resize: vertical;
    }

    /* BOUTON */

    .contact-page .submit {
        width: 100%;
        margin-top: 0;
        padding: 12px;
        background-color: #e24d4d;
        color: white;
        border: none;
        border-radius: 5px;
        font: inherit;
        font-size: 0.75rem;
        font-weight: 700;
        cursor: pointer;
    }

    .contact-page .submit:hover {
        background-color: #e24d4d;
    }

    @media (max-width: 768px) {
        .contact-page {
            width: 92%;
            margin: 20px auto 30px;
        }

        .contact-page .contact-layout {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .contact-page .contact-left {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .contact-page .container-email,
        .contact-page .container-social-media,
        .contact-page .container-feedback,
        .contact-page .container-form-contact {
            width: 100%;
        }

        .contact-page .title-contact {
            font-size: 1.8rem;
        }

        .contact-page .subtitle-contact {
            font-size: 0.85rem;
            margin-bottom: 25px;
        }

        .contact-page .contact-form input,
        .contact-page .contact-form select,
        .contact-page .contact-form textarea {
            font-size: 0.85rem;
        }
    }
</style>
