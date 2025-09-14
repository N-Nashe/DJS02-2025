

# DJS01 Vanilla JS Podcast App

This repository contains a modular podcast web application built entirely with vanilla JavaScript. The app presents a collection of podcasts in a responsive grid layout, allowing users to browse, view details, and explore genres and seasons for each show. The project emphasizes clean code structure, modularity, and the use of modern JavaScript features without relying on frameworks.

## Overview

Users are greeted with a grid of podcast cards, each displaying the podcast's cover image, title, genres, number of seasons, and the last updated date. Clicking on any podcast card opens a modal window with more detailed information, including a description, genre tags, and a breakdown of seasons and episodes. The interface is interactive and leverages custom web components for reusable UI.

## Technologies & Structure

- **Vanilla JavaScript (ES Modules)**: All logic is written in modern JS, using modules for separation of concerns.
- **Custom Elements (Web Components)**: The podcast card is implemented as a custom element for encapsulation and reusability.
- **Utility Modules**: Date formatting and genre name resolution are handled by dedicated utility files.
- **No frameworks or build tools required**: Simply open `index.html` in your browser.

### Folder Structure

```
DJS01-SOLUTION-main/
├── index.html                # Main HTML file
├── styles.css                # App styles
├── src/
│   ├── data.js               # Podcast, genre, and season data
│   ├── index.js              # App entry point
│   ├── components/
│   │   ├── PodcastPreview.js # Custom element for podcast cards
│   │   └── createModal.js    # Modal controller
│   ├── utils/
│   │   ├── DateUtils.js      # Date formatting utility
│   │   └── GenreService.js   # Genre ID to name mapping
│   └── views/
│       └── createGrid.js     # Grid renderer for podcast cards
└── wireframe reference images/ # Reference UI images
```

## Features

- Dynamic rendering of podcast cards using a custom web component
- Modal window for detailed podcast information
- Genre and season data displayed for each podcast
- Clean, modular codebase for easy maintenance and extension
- Minimal styling for clarity; easily customizable

## Usage

Open `index.html` in your browser. Browse the podcasts, and click any card to view more details in a modal. Close the modal to return to the grid view. All data is loaded from static files—no backend or build step is required.

## Customization

To add or edit podcasts, genres, or seasons, modify `src/data.js`. For visual changes, edit `styles.css`. Reference images for desktop and mobile layouts are provided in the `wireframe reference images/` folder.

---

This project is a demonstration of modular, maintainable JavaScript for a real-world UI, using only browser-native features.

## Project Structure


## Folder Structure

```
DJS01-SOLUTION-main/
│
├── index.html                # Main HTML file
├── styles.css                # App styles (customize as needed)
├── src/
│   ├── data.js               # Podcast, genre, and season data
│   ├── index.js              # App entry point and setup
│   ├── components/
│   │   ├── PodcastPreview.js # Custom element for podcast cards
│   │   └── createModal.js    # Modal controller (open/close/update)
│   ├── utils/
│   │   ├── DateUtils.js      # Date formatting utility
│   │   └── GenreService.js   # Genre ID to name mapping
│   └── views/
│       └── createGrid.js     # Grid renderer for podcast cards
└── wireframe reference images/ # Reference UI images
```


## Features

- Renders podcast cards dynamically using a custom element (`<podcast-preview>`)
- Opens a modal with full podcast details on card click
- Displays genres, seasons, and last updated date for each podcast
- Uses utility modules for date formatting and genre name resolution
- Clean, modular code with clear separation of concerns


## Design Principles

- **Modular Design:** Each file and module has a single, focused responsibility.
- **Custom Elements:** The podcast card is a reusable web component.
- **Factory Functions:** Factories like `createGrid` and `createModal` encapsulate logic and state.
- **Abstraction:** Utilities like `DateUtils` and `GenreService` hide implementation details behind clear interfaces.
- **Clear Entry Point:** `index.js` orchestrates setup and event wiring.


## How to Use

1. Open `index.html` in your browser (no build step required).
2. Browse the podcast cards in the grid.
3. Click a card to open the modal with more details.
4. Click the close button to dismiss the modal.


## Customization

- Add or edit podcasts in `src/data.js`.
- Customize styles in `styles.css`.
- Reference the `wireframe reference images/` folder for UI inspiration.

---

**Built with vanilla JavaScript, Web Components, and a focus on clean, maintainable code.**
