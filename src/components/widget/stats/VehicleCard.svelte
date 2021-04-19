<script>
  import { getRatingColor, getLevel } from "./stats_utils.js";
  import { _ } from "svelte-i18n";

  export let tank = {};
  export let show_career;
  export let show_accuracy;
  export let colors = true;
  export let last_session = {};
</script>

<div class="wrapper">
  <header class="header">
    <span class="tank-level">{getLevel(tank.tank_tier)}</span>
    <span class="tank-name">{tank.tank_name}</span>
  </header>
  <block class="block">
    <p class="text text-large">{tank.all.battles}</p>
    {#if show_career}
      <p class="text text-medium">
        {last_session.all && last_session.all.battles > 0
          ? last_session.all.battles
          : " - "}
      </p>
    {/if}
    <p class="text text-small">{$_("stats.battles")}</p>
  </block>
  <block class="block">
    <p class="text text-large">
      {Math.round(tank.all.damage_dealt / tank.all.battles)}
    </p>
    {#if show_career}
      <p class="text text-medium">
        {last_session.all && last_session.all.battles > 0
          ? Math.round(last_session.all.damage_dealt / last_session.all.battles)
          : " - "}
      </p>
    {/if}
    <p class="text text-small">{$_("stats.damage")}</p>
  </block>
  <block class="block">
    <p class="text text-large">
      {Math.round((tank.all.wins / tank.all.battles) * 100)}%
    </p>
    {#if show_career}
      <p class="text text-medium">
        {last_session.all && last_session.all.battles > 0
          ? Math.round(
              (last_session.all.wins / last_session.all.battles) * 100
            ) + "%"
          : " - "}
      </p>
    {/if}
    <p class="text text-small">{$_("stats.winrate")}</p>
  </block>
  {#if show_accuracy}
    <block class="block">
      <p class="text text-large">
        {Math.round((tank.all.hits / tank.all.shots) * 100)}%
      </p>
      {#if show_career}
        <p class="text text-medium">
          {last_session.all && last_session.all.hits >= 0
            ? Math.round(
                (last_session.all.hits / last_session.all.shots) * 100
              ) + "%"
            : " - "}
        </p>
      {/if}
      <p class="text text-small">{$_("stats.accuracy")}</p>
    </block>
  {/if}
  {#if tank.tank_wn8 > 0}
    <block class="block">
      <p class="text text-large rating">
        {#if colors}<span
            class="rating-dot"
            style="background-color: {getRatingColor(tank.tank_wn8)}"
          />{/if}{tank.tank_wn8 > 0 ? tank.tank_wn8 : " - "}
      </p>
      <p class="text text-medium">{$_("stats.rating")}</p>
    </block>
  {/if}
</div>

<style>
  .tank-level {
    z-index: 1;
    right: 0.5em;
    top: 0.125em;
    flex: 0 1 auto;
    font-size: 0.75em;
    position: relative;
    justify-self: flex-end;
    color: rgba(204, 204, 204, 1);
  }
  .tank-name {
    flex: 0 1 auto;
  }

  .header {
    display: flex;
    justify-content: center;
    font-size: 1em;
    color: white;
  }

  /* .tank-premium {
		color: rgba(255, 165, 0, 1);
	} */

  .text {
    color: white;
    margin: 0;
  }

  .text-large {
    font-size: 1.25em;
    justify-content: center;
    flex: 0 1 auto;
  }

  .text-medium {
    font-size: 1em;
    color: rgba(204, 204, 204, 1);
  }

  .text-small {
    font-size: 0.85em;
    color: rgba(150, 150, 150, 1);
  }

  .rating-dot {
    z-index: 1;
    border-radius: 50%;
    right: 0.15em;
    height: 0.5em;
    width: 0.5em;
    position: relative;
    align-self: center;
  }

  .rating {
    display: flex;
    flex-flow: row;
    justify-content: center;
  }
</style>
