<script>
  import { getRatingColor } from "./stats_utils.js";
  import { _ } from "svelte-i18n";

  export let stats;
  export let title;
  export let rating;
  export let colors;
  export let show_accuracy;
</script>

<div class="wrapper">
  <header class="header">
    <span>{title}</span>
  </header>
  <block class="block">
    <p class="text">{stats.battles}</p>
    <p class="text text-small">{$_("stats.battles")}</p>
  </block>
  <block class="block">
    <p class="text">
      {Math.round(stats.damage_dealt / stats.battles)
        ? Math.round(stats.damage_dealt / stats.battles)
        : "-"}
    </p>
    <p class="text text-small">{$_("stats.damage")}</p>
  </block>
  <block class="block">
    <p class="text">
      {Math.round((stats.wins / stats.battles) * 100)
        ? Math.round((stats.wins / stats.battles) * 100) + "%"
        : "-"}
    </p>
    <p class="text text-small">{$_("stats.winrate")}</p>
  </block>
  {#if show_accuracy}
    <block class="block">
      <p class="text">
        {Math.round((stats.hits / stats.shots) * 100)
          ? Math.round((stats.hits / stats.shots) * 100) + "%"
          : "-"}
      </p>
      <p class="text text-small">{$_("stats.accuracy")}</p>
    </block>
  {/if}
  {#if rating > 0}
    <block class="block">
      <p class="text text-large">
        {#if colors}<span
            class="rating-dot"
            style="background-color: {getRatingColor(rating)}"
          />{/if}{rating > -1 ? rating : " - "}
      </p>
      <p class="text text-small">{$_("stats.rating")}</p>
    </block>
  {/if}
</div>

<style>
  .header {
    display: flex;
    justify-content: center;
    font-size: 1em;
    color: white;
  }

  .text {
    color: white;
    margin: 0;
  }

  .text-small {
    font-size: 0.85em;
    color: rgba(150, 150, 150, 1);
  }

  .rating-dot {
    height: 0.5em;
    width: 0.5em;
    border-radius: 50%;
    margin: 0.15em;
    display: inline-block;
  }
</style>
