<script>
  export let data;
  const { title, date, Content } = data;
</script>

<svelte:head>
  <title>Amanda Ernar - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<article>
  <h1>{title}</h1>
  <p>Written: {date}</p>
  <Content />
</article>
