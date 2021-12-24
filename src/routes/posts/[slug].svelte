<script context="module">
  import GhostContentAPI from "@tryghost/content-api"

  export async function load({ page }) {
    const api = new GhostContentAPI({
      url: "https://blackwomanreads.herokuapp.com",
      key: import.meta.env.VITE_GHOST_KEY || process.env.VITE_GHOST_KEY,
      version: "v3",
    })

    let slug = page.params.slug

    try {
      const jsonPost = await api.posts.read({ slug }, { formats: ["html"] })
      return { props: { post: jsonPost } }
    } catch (err) {
      console.log(err)
    }
  }
</script>

<script>
  import Comments from "$lib/Comments.svelte"
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="card shadow-lg">
  <div class="card-body">
    <h1 class="card-title text-2xl font-bold uppercase p-8 text-center"
      >{post.title}</h1
    >
    <p class="text-lg text-justify">{@html post.html}</p>
  </div>
</div>

<Comments />
