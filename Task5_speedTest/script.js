let dot = document.querySelectorAll(".dot");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
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

const endgame = () => {
  console.log("game over");
  overlay.style.visibility = "visible";
};
const close = () => {
  window.location.reload();
};
