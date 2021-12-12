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
      const jsonTags = await api.tags.browse({ include: "name" })
      return { props: { posts: jsonPosts, tag: jsonTags } }
    } catch (err) {
      console.log(err)
    }
  }
</script>

<script>
  export let posts
  export let tag
</script>

<div
  class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
  style="background-image: url(&quot;https://picsum.photos/id/314/1000/300&quot;);"
>
  <div class="card  glass lg:card-side text-neutral-content">
    <figure class="p-6">
      <img
        src="https://picsum.photos/id/1005/300/200"
        alt="woman staring"
        class="rounded-lg shadow-lg"
      />
    </figure>
    <div class="max-w-md card-body">
      <h2 class="card-title">Vanella Macaulay</h2>
      <p
        >Follow me on my journey of life as I share with you my most intimate
        thoughts on life and its meanings through the books I've been reading.</p
      >
    </div>
  </div>
</div>

{#each posts as post}
  <div class="card text-center shadow-2xl">
    <figure class="px-10 pt-10">
      <img
        src={post.feature_image}
        class="rounded-xl"
        alt="woman staring into space"
      />
    </figure>
    <div class="card-body">
      <h1 class="card-title"><a href="/posts/{post.slug}">{post.title}</a></h1>
      <h3>{tag.name}</h3>
      <p>{post.excerpt}</p>
      <div class="justify-center card-actions">
        <button class="btn btn-outline btn-primary"
          ><a href="/posts/{post.slug}">Read More</a>
        </button>
      </div>
    </div>
  </div>
{/each}
