<header>
    <nav>
        <div class="logo">
            <img src="/favicon.png" alt="Logo du site CinéDélices" />
        </div>

        <ul class="nav-header">
            <li><a href="#/">Accueil</a></li>
            <li><a href="#/movies">Films</a></li>
            <li><a href="#/recipes">Recettes</a></li>
            <li><a href="#/login">Connexion</a></li>
            <li><a class="register" href="#/register">Inscription</a></li>
        </ul>
    </nav>
</header>

<style>
    .logo {
        background-color: black;
        border-bottom: 2px solid #d4af37;
        text-align: left;
    }

    .nav-header {
        background-color: black;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;

        list-style: none;
        margin: 0;
        padding: 12px 25px;

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

    .register {
        display: inline-block;
        border: 2px solid #d4af37;
        padding: 10px 25px;
        border-radius: 6px;
    }

    @media (max-width: 768px) {
        .nav-header {
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            padding: 12px;
        }

        .register {
            padding: 8px 15px;
        }
    }
</style>
