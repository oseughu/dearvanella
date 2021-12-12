<script>
  import "../app.css"
  import Nav from "$lib/Nav.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

<Nav />
<main class="container mx-auto p-8 max-w-screen-md">
  <slot />
</main>
<Footer />
