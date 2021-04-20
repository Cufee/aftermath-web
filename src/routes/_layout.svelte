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
  main {
    max-width: 84em;
    background-color: white;
    margin: 2rem auto;
  }

  :global()img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>
