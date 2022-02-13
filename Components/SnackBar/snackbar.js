const btnBaseline = document.getElementById("btn-baseline");
const btnLeading = document.getElementById("btn-leading");
const baselineBar = document.querySelector(".baseline");
const leadingBar = document.querySelector(".leading");

btnBaseline.addEventListener("click", baselineToggle);
btnLeading.addEventListener("click", leadingToggle);

function baselineToggle() {
  baselineBar.style.visibility = "visible";
  setTimeout(() => {
    baselineBar.style.visibility = "hidden";
  }, 5000);
}

function leadingToggle() {
  leadingBar.style.visibility = "visible";
  setTimeout(() => {
    leadingBar.style.visibility = "hidden";
  }, 5000);
}
