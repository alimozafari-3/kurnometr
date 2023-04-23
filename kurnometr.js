let h = document.querySelector(".hour");
let m = document.querySelector(".mantue");
let s = document.querySelector(".second");

let hh = 0;
let mm = 0;
let ss = 0;

let interval;

function start() {
  interval = setInterval(() => {
    if (ss < 59) {
      ss += 1;
      less10(ss, s);
    } else {
      ss = 0;
      if (mm < 59) {
        mm += 1;
        less10(mm, m);
      } else {
        hh += 1;
        less10(hh, h);
      }
    }
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function less10(val, elm) {
  if (val < 10) {
    elm.innerHTML = "0" + val;
  } else {
    elm.innerHTML = val;
  }
}
