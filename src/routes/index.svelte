<script>
  import Feature from "../components/landing/features/Feature.svelte";
  import { _ } from "svelte-i18n";

  const live_stats_tmp = "https://aftermath-live-stats.herokuapp.com/";
</script>

<svelte:head>
  <title>Aftermath</title>
</svelte:head>

<div class="container">
  <div class="section banner">
    <h1>Aftermath</h1>
  </div>
  <div class="section description">
    <h2>
      {@html $_("landing.slogan")}
    </h2>
  </div>
  <div class="section features">
    <div class="feature">
      <Feature
        header={$_("landing.features.bot.title")}
        description={$_("landing.features.bot.description")}
        image_url="./images/Discord.jpg"
        button_text={$_("landing.features.bot.button_text")}
        button_link={$_("landing.features.bot.invite_url")}
      />
    </div>

    <div class="feature">
      <Feature
        header={$_("landing.features.widget.title")}
        description={$_("landing.features.widget.description")}
        image_url="./images/OBS.jpg"
        button_text={$_("landing.features.widget.button_text")}
        button_link={live_stats_tmp}
      />
    </div>

    <div class="feature">
      <Feature
        header={$_("landing.features.stats.title")}
        description={$_("landing.features.stats.description")}
        image_url="./images/Stats.jpg"
        secondary={true}
      />
    </div>

    <div class="feature">
      <Feature
        header={$_("landing.features.replays.title")}
        description={$_("landing.features.replays.description")}
        image_url="./images/Replays.jpg"
        secondary={true}
      />
    </div>

    <div class="feature">
      <Feature
        header={$_("landing.features.leaderboards.title")}
        description={$_("landing.features.leaderboards.description")}
        image_url="./images/Leaderboards.jpg"
        secondary={true}
      />
    </div>
  </div>
</div>

<style>
  h2,
  h1 {
    margin: 0;
  }

  .container {
    gap: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }

  .description {
    text-align: center;
    margin: 0 2rem;
  }

  .section.features {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    justify-items: center;
    align-items: center;
  }

  .feature {
    height: 100%;
    width: 100%;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    z-index: 1;
  }

  @media (max-width: 480px) {
    .section.features {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
