<script>
  export let segment;

  import { onMount } from "svelte";
  import { changeLocale } from "../localization/localization";
  import { _ } from "svelte-i18n";

  var locale = "EN";
  $: {
    locale;
    changeLocale(locale);
  }

  onMount(async () => {
    changeLocale("en");
  });
</script>

<nav>
  <ul>
    <li class="landing">
      <a aria-current={segment === undefined ? "page" : undefined} href="."
        >Aftermath</a
      >
    </li>

    <!-- <li class="search"><input type="text" maxlength="16" /></li> -->

    <li>
      <a aria-current={segment === "bot" ? "page" : undefined} href="bot"
        >{$_("nav.bot")}</a
      >
    </li>

    <!-- for the widget link, we're using rel=prefetch so that Sapper prefetches
		     the widget data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        aria-current={segment === "widget" ? "page" : undefined}
        rel="prefetch"
        href="widget">{$_("nav.widget")}</a
      >
    </li>

    <li class="login">
      <a href="login" aria-current={segment === "login" ? "page" : undefined}
        >{$_("nav.login")}</a
      >
    </li>

    <li
      class="language"
      on:click={() => {
        locale === "RU" || !locale ? (locale = "EN") : (locale = "RU");
      }}
    >
      <span>{locale === "RU" ? "Русский" : "English"}</span>
    </li>
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    /* background-color: #eeebdd; */
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }
  li:hover {
    background-color: hsl(0, 0%, 97%);
    cursor: pointer;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    /* background-color: rgb(255, 62, 0); */
    background-color: #126e82;
    display: block;
    bottom: -1px;
  }

  a,
  span {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .landing {
    font-weight: 600;
    color: #51c4d3;
  }

  .language {
    float: right;
    padding: 0 0.5rem;
  }

  .login {
    float: right;
  }

  .login {
    background-color: #d8e3e7;
    padding: 0 0.5rem;
    font-weight: 600;
    color: #132c33;
    border: none;
  }
  .login:focus {
    outline: none;
  }
  .login:hover {
    outline: none;
    color: white;
    background-color: #51c4d3;
  }

  .search {
    position: absolute;
    left: 50%;
    min-width: 200px;
    transform: translatex(-50%);
  }
  .search:hover {
    background-color: inherit;
  }
  .search input {
    margin: 1rem;
  }
</style>
