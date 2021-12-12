<script context="module">
  import GhostContentAPI from "@tryghost/content-api"

  export async function load({ page }) {
    const api = new GhostContentAPI({
      url: "https://blackwomanreads.herokuapp.com",
      key: "42ce7db5f659a63ac0c4050219",
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

<div class="card shadow-lg">
  <div class="card-body">
    <h1 class="card-title text-2xl font-bold uppercase p-8 text-center"
      >{post.title}</h1
    >
    <p class="text-lg text-justify">{@html post.html}</p>
  </div>
</div>

<Comments />
