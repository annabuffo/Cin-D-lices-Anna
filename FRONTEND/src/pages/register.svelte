<script>
    let username = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let message = "";

    async function register() {
        message = "";

        // Vérification des mots de passe
        if (password !== confirmPassword) {
            message = "Les mots de passe ne correspondent pas";
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        username: username.trim(),
                        email: email.trim(),
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                message = "Inscription réussie";

                // Redirection vers la connexion
                window.location.hash = "#/login";
            } else {
                message =
                    data.message ||
                    "Erreur lors de l'inscription";
            }
        } catch (error) {
            console.error(error);

            message =
                "Impossible de contacter le serveur";
        }
    }
</script>

<main class="register-page">
    <div class="container-register">
        <h2 class="title-register">
            INSCRIPTION
        </h2>

        <form on:submit|preventDefault={register}>
            <label for="username">
                Nom d'utilisateur
            </label>

            <input
                type="text"
                id="username"
                bind:value={username}
                placeholder="Ton nom d'utilisateur"
                autocomplete="username"
                required
            />

            <label for="email">
                Email
            </label>

            <input
                type="email"
                id="email"
                bind:value={email}
                placeholder="ton@email.com"
                autocomplete="email"
                required
            />

            <label for="password">
                Mot de passe
            </label>

            <input
                type="password"
                id="password"
                bind:value={password}
                placeholder="Ton mot de passe"
                autocomplete="new-password"
                required
            />

            <label for="confirmPassword">
                Confirmation mot de passe
            </label>

            <input
                type="password"
                id="confirmPassword"
                bind:value={confirmPassword}
                placeholder="Confirme ton mot de passe"
                autocomplete="new-password"
                required
            />

            <button
                class="button-register"
                type="submit"
            >
                INSCRIPTION
            </button>

            {#if message}
                <p class="message">
                    {message}
                </p>
            {/if}
        </form>

        <p class="redirection-login">
            Vous avez déjà un compte ?

            <a href="#/login">
                Connectez-vous
            </a>
        </p>
    </div>
</main>

<style>
    .register-page {
        min-height: 60vh;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 40px 20px;
    }

    .container-register {
        width: 100%;
        max-width: 500px;

        padding: 25px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;
    }

    .title-register {
        color: #d4af37;
        text-align: center;

        margin-top: 0;
        margin-bottom: 20px;
    }

    .container-register form {
        display: flex;
        flex-direction: column;
    }

    .container-register label {
        color: white;

        margin-top: 15px;
        margin-bottom: 5px;
    }

    .container-register input {
        width: 100%;

        padding: 12px;

        background-color: rgb(12, 12, 78);
        color: white;

        border: 1px solid grey;
        border-radius: 4px;

        outline: none;
    }

    .container-register input:focus {
        border-color: #d4af37;
    }

    .button-register {
        width: 100%;

        padding: 12px;
        margin-top: 25px;

        background-color: #e24d4d;
        color: white;

        border: none;
        border-radius: 4px;

        cursor: pointer;
        font-weight: bold;
    }

    .button-register:hover {
        background-color: #d13f3f;
    }

    .message {
        color: #d4af37;

        text-align: center;

        margin-top: 15px;
    }

    .redirection-login {
        color: #aaa;

        text-align: center;

        font-size: 13px;

        margin-top: 20px;
    }

    .redirection-login a {
        color: #d4af37;

        margin-left: 5px;

        text-decoration: none;
    }

    .redirection-login a:hover {
        text-decoration: underline;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .register-page {
            padding: 30px 20px;
        }

        .container-register {
            max-width: 450px;
        }
    }

    /* MOBILE */

    @media (max-width: 375px) {
        .register-page {
            padding: 25px 15px;
        }

        .container-register {
            padding: 20px 15px;
        }

        .title-register {
            font-size: 28px;
        }

        .container-register label {
            font-size: 14px;
        }

        .container-register input {
            font-size: 16px;
        }

        .redirection-login {
            font-size: 14px;
        }
    }
</style>