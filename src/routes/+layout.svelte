<style>
    * {
        margin: 0;
        background: #a7b7d7;
        color: white;
        font-family: century-old-style-std, serif;
        padding: 1rem;
    }

    main {
        padding: 1rem;
        margin: 2rem auto;
        max-width: 40rem;
    }

    header {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }

    a {
        text-decoration: none;
        font-style: italic;
        color: inherit;
    }

    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding-bottom: 2rem;
        text-align: center; 
    }
    
</style>
<script>
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

