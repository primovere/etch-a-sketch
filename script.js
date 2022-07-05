const container = document.querySelector(".container");


for (let i = 0; i < 16; i++) {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");
  container.appendChild(flexContainer);
  flexContainer.style.display = "flex";
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    flexContainer.appendChild(div);
    div.setAttribute("style", "height: 20px; width: 20px; border: 1px solid black;");
    div.addEventListener("mouseenter", () => div.classList.add("hover"));
  }
}
