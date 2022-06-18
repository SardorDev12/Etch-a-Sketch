function grid(c) {
  let gridWidth = 100 / c;
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < c; j++) {
      let grid = document.createElement("div");
      grid.style.width = gridWidth + "%";
      grid.style.height = gridWidth + "%";

      document.querySelector(".container").appendChild(grid);
    }
  }
}
grid(100);

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.classList.add("red");
  });
});
