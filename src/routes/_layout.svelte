<script>
  // https://colorhunt.co/palette/273466

  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<body>
  <Nav {segment} />

  <main>
    <slot />
  </main>
</body>

<style>
  body {
    height: 100vh;
  }

  main {
    position: relative;
    max-width: 64em;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }

  :global().shadow {
    box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
      0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
      0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  }
</style>
