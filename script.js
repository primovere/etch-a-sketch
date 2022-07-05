const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";

// const div = document.createElement("div");
// container.appendChild(div);
for (let i = 0; i < 16; i++) {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");
  container.appendChild(flexContainer);
  flexContainer.style.display = "flex";
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    flexContainer.appendChild(div);
    div.setAttribute("style", "height: 20px; width: 20px;");
  }
}