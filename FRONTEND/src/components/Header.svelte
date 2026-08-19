<header>
    <nav>
        <div class="logo">
            <a href="#/">
                <img src="/favicon.png" alt="Logo du site CinéDélices" />
            </a>
        </div>

        <ul class="nav-header">
            <li>
                <a href="#/">Accueil</a>
            </li>

            <li>
                <a href="#/movies">Films</a>
            </li>

            <li>
                <a href="#/recipes">Recettes</a>
            </li>

            <li>
                <a href="#/login">Connexion</a>
            </li>

            <li>
                <a class="register" href="#/register">Inscription</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        width: 100%;
        background-color: black;
    }

    /* LOGO */

    .logo {
        padding: 10px 20px;
        border-bottom: 2px solid #d4af37;
    }

    .logo img {
        display: block;
        width: 220px;
        height: auto;
    }

    /* NAVIGATION */

    .nav-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;

        list-style: none;

        margin: 0;
        padding: 12px 25px;

        background-color: black;
        border-bottom: 2px solid #d4af37;
    }

    .nav-header li {
        list-style: none;
    }

    .nav-header a {
        color: white;
        text-decoration: none;
        font-size: 20px;
    }

    .nav-header a:hover {
        color: #d4af37;
    }

    /* BOUTON INSCRIPTION */

    .nav-header .register {
        display: inline-block;

        padding: 10px 25px;

        border: 2px solid #d4af37;
        border-radius: 6px;
    }

    .nav-header .register:hover {
        background-color: #d4af37;
        color: black;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .logo {
            text-align: center;
        }

        .logo img {
            width: 180px;
            margin: 0 auto;
        }

        .nav-header {
            justify-content: center;
            flex-wrap: wrap;

            gap: 12px;
            padding: 12px 15px;
        }

        .nav-header a {
            font-size: 17px;
        }

        .nav-header .register {
            padding: 8px 15px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .logo img {
            width: 150px;
        }

        .nav-header {
            flex-direction: column;
            gap: 5px;

            padding: 10px 15px;
        }

        .nav-header li {
            width: 100%;
            text-align: center;
        }

        .nav-header a {
            display: block;
            width: 100%;

            padding: 8px;

            font-size: 16px;
        }

        .nav-header .register {
            width: 100%;
            padding: 8px;

            border: 2px solid #d4af37;
        }
    }
</style>