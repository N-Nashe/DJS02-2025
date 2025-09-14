import { podcasts } from "./data.js";
import { createModal } from "./components/createModal.js";
import { createGrid } from "./views/createGrid.js";

/**
 * Initializes the podcast application.
 */
function init() {
  document
    .getElementById("closeModal")
    .addEventListener("click", createModal.close);

  const grid = createGrid();
  grid.render(podcasts);

  // Listen for clicks on podcast previews
  document.addEventListener("podcast-clicked", (e) => {
    createModal.open(e.detail);
  });
}

init();

