# site

Personal site and blog, built with [Astro](https://astro.build) and served at https://lukas-stein.github.io/site/.

## Write

Add a Markdown file to `src/content/articles/` (or `src/content/projects/`):

```md
---
title: "Post title"
description: "One sentence for the list and link previews."
date: 2026-10-23   # optional
tags: [data]       # optional
draft: true        # optional, hides the post
---
```

Put images in `src/assets/` and link them relatively: `![Alt text](../../assets/image.png)`.
Astro resizes them and converts them to WebP at build time.

## Run

```sh
npm install
npm run dev     # http://localhost:4321/site/
npm run build   # outputs to dist/
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
