<svelte:head>
    <title>Amanda Ernar</title>
    <link rel="stylesheet" href="https://use.typekit.net/xlg6gju.css">
    <link rel="stylesheet" href="/global.css">
    <meta name="description" content="Sharing my writing, art, and other projects with the world via this little personal blog." />
</svelte:head>

<header>
    <a href="/">
        <img src='/favicon.png' alt='Home' style='height: 4rem;'>
    </a>

  <nav>
    <ul style='display: flex; gap: 3rem; padding-top: 2rem;'>
      <li>
        <a href="/writing">Writing</a>
    </li>
    <li>
        <a href="/projects">Projects</a>
    </li>
    </ul>
  </nav>
</header>

<main>
    <slot />
</main>

<hr style='height: 3rem; border: none;'>

<footer>
    &copy; Amanda Ernar 2023 |
    <a href='https://www.github.com/AmandaErnar/'>GitHub</a> |
    <a href='https://www.instagram.com/amanda.ernar'>Instagram</a> |
    <a href='https://www.youtube.com/@amandaernar4789'>YouTube</a>
</footer>

