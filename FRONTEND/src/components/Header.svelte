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

* {
    background-color: black;
    color: white;
    text-decoration: none;
    box-sizing: border-box;
}
    /*PARTIE HEADER*/

.logo {
    border-bottom: 2px solid #d4af37;
}

.nav-header {
    text-align: center;
    
}

.nav-header {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
    border-bottom: 2px solid #d4af37;
}

.nav-header li {
    color: white;
    display: inline-flex;
    text-align: right;
    padding: 0%;
    /*padding 0% + margin 0% + list style none : permet de supprimer les puces*/
    margin-left: 20px;
    list-style: none;
    margin-bottom: 10px;
}

.register {
    border: 2px solid #d4af37;
    padding: 10px 30px;
    border-radius: 6px;
}

/*FIN HEADER*/
</style>