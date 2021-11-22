// Creating a 16x16 grid of divs
const container = document.querySelector("#container");

for (i = 1; i <= 256; i++) {
  const gridBox = document.createElement("div");
  gridBox.classList.add("gridBox");
  gridBox.addEventListener("mouseover", function () {
    gridBox.style.backgroundColor = "#222";
  });

  container.appendChild(gridBox);
}

//Add event listener on button
const resetButton = document.querySelector("button");

resetButton.addEventListener("click", function () {
  let gridBox = document.querySelectorAll(".gridBox");
  for (i = 0; i < gridBox.length; i++) {
    gridBox[i].remove();
  }

  let newGrid = prompt("How many boxes per side? (Max 100)");
  if (newGrid <= 100) {
    for (e = 1; e <= newGrid * newGrid; e++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("gridBox");
      gridBox.style.width = 960 / newGrid + "px";
      gridBox.style.height = 960 / newGrid + "px";
      gridBox.addEventListener("mouseover", function () {
        gridBox.style.backgroundColor = "#222";
      });

      container.appendChild(gridBox);
    }
  } else {
    alert("That's not 100 or less.");
  }
});
