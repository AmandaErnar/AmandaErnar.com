<script>
    import '$lib/styles/style.css'
    export const prerender = true
</script>

<link rel="stylesheet" href="https://use.typekit.net/xlg6gju.css">

<header>
    <a href="/">
        <img src='img/2.png' alt='Home' style='height: 75px'>
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

<footer>&copy; Amanda Ernar 2023</footer>

