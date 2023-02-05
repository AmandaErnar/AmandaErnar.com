<script>
export let data
</script>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path} style='background: none; padding: 0;'>
          {post.meta.title}
        </a>
      </h2>
      Written {post.meta.date}
    </li>
  {/each}
</ul>

