# Contributing

Thanks for helping improve this portfolio site.

## How to contribute

1. Fork the repo and create a branch: `git checkout -b fix/short-description`
2. This is a static site — edit `index.html` directly (markup + CSS + JS + `photos` data are all in that file).
3. Preview locally:
   ```bash
   python3 -m http.server 8000
   # open http://localhost:8000
   ```
4. Keep changes small and focused. Match the existing dark cinematic style.
5. Run a quick sanity check before pushing:
   ```bash
   python3 -c "from html.parser import HTMLParser; HTMLParser().feed(open('index.html').read()); print('HTML parses OK')"
   ```
6. Open a Pull Request using the template — include a screenshot for visual changes.

## Content updates

- Photos: edit the `photos` array at the bottom of `index.html` (`id`, `src`, `title`, `category`, `location`, `description`).
- Hero video: edit `heroVideoUrl` in the same script block.

## What not to change

- Don't remove the `<!-- omgithub:readme -->` block in `README.md`.
- Don't commit secrets, API keys, or large binaries. Images should stay hotlinked unless there's a good reason to vendor them.
