<script>
  import { onMount } from 'svelte'

  onMount(() => {
    ;(function () {
      var d = document,
        s = d.createElement('script')
      s.src = 'https://blackwomanreads.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    })()
  })
</script>

<div id="disqus_thread"></div>
