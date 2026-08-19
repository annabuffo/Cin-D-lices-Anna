<footer>
    <div class="footer-film-strip">
        <div class="barre"></div>
    </div>

    <div class="footer">
        <div class="social-icons">
            <a href="https://www.facebook.com/">
                <img
                    src="/icons-footer/facebook (1).png"
                    alt="Facebook"
                />
            </a>

            <a href="https://www.instagram.com/">
                <img
                    src="/icons-footer/instagram (1).png"
                    alt="Instagram"
                />
            </a>

            <a href="https://x.com/">
                <img
                    src="/icons-footer/twitter.png"
                    alt="X"
                />
            </a>

            <a href="https://www.youtube.com/">
                <img
                    src="/icons-footer/youtube (1).png"
                    alt="YouTube"
                />
            </a>
        </div>
    </div>

    <h2 class="news">Newsletter</h2>

    <form class="newsletter">
        <input
            type="email"
            placeholder="ton@email.com"
            required
        />

        <button class="newsletter-submit" type="submit">
            SUBSCRIBE
        </button>
    </form>

    <nav class="nav-footer">
        <ul>
            <li>
                <a href="#/about">A propos</a>
            </li>

            <li>
                <a href="#/contact">Contact</a>
            </li>

            <li>
                <a href="#/privacy">
                    Politique de confidentialité
                </a>
            </li>

            <li>
                <a href="#/terms">
                    Conditions d'utilisation
                </a>
            </li>
        </ul>
    </nav>

    <div class="mention-legal">
        <p>
            © Ciné Délices. Tous droits réservés.
            Expériences culinaires cinématographiques.
        </p>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        background-color: black;
    }

    /* BARRE STYLE PELLICULE */

    .footer-film-strip {
        width: 100%;
        height: 30px;

        background-color: #d4af37;

        display: flex;
        align-items: center;
    }

    .barre {
        width: 100%;
        height: 14px;

        background: repeating-linear-gradient(
            90deg,
            #000 0 16px,
            #d4af37 16px 20px
        );
    }

    /* RESEAUX SOCIAUX */

    .footer {
        padding: 30px 20px 10px;
        text-align: center;
    }

    .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
    }

    .social-icons a {
        width: 50px;
        height: 50px;

        border: 2px solid #d4af37;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .social-icons img {
        width: 35px;
        height: 35px;
        object-fit: contain;
    }

    /* NEWSLETTER */

    .news {
        color: white;
        text-align: center;
        margin: 20px 0 10px;
    }

    .newsletter {
        display: flex;
        justify-content: center;

        margin: 20px auto;
        padding: 0 20px;
    }

    .newsletter input {
        width: 260px;
        padding: 14px;

        background-color: transparent;
        color: white;

        border: 2px solid #d4af37;
        outline: none;
    }

    .newsletter-submit {
        padding: 14px 20px;

        background-color: #d4af37;
        color: black;

        border: none;

        font-weight: bold;
        cursor: pointer;
    }

    .newsletter-submit:hover {
        background-color: #f0c94d;
    }

    /* NAVIGATION FOOTER */

    .nav-footer {
        margin-top: 25px;
        padding: 0 20px;
        text-align: center;
    }

    .nav-footer ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-footer a {
        color: white;
        text-decoration: none;
    }

    .nav-footer a:hover {
        color: #d4af37;
    }

    /* MENTIONS LEGALES */

    .mention-legal {
        width: 100%;

        margin-top: 30px;
        padding: 25px 20px;

        color: white;
        text-align: center;

        border-top: 2px solid #d4af37;
    }

    .mention-legal p {
        margin: 0;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .footer {
            padding-top: 25px;
        }

        .nav-footer ul {
            gap: 15px;
        }

        .newsletter {
            width: 100%;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .social-icons {
            gap: 10px;
        }

        .social-icons a {
            width: 45px;
            height: 45px;
        }

        .social-icons img {
            width: 30px;
            height: 30px;
        }

        .newsletter {
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .newsletter input,
        .newsletter-submit {
            width: 100%;
            max-width: 300px;
        }

        .nav-footer ul {
            flex-direction: column;
            gap: 12px;
        }

        .mention-legal {
            padding: 20px 15px;
        }

        .mention-legal p {
            font-size: 14px;
        }
    }
</style>