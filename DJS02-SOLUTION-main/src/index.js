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
    const podcastId = e.detail.id;
    const podcast = podcasts.find(p => p.id == podcastId);
    if (podcast) {
      createModal.open(podcast);
    }
  });
}

init();

