<footer>
    <div class="footer-film-strip">
        <div class="barre"></div>
    </div>

    <div class="footer">
        <div class="social-icons">
            <a href="https://www.facebook.com/"
                ><img src="/icons-footer/facebook (1).png" alt="facebook" /></a
            >
            <a href="https://www.instagram.com/"
                ><img
                    src="/icons-footer/instagram (1).png"
                    alt="instagram"
                /></a
            >
            <a href="https://x.com/"
                ><img src="/icons-footer/twitter.png" alt="twitter" /></a
            >
            <a href="https://www.youtube.com/"
                ><img src="/icons-footer/youtube (1).png" alt="youtube" /></a
            >
        </div>
    </div>

    <h2 class="news">Newsletter</h2>

    <form class="newsletter">
        <input type="email" placeholder="ton@email.com" required />
        <button class="newsletter-submit" type="submit">SUBSCRIBE</button>
    </form>

    <nav class="nav-footer">
        <ul>
            <li><a href="#/about">A propos</a></li>
            <li><a href="#/contact">Contact</a></li>
            <li>
                <a href="#/privacy">Politiques de confidentialité</a>
            </li>
            <li>
                <a href="#/terms">Condition d'utilisation</a>
            </li>
        </ul>
    </nav>

    <div class="mention-légal">
        <p>
            © Ciné Délices. Tous droits réservés. Expériences culinaires
            cinématographique.
        </p>
    </div>
</footer>

<style>
*{
    background-color: black;
    box-sizing: border-box;
}
    /*PARTIE FOOTER*/

    .footer-film-strip {
        box-sizing: border-box;
        height: 30px;
        /*hauteur de la ligne*/
        background-color: #d4af37;
        width: 100%;
        /*prend 100% de la largeur*/

        display: flex;
        /*sert à conternir les carrer noir à l'intérieur de la barre jaune*/
        justify-content: center;
        align-items: center;
    }

    .barre {
        width: 100%;
        height: 14px;
        background: repeating-linear-gradient(
            /*sert à répéter les couleur des carrer noir*/ 90deg,
            #000 0 16px,
            #d4b000 4px 20px
        );
    }

    nav ul li {
        display: inline;
        /* Affiche les éléments sur une seule ligne */
        margin-right: 20px;
        /* Espacement entre les liens */
    }

    nav ul li a {
        text-decoration: none;
        /* Supprime le soulignement */
        color: white;
    }

    .nav-barre-from-the-bottom {
        color: white;
        text-align: center;
    }

    .footer {
        padding: 40px;
        text-align: center;
        color: white;
    }

    .social-icons a {
        width: 50px;
        height: 50px;
        border: 2px solid gold;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
    }

    .social-icons img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    .news {
        color: white;
        text-align: center;
    }

    .newsletter {
        display: flex;
        justify-content: center;
    }

    .newsletter input {
        padding: 16px;
        width: 260px;
        border: 2px solid #d4af37;
        background: transparent;
        color: white;
        outline: none;
    }

    .newsletter-submit {
        background-color: #d4af37;
        padding: 18px;
        border: none;
        font-weight: bold;
    }

    .nav-footer {
        text-align: center;
    }

    .mention-légal {
        color: white;
        margin-top: 30px;
        text-align: center;
        border-top: 2px solid #d4af37;
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    /*FIN FOOOTER*/
</style>
