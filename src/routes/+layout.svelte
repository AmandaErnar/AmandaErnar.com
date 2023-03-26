<svelte:head>
    <title>Amanda Ernar</title>
    <link rel="stylesheet" href="https://use.typekit.net/xlg6gju.css">
    <link rel="stylesheet" href="/global.css">
    <meta name="description" content="Sharing my writing, art, and other projects with the world via this little personal blog." />
</svelte:head>

<header style='padding: 1rem; padding-left: -1rem;'>
  <a href="/">
    <img class='favicon' src='/favicon.png' alt='Home' style='height: 4rem;'>
  </a>
        <nav>
        <ul>
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
  &copy; Copyright Amanda Ernar 2023 /
  <a href='https://open.spotify.com/user/8f945sifezyf05iahcrkgkreo'>Spotify</a> /  
  <a href='https://www.instagram.com/amanda.ernar'>Instagram</a> /
  <a href='https://www.youtube.com/@amandaernar4789'>YouTube</a> /
  <a href="https://github.com/AmandaErnar/AmandaErnar.com">View Code</a>
</footer>

