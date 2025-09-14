import "../components/PodcastPreview.js";
import { GenreService } from "../utils/GenreService.js";

/**
 * Grid Renderer - Responsible for rendering the grid of podcast previews.
 */
export const createGrid = () => {
  const container = document.getElementById("podcastGrid");

  return {
    render(podcastList) {
      container.innerHTML = "";

      podcastList.forEach(podcast => {
        const preview = document.createElement("podcast-preview");
        preview.setAttribute("id", podcast.id);
        preview.setAttribute("title", podcast.title);
        preview.setAttribute("image", podcast.image);
        preview.setAttribute("genres", podcast.genres.join(",")); // IDs
        preview.setAttribute("seasons", podcast.seasons);
        preview.setAttribute("updated", podcast.updated);
        container.appendChild(preview);
      });
    }
  };
};
