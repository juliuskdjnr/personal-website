# Personal Website

This is a portfolio website built with plain HTML, CSS, and JavaScript. It showcases a personal branding homepage, project highlights, miscellaneous information, and a contact form with animated feedback.

## Files

- `index.html` — main site markup and page sections
- `style.css` — visual styles, responsive layout, navigation, and animation effects
- `script.js` — client-side page navigation, mobile menu toggling, reveal animations, and contact form validation

## Features

- Single-page navigation between sections without page reload
- Responsive desktop and mobile navigation with a toggle menu
- Smooth scroll and content reveal animation
- Contact form validation with inline success/error feedback
- Theme colors controlled by CSS variables for easy customization

## Getting Started

1. Open `index.html` in a browser.
2. Or serve the folder with a local web server for best results.

### Example using Python

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

- Update colors in `style.css` under `:root` using CSS custom properties
- Edit the navigation labels and section content directly in `index.html`
- Modify behavior or validation in `script.js`

## Notes

The project is intentionally lightweight and dependency-free, making it easy to host on GitHub Pages or any static web host.

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. In the repo settings, go to the **Pages** section.
3. Select the `main` branch (or the default branch) and the root folder `/`.
4. Save the settings and wait a few minutes.

Your site will be available at `https://<juliuskdjnr>.github.io/<personal-website>/`.
