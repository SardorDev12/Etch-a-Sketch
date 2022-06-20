const container = document.querySelector(".container");
const gridNumber = document.querySelector("input");
const makeGridBtn = document.querySelector("button");
const clearBtn = document.querySelector(".clear");

function createGrid(cellNumber) {
  for (let i = 0; i < cellNumber; i++) {
    for (let j = 0; j < cellNumber; j++) {
      let divWidth = 100 / cellNumber;
      let div = document.createElement("div");
      div.classList.add("div");
      div.style.width = divWidth + "%";
      container.appendChild(div);
    }
  }
}

makeGridBtn.addEventListener("click", () => {
  createGrid(gridNumber.value);
  const indDiv = document.querySelectorAll(".div");

  indDiv.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.classList.add("black");
    });
  });
});

clearBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
