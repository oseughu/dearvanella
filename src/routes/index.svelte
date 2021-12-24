<script context="module">
  import GhostContentAPI from "@tryghost/content-api"

  export async function load() {
    const api = new GhostContentAPI({
      url: "https://blackwomanreads.herokuapp.com",
      key: import.meta.env.VITE_GHOST_KEY || process.env.VITE_GHOST_KEY,
      version: "v3",
    })

    try {
      const jsonPosts = await api.posts.browse({ include: "tags,authors" })
      return { props: { posts: jsonPosts } }
    } catch (err) {
      console.log(err)
    }
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Black Woman Reads | Vanella Macaulay</title>
</svelte:head>

{#each posts as post}
  <div class="card text-center shadow-2xl ">
    <figure class="px-10 pt-10">
      <img
        src={post.feature_image}
        class="rounded-xl"
        alt={post.feature_image_alt}
      />
    </figure>
    <div class="card-body">
      <h1 class="card-title"><a href="/posts/{post.slug}">{post.title}</a></h1>
      <p>{post.excerpt}</p>
      <div class="justify-center card-actions">
        <button class="btn btn-outline btn-primary"
          ><a href="/posts/{post.slug}">Read More</a>
        </button>
      </div>
    </div>
  </div>
{/each}
