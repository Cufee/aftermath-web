<script>
  export let player_name;
  export let clan_tag;
  export let slim = false;
</script>

<div class="wrapper" id={slim ? "slim" : ""}>
  <span class="name-plate">{player_name}{clan_tag ? ` [${clan_tag}]` : ""}</span
  >
</div>

<style>
  .name-plate {
    text-align: center;
    color: white;
    margin: auto;
  }

  #slim {
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
    min-height: 0px;
    margin: auto;
  }
</style>
