const decrease = document.querySelector("#btn-decrease");
const reset = document.querySelector("#btn-reset");
const increase = document.querySelector("#btn-increase");
const counter = document.querySelector(".counter");
let counterValue = counter.textContent;

decrease.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
  checkColour();
});

reset.addEventListener("click", () => {
  counterValue = 0;
  counter.textContent = counterValue;
  checkColour();
});

increase.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
  checkColour();
});

function checkColour() {
  if (counterValue > 0) {
    counter.style.color = "green";
  } else if (counterValue < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
