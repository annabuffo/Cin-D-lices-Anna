<script>
    import Router from "svelte-spa-router";

    /* COMPONENTS */
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";

    /* PAGES */
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

    /* PAGES ADMIN */
    import Admin from "./pages/admin/dashboard.svelte";
    import AdminUsers from "./pages/admin/users.svelte";
    import AdminRecipes from "./pages/admin/recipes.svelte";
    import AdminCategories from "./pages/admin/categories.svelte";
    import AdminMedia from "./pages/admin/media.svelte";
    import AdminComments from "./pages/admin/comments.svelte";

    const routes = {
        "/": Home,

        "/movies": Movies,
        "/recipes": Recipes,

        "/login": Login,
        "/register": Register,

        "/about": About,
        "/contact": Contact,
        "/privacy": Privacy,
        "/terms": Terms,

        "/admin": Admin,
        "/admin/users": AdminUsers,
        "/admin/recipes": AdminRecipes,
        "/admin/categories": AdminCategories,
        "/admin/media": AdminMedia,
        "/admin/comments": AdminComments,

        "*": NotFound,
    };
</script>

<Header />

<Router {routes} />

<Footer />
ok 