<script>
    let email = "";
    let password = "";
    let message = "";

    async function login() {
        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", data.user.role);

                message = "Connexion réussie";

                if (data.user.role === "admin") {
                    window.location.hash = "#/admin";
                } else {
                    window.location.hash = "#/";
                }
            } else {
                message = data.message || "Email ou mot de passe incorrect";
            }
        } catch (error) {
            message = "Impossible de contacter le serveur";
        }
    }
</script>

<main class="login-page">
    <div class="container-login">
        <h2 class="title-login">
            CONNEXION
        </h2>

        <form on:submit|preventDefault={login}>
            <label for="email">
                Email
            </label>

            <input
                id="email"
                type="email"
                bind:value={email}
                placeholder="ton@email.com"
                required
            />

            <label for="password">
                Mot de passe
            </label>

            <input
                id="password"
                type="password"
                bind:value={password}
                placeholder="Ton mot de passe"
                required
            />

            <button class="button-login" type="submit">
                CONNEXION
            </button>

            {#if message}
                <p class="message">
                    {message}
                </p>
            {/if}

            <p class="redirection-register">
                Vous n'avez pas de compte ?

                <a href="#/register">
                    Inscrivez-vous
                </a>
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
        width: 100%;
        max-width: 500px;

        padding: 25px;

        background-color: rgb(6, 6, 48);

        border: 2px solid #d4af37;
        border-radius: 8px;
    }

    .title-login {
        text-align: center;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .container-login form {
        display: flex;
        flex-direction: column;
    }

    .container-login label {
        color: white;
        margin-top: 15px;
        margin-bottom: 5px;
    }

    .container-login input {
        width: 100%;

        padding: 12px;

        background-color: rgb(12, 12, 78);
        color: white;

        border: 1px solid gray;
        border-radius: 4px;

        outline: none;
    }

    .container-login input:focus {
        border-color: #d4af37;
    }

    .button-login {
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

    .button-login:hover {
        background-color: #d13f3f;
    }

    .message {
        text-align: center;
        color: #d4af37;
        margin-top: 15px;
    }

    .redirection-register {
        text-align: center;
        color: white;
        margin-top: 20px;
    }

    .redirection-register a {
        color: #d4af37;
        text-decoration: none;
    }

    .redirection-register a:hover {
        text-decoration: underline;
    }

    /* TABLETTE */

    @media (max-width: 768px) {
        .login-page {
            padding: 30px 20px;
        }

        .container-login {
            max-width: 450px;
        }
    }

    /* MOBILE */

    @media (max-width: 480px) {
        .login-page {
            min-height: 50vh;
            padding: 25px 15px;
        }

        .container-login {
            padding: 20px 15px;
        }

        .title-login {
            font-size: 28px;
        }

        .container-login label {
            font-size: 14px;
        }

        .container-login input {
            font-size: 16px;
        }

        .button-login {
            width: 100%;
        }

        .redirection-register {
            font-size: 14px;
        }
    }
</style>