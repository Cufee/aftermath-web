import { addMessages, locale } from "svelte-i18n";

import { dict_eng } from "./dict/en/_import.js";
import { dict_rus } from "./dict/ru/_import.js";

// Add messages to each locale dictionary
addMessages("en", dict_eng);
addMessages("ru", dict_rus);

export function changeLocale(realm) {
  if (!realm) {
    return;
  }
  switch (realm.toUpperCase()) {
    case "RU":
      locale.set("ru");
      break;

    default:
      locale.set("en");
      break;
  }
}
