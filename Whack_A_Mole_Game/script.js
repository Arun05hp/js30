const startbtn = document.getElementById("startbtn");
const container = document.getElementById("container");

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelectorAll(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;

startbtn.addEventListener("click", () => {
  container.classList.add("show");
});

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
