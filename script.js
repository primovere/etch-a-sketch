const container = document.querySelector(".container");
const button = document.querySelector("button");

function createGrid(num=16) {
  for (let i = 0; i < num; i++) {
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");
    container.appendChild(flexContainer);
    flexContainer.style.display = "flex";
    for (let i = 0; i < num; i++) {
      const div = document.createElement("div");
      flexContainer.appendChild(div);
      div.setAttribute("style", "height: 20px; width: 20px; border: 1px solid black;");
      div.addEventListener("mouseenter", () => div.classList.add("hover"));
    }
  }
}

button.addEventListener("click", () => {
  let num = parseInt(prompt("How many squares would you like per side for the new grid? (Enter the number from 1 to 100)"))
  if (0 < num <= 100) {
    container.remove;
    createGrid(num);
  }
});

createGrid();
