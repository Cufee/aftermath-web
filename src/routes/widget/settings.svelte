<script>
  import Stats from "../../components/widget/stats/Stats.svelte";
  import { _ } from "svelte-i18n";

  const tmp_request = {};
</script>

<div class="container">
  <div class="section">
    <h3>{$_("nav.widget")}</h3>
    <Stats />
  </div>
  <div class="section">
    <h3>Settings</h3>
    <p>Settings</p>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    align-items: start;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .section {
    justify-self: center;
    align-self: center;
    height: 400px;
  }
</style>
