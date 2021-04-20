<script>
  export let color;
  export let header;
  export let secondary;
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
  <div
    class:secondary
    class="section header shadow"
    style="background-color: {color}"
  >
    <h2>
      {header}
    </h2>
  </div>
  {#if image_url}
    <div class="section image shadow" class:secondary>
      <img src={image_url} alt="" />
    </div>
  {/if}
  <div class="section description" class:secondary>
    <p>
      {description}
    </p>
  </div>
  {#if check_btn()}
    <div class="section link" class:secondary>
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
    align-content: start;
    text-align: center;
    display: grid;

    grid-auto-columns: 1fr;
    grid-gap: 1rem;
    height: 100%;
    grid-template-rows: auto auto minmax(auto, 1fr) auto;
  }

  .section {
    justify-self: center;
    width: 80%;
  }

  .header {
    background-color: #132c33;
    justify-self: center;
    color: white;
    margin: auto;

    border-radius: 0.5rem;
    padding: 0.5rem 0rem;
    width: 70%;
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
    margin: 0rem 1rem;
  }

  .link {
    height: 100%;
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
    color: black;
    background-color: #d8e3e7;
  }
  button {
    justify-self: center;
    align-self: center;
    margin: auto;
    border: none;

    background-color: #51c4d3;
    border-radius: 0.5rem;
    color: white;

    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 1rem;
  }

  .secondary.image,
  .secondary img {
    height: 100px;
  }
  .secondary.header {
    background-color: #132c33;
    padding: 0.25rem 0rem;
    font-size: 0.9rem;
    color: white;
  }
</style>
