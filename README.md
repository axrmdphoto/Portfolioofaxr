# MD Abdulla Photography

An immersive photography portfolio for MD Abdulla, built as a lightweight static website with a cinematic hero, real photo archive, visual explorations, mobile motion, and accessible lightbox viewing.

## Structure

```text
.
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── videos/
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── animations.js
├── pages/
│   ├── about.html
│   ├── projects.html
│   └── contact.html
└── favicon/
    └── favicon.svg
```

## Run locally

No build step is required. Serve the repository with any static server, for example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

The hero uses the remote HLS stream and a remote poster fallback. An optional local video can be placed at `assets/videos/hero.mp4`.

## Notes

- `js/main.js` contains the site behavior, gallery data, lightbox, HLS setup, and navigation.
- `js/animations.js` contains the phone-safe Visual Explorations reveal animation.
- `css/style.css` contains the core design system; `css/responsive.css` contains page and responsive additions.
- Images in the photo archive use remote URLs so the static site stays small and fast.
