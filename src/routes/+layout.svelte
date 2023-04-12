<svelte:head>
    <title>Amanda Ernar</title>
    <link rel="stylesheet" href="https://use.typekit.net/xlg6gju.css">
    <link rel="stylesheet" href="/global.css">
    <meta name="description" content="Sharing my writing, art, and other projects with the world via this personal blog." />
</svelte:head>

<header style='padding-left: -1rem; padding-top: 1rem; font-size: 0.7rem;'>
  <a href="/" style='justify-content: space-around;'>
    <img class='favicon' src='/favicon.png' alt='Home' style='height: 4rem; border-radius: 50%'>
    </a>
    <a href='/' style='float: center; padding-top: 2rem;'>
      <h1>Amanda Ernar</h1>
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

<hr style='height: 2rem; border: none;'>

<footer>
  &copy; Copyright Amanda Ernar 2023 /
  <a href='https://open.spotify.com/user/8f945sifezyf05iahcrkgkreo'>Spotify</a> /  
  <a href='https://www.instagram.com/amanda.ernar'>Instagram</a> /
  <a href='https://www.youtube.com/@amandaernar4789'>YouTube</a> /
  <a href="https://github.com/AmandaErnar/AmandaErnar.com">View Code</a>
</footer>

