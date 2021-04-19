<script>
  import { onMount } from "svelte";

  export let color;
  export let header;
  export let image_url;
  export let description;
  export let button_text;
  export let button_link;

  $: {
    image_url;
    image_url = check_img();
  }

  var check_img = () => {
    if (image_url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      return image_url;
    }
    return null;
  };

  var check_btn = () => {
    if (!button_text || !button_link) {
      return null;
    }
    return image_url;
  };
</script>

<div class="container">
  <div class="section header shadow" style="background-color: {color}">
    <h2>
      {header}
    </h2>
  </div>
  {#if image_url}
    <div class="section image shadow">
      <img src={image_url} alt="" />
    </div>
  {/if}
  <div class="section description">
    <p>
      {description}
    </p>
  </div>
  {#if check_btn()}
    <div class="section link">
      <a href={button_link}><button class="shadow">{button_text}</button></a>
    </div>
  {/if}
</div>

<style>
  h2 {
    margin: 0 0 0.25rem 0;
    padding: 0;
  }

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

  .header {
    justify-self: center;
    align-self: center;
    margin: auto;

    background-color: #132c33;
    border-radius: 0.5rem;
    color: white;
    padding: 0.5rem 0rem;
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
