<script context="module">
  import GhostContentAPI from "@tryghost/content-api"

  export async function load() {
    const api = new GhostContentAPI({
      url: "https://blackwomanreads.herokuapp.com",
      key: "42ce7db5f659a63ac0c4050219",
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
      <h1 class="card-title text-2xl text-bold"
        ><a href="/posts/{post.slug}">{post.title}</a></h1
      >
      <p>{post.excerpt}</p>
      <div class="justify-center card-actions">
        <button class="btn btn-outline btn-primary"
          ><a href="/posts/{post.slug}">Read More</a>
        </button>
      </div>
    </div>
  </div>
{/each}
