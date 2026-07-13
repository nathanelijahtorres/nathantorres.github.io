# Nathan Elijah Torres Portfolio

A fully static, mobile-responsive portfolio website built with Tailwind CSS and published-ready for GitHub Pages.

## Architecture

The project is intentionally simple and static:

| File | Purpose |
|---|---|
| `index.html` | Home page with profile image, role, socials, and resume button |
| `about.html` | About page with professional summary |
| `blogs.html` | Blogs index page with cards linking to individual posts |
| `blog-homelab-vlans.html` | Blog post: homelab VLAN segmentation |
| `blog-mini-pc-k8s.html` | Blog post: lightweight Kubernetes mini-PC cluster |
| `blog-monitoring-stack.html` | Blog post: Prometheus + Grafana monitoring stack |
| `app.js` | Shared client-side behavior: dark mode toggle, mobile hamburger menu, current year in footer, Bing dynamic wallpaper URL |
| `dp.jpeg` | Profile image used on the homepage |
| `Nathan Torres - System Administrator.pdf` | Resume file linked from Home and About pages |

## Features

- Static multi-page portfolio (no backend required)
- Mobile-responsive layout using Tailwind utility classes
- Mobile hamburger navigation for small screens
- Dark mode toggle with persisted preference (`localStorage`)
- Light mode uses a primarily light UI and dark mode uses a primarily dark UI
- Bing dynamic wallpaper background (daily image endpoint)
- Material Icons integration
- Resume link to local PDF file
- Sticky footer layout across pages

## Run Locally

No build step is required.

1. Open `index.html` directly in your browser, **or**
2. Serve the folder with a simple static server:

```bash
cd /path/to/portfolio
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish to GitHub Pages

1. Push this folder to a GitHub repository (make sure `index.html` is in the repo root).
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch), folder `/ (root)`
4. Save and wait for deployment.
5. Open the generated GitHub Pages URL.

## Notes

- All links are relative, so navigation works on GitHub Pages.
- If you rename the PDF or image file, update the links in HTML accordingly.
