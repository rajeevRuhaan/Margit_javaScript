let dot = document.querySelectorAll(".dot");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let start = document.getElementById("start");

let close = document.getElementById("close");

count = 0;
let active = 0;

/* dot.forEach(function (event) {
  dot.addEventListener("click", function () {
    count.push(event.innerHTML);
  });
}); */
dot[0].onclick = function () {
  clicked(0);
};
dot[1].onclick = function () {
  clicked(1);
};
dot[2].onclick = function () {
  clicked(2);
};
dot[3].onclick = function () {
  clicked(3);
};

const clicked = (i) => {
  console.log("clicked:", i);
  count++;
  scoredisplay.textContent = `Your score is ${count}`;
};

const getRandonInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = () => {
  console.log("Game Started");

  let nextActive = pickNext(active);

  dot[nextActive].classList.toggle("active");
  dot[active].classList.remove("active");

  active = nextActive;
  timer = setTimeout(startGame, 1000);

  function pickNext(active) {
    let nextActive = getRandonInt(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else pickNext(active);
  }
};
const endgame = () => {
  clearTimeout(timer);
  console.log("game over");
  overlay.style.visibility = "visible";
  gameover.textContent = `Your score is ${score}`;
};
const reloadGame = () => {
  console.log("close");
  window.location.reload();
};

close.addEventListener("click", reloadGame);
start.addEventListener("click", startGame);
