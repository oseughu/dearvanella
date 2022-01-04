<script>
  import '../app.css'
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Nav />
<main class="font-sans container mx-auto p-8 max-w-screen-md h-full">
  <slot />
</main>
<Footer />
