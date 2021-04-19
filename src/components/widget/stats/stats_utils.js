export function getLevel(lvl) {
  switch (lvl) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    case 10:
      return "X";
    default:
      return "";
  }
}

// GetRatingColor - Rating color calculator
export function getRatingColor(r) {
  if (r <= 0) {
    return "white";
  }
  if (r > 0 && r < 301) {
    return "#ff0000";
  }
  if (r > 300 && r < 451) {
    return "#fb5353";
  }
  if (r > 450 && r < 651) {
    return "#ffa031";
  }
  if (r > 650 && r < 901) {
    return "#fff441";
  }
  if (r > 900 && r < 1201) {
    return "#95f53e";
  }
  if (r > 1200 && r < 1601) {
    return "#67be33";
  }
  if (r > 1600 && r < 2001) {
    return "#6aecff";
  }
  if (r > 2000 && r < 2451) {
    return "#2eaec1";
  }
  if (r > 2450 && r < 2901) {
    return "#d590f5";
  }
  if (r > 2900) {
    return "#bd49f2";
  }
}

export function update(obj /*, …*/) {
  for (var i = 1; i < arguments.length; i++) {
    for (var prop in arguments[i]) {
      var val = arguments[i][prop];
      if (typeof val == "object")
        // this also applies to arrays or null!
        update(obj[prop], val);
      else obj[prop] = val;
    }
  }
  return obj;
}
