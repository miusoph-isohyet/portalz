function runSlashalash(program) {
  let out = "";
  let v, s;
  let t = program;

  // core interpreter loop
  while ((v = /^((?:[^\\\/]|\\[^])*)\/((?:[^\\\/]|\\[^])*)\/((?:[^\\\/]|\\[^])*)\//.exec(t))) {
    t = t.slice(v[0].length);
    v = v.map(x => x.replace(/\\([^])/g, "$1"));
    out += v[1];
    s = true;
    while (s) {
      s = false;
      t = t.replace(v[2], () => {
        s = true;
        return v[3];
      });
    }
  }

  out += t
    .replace(/\\([^])/g, (y, x) => x == "/" ? "\u012F" : x)
    .replace(/\/[^]*$/, "");

  return out;
}

function do_run() {
  const program = document.getElementById("code").value;
  const result = runTripleSlash(program);
  document.getElementById("output").textContent = result;
}

function init() {
  document.getElementById("output").textContent = "";
}