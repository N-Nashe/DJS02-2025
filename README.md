# DJS02-2025 Podcast Web App

## Overview
This project is a podcast web application designed to showcase, filter, and preview podcasts. It features a modern, responsive UI and supports genre filtering, recently updated sorting, and detailed modal views for each podcast. The app is built using vanilla JavaScript, HTML, and CSS, with a modular structure for scalability and maintainability.

## Features
- **Podcast Grid:** Displays a grid of podcast previews with cover images, titles, and brief descriptions.
- **Genre Filtering:** Users can filter podcasts by genre using a dropdown menu.
- **Recently Updated:** Sort podcasts by their most recent update.
- **Modal View:** Click on a podcast to view detailed information in a modal popup.
- **Responsive Design:** Optimized for both desktop and mobile views.

## Project Structure
```
DJS02-2025/
│
├── components/
│   ├── createModal.js           # Modal creation logic (shared)
│   └── PodcastPreview.js        # Podcast preview component (shared)
│
├── DJS02-main/
│   ├── index.html               # Main HTML file
│   ├── styles.css               # Main stylesheet
│   └── src/
│       ├── data.js              # Podcast data source
│       ├── index.js             # App entry point
│       ├── components/
│       │   ├── createModal.js   # Modal logic (main app)
│       │   └── PodcastPreview.js# Podcast preview (main app)
│       ├── utils/
│       │   ├── DateUtils.js     # Date formatting utilities
│       │   └── GenreService.js  # Genre filtering logic
│       └── views/
│           └── createGrid.js    # Grid rendering logic
│
├── src/
│   ├── data.js                  # (duplicate/legacy)
│   ├── index.js                 # (duplicate/legacy)
│
├── utils/
│   ├── DateUtils.js             # (duplicate/legacy)
│   └── GenreService.js          # (duplicate/legacy)
│
├── views/
│   └── createGrid.js            # (duplicate/legacy)
│
└── wireframe reference images/
    ├── desktop view/            # Desktop UI wireframes
    └── mobile view/             # Mobile UI wireframes
```

## Getting Started
1. **Clone the repository:**
   ```sh
   git clone https://github.com/N-Nashe/DJS02-2025.git
   ```
2. **Open `DJS02-main/index.html` in your browser** to view the app.
3. **Edit source files** in `DJS02-main/src/` to customize data, components, or utilities.

## Development
- All main logic and assets are under `DJS02-main/`.
- Use the wireframe images for UI/UX reference.
- Modular JavaScript files for easy maintenance and extension.

## Folder Notes
- `components/`, `src/`, `utils/`, and `views/` at the root may contain legacy or duplicate files. Use the `DJS02-main/` directory for the latest code.

## Credits
- Developed by N-Nashe
- Wireframes and design references included in `wireframe reference images/`

## License
This project is for educational purposes. Contact the author for licensing details.
