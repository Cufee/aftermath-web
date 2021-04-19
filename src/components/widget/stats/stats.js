const API_STATS = "https://stats.aftermath.link/public/stats";

import { update } from "./stats_utils";

let default_request = {
  sort_key: "-last_battle",
  detailed_limit: 3,
  special: true,
  player_id: 0,
  player_name: "",
  realm: "",
  days: 0,
};

export async function getStats(request) {
  request = update(default_request, request);

  if (!request.player_id && request.player_name && request.realm) {
    // Check player name
    let url =
      "https://api.aftermath.link/public/" +
      request.realm.toUpperCase() +
      "/players/name/" +
      request.player_name;
    const res = await fetch(url, {
      method: "GET",
    });
    const json = await res.json();
    if (json.error) {
      return json;
    } else {
      request.player_id = json.player_id;
    }
  }

  if (!request.player_id || !request.realm) {
    return { error: "invalid player or server" };
  }

  console.log(request);

  const res = await fetch(API_STATS, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(request),
  });
  return await res.json();
}

export async function checkBattles(request) {
  if (!request.realm) {
    return 0;
  }
  var domain = getRealmURI(request.realm);
  if (!domain) {
    return 0;
  }
  const res = await fetch(
    domain +
      "/wotb/account/info/?application_id=0572f2bc6c5546d9ff6a9081728a20db&fields=last_battle_time&account_id=" +
      request.player_id,
    {
      method: "GET",
    }
  );
  const json = await res.json();
  if (json.error || !json.data[request.player_id]) {
    return 0;
  }

  return json.data[request.player_id].last_battle_time;
}

export async function resetSpecialStats(request) {
  if (!request.player_id) {
    return { error: "no player ID" };
  }

  let url = "https://stats.aftermath.link/public/stats/reset-special";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (res.status !== 200) {
    return await res.json();
  }
  return {};
}

export async function getMockStats() {
  let req = request;
  req.player_id = 1042390387;
  req.realm = "NA";
  return await getStats(req);
}

function getRealmURI(realm) {
  switch (realm.toUpperCase()) {
    case "NA":
      return "https://api.wotblitz.com";
    case "EU":
      return "https://api.wotblitz.eu";
    case "RU":
      return "https://api.wotblitz.ru";
    case "ASIA" || "AS":
      return "https://api.wotblitz.asia";
    default:
      return null;
  }
}
