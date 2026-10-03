# MD ABDULLA — Portfolio

[![Pages](https://github.com/axrmdphoto/Portfolioofaxr/actions/workflows/pages.yml/badge.svg)](https://github.com/axrmdphoto/Portfolioofaxr/actions/workflows/pages.yml)
[![CI](https://github.com/axrmdphoto/Portfolioofaxr/actions/workflows/ci.yml/badge.svg)](https://github.com/axrmdphoto/Portfolioofaxr/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-axrmdphoto.github.io%2FPortfolioofaxr-89aacc?style=flat)](https://axrmdphoto.github.io/Portfolioofaxr/)

> **Capturing the beauty of real moments.** Photography portfolio for MD Abdulla — Creative Director, Cinematographer, Editor & Photographer from Bilasipara, Assam.

Live site: **https://axrmdphoto.github.io/Portfolioofaxr/**

## ✨ Features

- **Full-gyro 3D experience** — pointer tilt + real `deviceorientation` gyro + touch-drag + scroll-velocity lean in one buttery `requestAnimationFrame` loop
- **Cinematic hero** — HLS video background, parallax layers, floating orbs, grain + gyro-reactive vignette
- **Live gallery** — filterable photo grid (`Nature / Night / Landscape / Street / Interior / Monochrome`) with 3D tilt, glare, ripple + lightbox
- **Journal, Explorations, Roles, Skills, Certificates, Contact** sections with GSAP ScrollTrigger reveals
- **Tactile details** — magnetic buttons, cursor glow + dot, scroll progress bar, press squash, marquee that reacts to scroll speed
- **Accessible & fast** — single-file `index.html`, skip link, focus states, `prefers-reduced-motion` support, lazy images

## 🛠️ Tech

- Plain HTML + CSS + JS (no build step)
- [GSAP + ScrollTrigger](https://gsap.com/) via CDN for scroll animations
- [hls.js](https://github.com/video-dev/hls.js/) for hero video streaming
- Google Fonts: Instrument Serif + Inter
- GitHub Pages for hosting, GitHub Actions for CI

## 🚀 Quick start

No build needed — it's a static site.

```bash
git clone https://github.com/axrmdphoto/Portfolioofaxr.git
cd Portfolioofaxr
# option 1: just open it
open index.html
# option 2: serve locally (recommended)
python3 -m http.server 8000
# → http://localhost:8000
```

## 📁 Structure

```text
Portfolioofaxr/
├── index.html                  # entire site (markup + styles + app JS + photo data)
├── .github/
│   ├── workflows/
│   │   ├── pages.yml           # deploy to GitHub Pages
│   │   ├── ci.yml              # HTML sanity checks
│   │   └── opencode.yml        # agent automation (pre-existing)
│   ├── ISSUE_TEMPLATE/         # bug / content-update templates
│   └── pull_request_template.md
├── LICENSE                     # MIT
├── SECURITY.md
├── CONTRIBUTING.md
└── README.md
```

Photos and hero video are hotlinked (Supaimg + Mux). To replace, edit the `photos` array and `heroVideoUrl` at the bottom of `index.html`.

## 🌐 Deployment

Pushes to `main` auto-deploy via **`.github/workflows/pages.yml`** (Pages → Deploy from GitHub Actions).

Custom domain (optional): add a `CNAME` file with your domain, then set it under Repo → Settings → Pages → Custom domain.

## 🤝 Contributing

Small portfolio site — but fixes and content updates welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📬 Contact

- Instagram: [@axr.md](https://instagram.com/axr.md) · [@awesomebilasipara](https://instagram.com/awesomebilasipara) · [@little_loopcrochet](https://instagram.com/little_loopcrochet)
- Email: [axr.md.photo@gmail.com](mailto:axr.md.photo@gmail.com)

## 📄 License

MIT — see [LICENSE](./LICENSE).

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Remixed using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/axrmdphoto/Portfolioofaxr)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/axrmdphoto/Portfolioofaxr)

- 🎮 [Open the project](https://omgithub.com/axrmdphoto/Portfolioofaxr).
- ✨ [Remix this project](https://omgithub.com/?remix=axrmdphoto%2FPortfolioofaxr).
- 💻 [Explore the source](https://github.com/axrmdphoto/Portfolioofaxr).
- 🛠️ [Check build runs](https://github.com/axrmdphoto/Portfolioofaxr/actions).
- 🐛 [Report an issue](https://github.com/axrmdphoto/Portfolioofaxr/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/axrmdphoto).
- 🌍 [Create with OMGithub](https://omgithub.com).
- 🧬 [Explore the remix source](https://github.com/axrmdphoto/Portfolioofaxr).
<!-- omgithub:readme:end -->
