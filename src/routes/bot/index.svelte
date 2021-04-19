<script>
  var image_url = "./images/Stats.jpg";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>Aftermath - Discord Bot</title>
</svelte:head>

<div class="container">
  {#if image_url}
    <div class="section image shadow">
      <img src={image_url} alt="" />
    </div>
  {/if}
  <div class="section description">
    <p>
      {$_("landing.features.bot.description")}
    </p>
  </div>
  <div class="section link">
    <a href={$_("landing.features.bot.invite_url")} target="_blank"
      ><button class="shadow">Add Aftermath to you Discord server</button></a
    >
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-gap: 1rem;
    align-items: start;
    text-align: center;
  }

  .section {
    justify-self: center;
    align-self: center;
    grid-template-rows: repeat(auto-fit, 1fr);
    width: 80%;
  }

  .image {
    background-color: #132c33;
    border-radius: calc(0.5rem + 3px);
    justify-self: center;
    height: 200px;
  }
  .image img {
    width: 100%;
    height: 200px;

    border-radius: 0.5rem;
    object-fit: cover;
  }

  .description {
    justify-self: center;
    align-self: center;
    margin: 0rem 1rem;
    width: 60%;
  }

  p {
    text-align: justify;
    padding: 0;
    margin: 0;
  }

  button:focus {
    outline: none;
  }
  button:hover {
    outline: none;
    color: white;
    background-color: #51c4d3;
  }
  button {
    justify-self: center;
    align-self: center;
    margin: auto;
    border: none;

    background-color: #d8e3e7;
    border-radius: 0.5rem;
    color: black;

    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 1rem;
  }
</style>
