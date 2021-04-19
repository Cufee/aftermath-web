<script>
  import { _ } from "svelte-i18n";
  export let config = {
    slim: true,
  };
</script>

<div class="brand" class:slim={config.slim}>{$_("stats.branding")}</div>

<style>
  .brand {
    text-align: center;
    font-size: 0.75em;
    color: white;
    padding: 10px;
  }

  .slim {
    font-size: 0.75em;
  }
</style>
