<script>
  import { _ } from "svelte-i18n";
  import Menu from "./Menu.svelte";
  import MenuOption from "./MenuOption.svelte";
  import MenuDivider from "./MenuDivider.svelte";

  export let brand;
  export let colors;
  export let name_plate;
  export let show_career;
  export let reset_stats;
  export let show_vehicles;
  export let show_accuracy;
  export let name_plate_slim;
  export let show_total_random;
  export let show_total_ranked;

  let pos = { x: 0, y: 0 };
  let showMenu = false;

  async function onRightClick(e) {
    if (showMenu) {
      showMenu = false;
      await new Promise((res) => setTimeout(res, 100));
    }

    pos = { x: e.clientX, y: e.clientY };
    showMenu = true;
  }

  function closeMenu() {
    showMenu = false;
  }
</script>

{#if showMenu}
  <Menu {...pos} on:click={closeMenu} on:clickoutside={closeMenu}>
    <MenuOption
      on:click={() => {
        brand = !brand;
      }}
      isSelected={brand}
      text={$_("settings.show_branding")}
    />
    <MenuOption
      on:click={() => {
        name_plate = !name_plate;
      }}
      isSelected={name_plate}
      text={$_("settings.show_player_name")}
    />
    <MenuOption
      on:click={() => {
        show_total_random = !show_total_random;
      }}
      isSelected={show_total_random}
      text={$_("settings.show_random_totals")}
    />
    <MenuOption
      on:click={() => {
        show_total_ranked = !show_total_ranked;
      }}
      isSelected={show_total_ranked}
      text={$_("settings.show_rating_totals")}
    />
    <MenuOption
      on:click={() => {
        show_vehicles = !show_vehicles;
      }}
      isSelected={show_vehicles}
      text={$_("settings.show_tank_details")}
    />
    <MenuOption
      on:click={() => {
        show_accuracy = !show_accuracy;
      }}
      isSelected={show_accuracy}
      text={$_("settings.show_accuracy")}
    />
    <MenuOption
      on:click={() => {
        show_career = !show_career;
      }}
      isSelected={show_career}
      text={$_("settings.show_tank_career")}
    />
    <MenuDivider />
    <MenuOption
      on:click={() => {
        colors = !colors;
      }}
      isSelected={colors}
      text={$_("settings.show_rating_colors")}
    />
    {#if name_plate}
      <MenuOption
        on:click={() => {
          name_plate_slim = !name_plate_slim;
        }}
        isSelected={name_plate_slim}
        text={$_("settings.slim_player_name")}
      />
    {/if}
    <MenuDivider />
    <MenuOption
      on:click={() => {
        reset_stats();
      }}
      isSelected={true}
      text={$_("settings.reset_session")}
    />
  </Menu>
{/if}

<svelte:body on:contextmenu|preventDefault={onRightClick} />
