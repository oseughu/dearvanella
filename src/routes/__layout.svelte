<script>
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Nav />
<main class="font-sans container mx-auto p-8 max-w-screen-md h-full">
  <slot />
</main>
<Footer />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
