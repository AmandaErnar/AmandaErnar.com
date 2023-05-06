<svelte:head>
  <title>Amanda Ernar</title>
  <link rel="stylesheet" href="https://use.typekit.net/xlg6gju.css" />
  <link rel="stylesheet" href="/global.css" />
  <meta
    name="description"
    content="Sharing my writing, art, and other projects with the world via this personal blog."
  />
</svelte:head>

<header style="padding-left: -1rem; padding-top: 1rem; font-size: 0.7rem;">
  <a href="/" style="padding-top: 2rem;">
    <h1 style="padding-left: 1rem;">Amanda Ernar</h1>
  </a>
  <nav>
    <ul>
      <li>
        <a href="/writing" style="color: #4f5c73;">Writing</a>
      </li>
      <li>
        <a href="/projects" style="color: #4f5c73;">Projects</a>
      </li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<hr style="height: 2rem; border: none;" />

<footer>
  &copy; Copyright Amanda Ernar 2023 /
  <a href="/gallery">Gallery</a> /
  <a href="https://open.spotify.com/user/8f945sifezyf05iahcrkgkreo">Spotify</a>
  /
  <a href="https://www.instagram.com/amanda.ernar">Instagram</a> /
  <a href="https://www.youtube.com/@amandaernar4789">YouTube</a> /
  <a href="https://github.com/AmandaErnar/AmandaErnar.com">View Code</a>
</footer>
