<svelte:head>
    <title>Amanda Ernar</title>
    <link rel="stylesheet" href="https://use.typekit.net/xlg6gju.css">
    <link rel="stylesheet" href="/global.css">
</svelte:head>

<header>
    <a href="/">
        <img src='/favicon.png' alt='Home' style='height: 75px'>
    </a>

  <nav>
    <ul style='display: flex; gap: 3rem;'>
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

<footer>&copy; Amanda Ernar 2023</footer>

