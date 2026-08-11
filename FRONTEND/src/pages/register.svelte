<script>
let email = "";
let password = "";

async function register() {
    
}
</script>

<main>
    <div class="container-register">
        <h2 class="title-register">INSCRIPTION</h2>
        <form action="inscription" method="post">
            <label for="nom">Nom d'utilisateur</label>
            <input type="text" id="nom" name="user_nom" required />

            <label for="email">Email</label>
            <input type="text" id="email" name="user_email" required />

            <label for="password">Mot de passe</label>
            <input type="text" id="" name="" required />

            <label for="password">Confirmation mot de passe</label>
            <input type="text" id="" name="" required />

            <button class="button_form_register" type="submit"
                >Inscription</button
            >
        </form>
        <p>
            Vous avez déjà un compte ?<a href="/connexion.html"
                >Connectez-vous</a
            >
        </p>
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

    a {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }

    .container-register {
        background-color: rgb(6, 6, 48);
        width: 90%;
        padding: 20px;
        max-width: 500px;
        border-radius: 8px;
        margin: 60px auto;
        border: 2px solid #d4af37;
    }

    .title-register {
        background-color: rgb(6, 6, 48);
        color: #d4af37;
        text-align: center;
    }

    .container-register label {
        color: white;
        background-color: rgb(6, 6, 48);
    }

    .container-register input {
        width: 100%;
        padding: 10px;
        margin: 20px 0 20px;
        border: 1px solid grey;
        border-radius: 2px;
        background-color: rgb(12, 12, 78);
        color: white;
    }

    form label {
        text-align: center;
        flex-direction: column;
    }

    .button_form_register {
        flex-direction: column;
        border: #d4af37;
        width: 100%;
    }

    button {
        padding: 10px;
        border-radius: 2px;
        background: #e24d4d;
        border: none;
    }

    p {
        color: #aaa;
        text-align: center;
        font-size: 13px;
    }
</style>
