<script>
  import Feature from "../components/landing/features/Feature.svelte";
  import { _ } from "svelte-i18n";

  const bot_invite =
    "https://discord.com/api/oauth2/authorize?client_id=719829369798918144&permissions=67497024&redirect_uri=https%3A%2F%2Faftermath.link%2F&scope=bot";

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
  <div class="section strike" />
  <div class="section features">
    <div class="feature">
      <Feature
        header={$_("landing.features.bot.title")}
        description={$_("landing.features.bot.description")}
        image_url="./images/Discord.jpg"
        button_text={$_("landing.features.bot.button_text")}
        button_link={bot_invite}
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
  .container {
    gap: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }

  .section * {
    padding: 0;
    margin: 0;
  }

  .description {
    text-align: center;
  }

  .section.features {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-items: center;
    align-items: center;
  }

  .feature {
    height: 100%;
    width: 100%;
  }

  .strike {
    width: 80%;
    height: 4px;
    background-color: lightgray;
    border-radius: 4px;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
