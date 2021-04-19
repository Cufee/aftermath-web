<script>
  // Import modules
  import { update } from "./stats_utils";
  import Branding from "./Branding.svelte";
  import NamePlate from "./NamePlate.svelte";
  import TotalStats from "./TotalStats.svelte";
  import VehicleCard from "./VehicleCard.svelte";
  import StatsMenu from "./contextMenu/StatsMenu.svelte";
  import { resetSpecialStats, getStats, checkBattles } from "./stats.js";

  import { _ } from "svelte-i18n";

  // Render
  var default_settings = {
    modules: {
      branding: true,
      total_stats_rating: true,
      name_plate: true,
      show_career: true,
      total_stats: true,
      vehicle_cards: true,
      show_accuracy: true,
    },
    config: {
      colors: true,
      slim_name: false,
    },
    enabled: false,
  };

  // Input Settings
  export var settings = {};
  $: {
    settings;
    if (settings) {
      settings = update(default_settings, settings);
    }
  }

  // Data Request
  export var data_request;

  // Player data
  let error;
  let player_data;
  let last_battle_time;
  export let reset = () => {
    if (error) {
      return;
    }
    error = null;
    checkBattles(data_request).then((battle_time) => {
      if (battle_time === 0 || last_battle_time !== battle_time) {
        getStats(data_request).then((data) => {
          if (data.error) {
            error = data.error;
            return;
          }
          player_data = data;
          swapURLParams();
          console.log("refreshed");
        });
      } else {
        console.log("no new battles");
      }
      last_battle_time = battle_time;
    });
  };

  // Auto Reset
  if (settings.enabled) {
    setInterval(reset, 5000);
  }

  // Reset session
  let reset_special = () => {
    error = null;
    resetSpecialStats(req).then((data) => {
      if (data.error) {
        error = data.error;
        return;
      }
      console.log("reset session");
    });
  };
</script>

<div>
  {#if !data_request}
    Waiting for settings
  {:else if !player_data}
    {$_("widget_stats.loading")}
  {:else}
    <StatsMenu
      bind:colors={settings.config.colors}
      bind:brand={settings.modules.branding}
      bind:reset_stats={reset_special}
      bind:name_plate={settings.modules.name_plate}
      bind:show_career={settings.modules.show_career}
      bind:name_plate_slim={settings.config.slim_name}
      bind:show_vehicles={settings.modules.vehicle_cards}
      bind:show_accuracy={settings.modules.show_accuracy}
      bind:show_total_random={settings.modules.total_stats}
      bind:show_total_ranked={settings.modules.total_stats_rating}
    />
    {#if settings.modules.branding}
      <Branding />
    {/if}
    {#if settings.modules.name_plate}
      <NamePlate
        bind:player_name={player_data.player_details.nickname}
        bind:clan_tag={player_data.player_details.clan.tag}
        bind:slim={settings.config.slim_name}
      />
    {/if}
    {#if settings.total_stats}
      <TotalStats
        bind:colors={settings.config.colors}
        bind:stats={player_data.session.stats_random}
        bind:show_accuracy={settings.modules.show_accuracy}
        rating={player_data.session.session_wn8}
        title={$_("stats.random_battles")}
      />
    {/if}
    {#if settings.modules.total_stats_rating}
      <TotalStats
        bind:colors={settings.config.colors}
        bind:show_accuracy={settings.modules.show_accuracy}
        bind:stats={player_data.session.stats_rating}
        rating={-1}
        title={$_("stats.rating_battles")}
      />
    {/if}
    {#if settings.modules.vehicle_cards}
      {#each player_data.session.vehicles as tank}
        <VehicleCard
          bind:tank
          bind:colors={settings.config.colors}
          bind:show_career={settings.modules.show_career}
          bind:show_accuracy={settings.modules.show_accuracy}
          bind:last_session={player_data.last_session.vehicles[
            tank.tank_id.toString()
          ]}
        />
      {/each}
    {/if}
  {/if}
</div>

<style>
  .loading {
    color: white;
    font-size: 2em;
    text-align: center;
  }
  .error {
    color: red;
    font-size: 1.5em;
    text-align: center;
    background-color: white;
  }
</style>
