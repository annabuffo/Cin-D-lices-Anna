<script>
</script>

<main class="login-page">
    <div class="container-login">
        <h2 class="title-login">CONNEXION</h2>

        <form>
            <label for="email">Email</label>

            <input id="email" type="email" required />

            <label for="password">Mot de passe</label>

            <input id="password" type="password" required />

            <button class="button-login" type="submit"> Connexion </button>

            <p class="redirection-register">
                Vous n'avez pas de compte ?
                <a href="#/register">Inscrivez-vous</a>
            </p>
        </form>
    </div>
</main>

<style>
    .login-page {
        min-height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 20px;
    }

    .container-login {
        background-color: rgb(6, 6, 48);
        width: 100%;
        max-width: 500px;
        padding: 25px;
        border-radius: 8px;
        border: 2px solid #d4af37;
    }

    .title-login {
        text-align: center;
    }

    .container-login form {
        display: flex;
        flex-direction: column;
    }

    .container-login label {
        color: white;
        margin-top: 15px;
    }

    .container-login input {
        background-color: rgb(12, 12, 78);
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid gray;
        border-radius: 4px;
        color: white;
    }

    .button-login {
        background-color: #e24d4d;
        color: white;
        width: 100%;
        padding: 12px;
        margin-top: 25px;
        border: none;
        cursor: pointer;
    }

    .redirection-register {
        text-align: center;
        color: white;
        margin-top: 20px;
    }

    .redirection-register a {
        color: #d4af37;
    }
</style>
