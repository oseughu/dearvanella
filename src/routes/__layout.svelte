<script>
  import '$/app.postcss'
  import Footer from '$lib/Footer.svelte'
  import Nav from '$lib/Nav.svelte'
</script>

<Nav />
<main class="font-sans container mx-auto p-8 max-w-screen-md h-full">
  <slot />
</main>
<Footer />
