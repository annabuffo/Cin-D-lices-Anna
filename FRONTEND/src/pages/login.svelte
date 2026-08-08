<script>
</script>

<main>
    <div class="container-login">
        <h2 class="title-login">CONNEXION</h2>
        <form action="connexion">
            <label for="email">email</label>
            <input type="text" placeholder="" required />
            <label for="mot_de_passe">mot de passe</label>
            <input type="text" placeholder="" required />
            <button class="button-login" type="button"
                ><a href="./profileUser.html">Connexion</a></button
            >
            <p class="redirection-register">
                Vous n'avez pas de compte ? <a href="./register.html"
                    >Inscrivez-vous</a
                >
            </p>
        </form>
    </div>
</main>

<style>
    /*PARTIE MAIN*/

    * {
        background-color: black;
        box-sizing: border-box;
    }
    
    h2 {
        font-family: "Bebas Neue", sans-serif;
        color: #d4af37;
        letter-spacing: 1px;
    }

    .title-login {
        color: #d4af37;
        text-align: center;
    }

    nav a,
    button {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }

    .container-login {
        background-color: rgb(6, 6, 48);
        width: 50%;
        padding: 20px;
        max-width: 500px;
        border-radius: 8px;
        margin: 60px auto;
        border: 2px solid #d4af37;
    }

    .container-login label {
        text-align: center;
        flex-direction: column;
        color: white;
    }

    .container-login input {
        background-color: rgb(12, 12, 78);
        border-radius: 2%;
        width: 100%;
        padding: 10px;
        margin: 20px 0 20px;
        border: 1px solid gray;
        color: white;
    }

    .button-login {
        background-color: #e24d4d;
        width: 100%;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 2px;
    }

    .redirection-register {
        text-align: center;
        color: white;
    }

    p {
        color: gray;
    }
</style>
