<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";

    import Router from "svelte-spa-router";

    import Home from "./pages/home.svelte";
    import Movies from "./pages/movies.svelte";
    import Recipes from "./pages/recipes.svelte";
    import Login from "./pages/login.svelte";
    import Register from "./pages/register.svelte";
    import Terms from "./pages/terms.svelte";
    import Contact from "./pages/contact.svelte";
    import Privacy from "./pages/privacy.svelte";
    import About from "./pages/about.svelte";
    import NotFound from "./pages/NotFound.svelte";

    const routes = {
        "/": Home,
        "/movies": Movies,
        "/recipes": Recipes,
        "/login": Login,
        "/register": Register,
        "/contact": Contact,
        "/terms": Terms,
        "/privacy": Privacy,
        "/about": About,
        "*": NotFound
    };
</script>

<Header />

<Router {routes} />

<Footer />