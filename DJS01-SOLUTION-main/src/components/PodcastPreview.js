import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

/** Podcast Preview Component 
*
 * A reusable podcast card element.
 * Accepts attributes: id, title, image, genres, seasons, updated.
 * Dispatches "podcast-clicked" event when clicked.
 */

class PodcastPreview extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // encapsulate styles and structure
    }

    static get observedAttributes(){
    return ['id', 'title', 'image', 'genres', 'seasons', 'updated'];

}

attributeChangedCallback(){
    this.render();
}

connectedCallback() {
    this.render();
}

    render() {
        const id = this.getAttribute('id') || '';
        const title = this.getAttribute('title') || 'Unknown Title';
        const image = this.getAttribute('image') || '';
        // Accept genres as comma-separated string and convert to array of numbers
        const genresAttr = this.getAttribute('genres');
        const genres = genresAttr ? genresAttr.split(',').map(g => Number(g.trim())).filter(g => !isNaN(g)) : [];
        const seasons = this.getAttribute('seasons') || '0';
        const updated = this.getAttribute('updated') || '';

        const genreNames = GenreService.getNames(genres).slice(0, 2); // limit to 2 genres

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: box-shadow 0.3s ease;
                }
                :host(:hover) {
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .content {
                    padding: 16px;
                }
                .title {
                    font-size: 1.2em;
                    margin: 0 0 8px 0;
                }
                .meta {
                    font-size: 0.9em;
                    color: #666;
                }
            </style>
            <img src="${image}" alt="${title}">
            <div class="content">
                <h3 class="title">${title}</h3>
                <div class="meta">
                    <div>Genres: ${genreNames.join(', ')}</div>
                    <div>Seasons: ${seasons}</div>
                    <div>Updated: ${DateUtils.formatDate ? DateUtils.formatDate(updated) : (DateUtils.format ? DateUtils.format(updated) : updated)}</div>
                </div>
            </div>
        `;

        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('podcast-clicked', {
                detail: { id },
                bubbles: true,
                composed: true
            }));
        });
    }
}customElements.define('podcast-preview', PodcastPreview);
    