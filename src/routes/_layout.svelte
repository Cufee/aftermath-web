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
    max-width: 64em;
    background-color: white;
    margin: 2rem auto;
  }
</style>
