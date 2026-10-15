# Astro Blog + Decap CMS

An English-language blog built with [Astro](https://astro.build), managed through
[Decap CMS](https://decapcms.org) (admin panel at `/admin`), with content stored
in Git and deployed to GitHub Pages.

## Quick start

```sh
npm install
npm run dev        # site at http://localhost:4321
```

### Editing content locally (no GitHub login needed)

1. In one terminal: `npm run dev`
2. In another terminal: `npx decap-server`
3. In `public/admin/config.yml`, temporarily uncomment `local_backend: true`
   (comment it out again before pushing).
4. Open http://localhost:4321/admin and edit posts — changes are written
   straight to `src/content/blog/`.

## Going live (checklist)

1. **Create a GitHub repo** (branch `main`) and push this project.
2. **Enable GitHub Pages:** repo Settings → Pages → Source → *GitHub Actions*.
   The included workflow (`.github/workflows/deploy.yml`) builds and deploys
   on every push to `main`.
3. **Set your site URL:** in `astro.config.mjs`, change
   `site: 'https://example.com'` to your Pages URL
   (e.g. `https://YOUR_USERNAME.github.io/astro-blog`).
   Used for the sitemap and RSS feed.
4. **Point the CMS at your repo:** in `public/admin/config.yml`, set
   `repo:` to `YOUR_USERNAME/REPO_NAME`.
5. **CMS login on the live site** needs a tiny OAuth bridge, because GitHub
   won't talk to the CMS directly:
   - Deploy `decap-cms-github-oauth-provider`
     (works on Netlify, Vercel, Cloudflare Workers…).
   - Register a GitHub OAuth App (Settings → Developer settings → OAuth Apps)
     with Authorization callback URL = your OAuth server's `/callback`.
   - In `config.yml`, set `base_url:` to your OAuth server and uncomment
     `auth_endpoint: /auth`.
   - Then open `https://YOUR_SITE/admin` and log in with GitHub.

## Project structure

- `src/content/blog/` — blog posts (Markdown/MDX). This is what the CMS edits.
- `src/assets/uploads/` — images uploaded through the CMS (auto-optimized).
- `public/admin/` — the Decap CMS admin panel (served at `/admin`).
- `src/pages/` — routes; `src/pages/blog/[...slug].astro` renders posts.
- `src/consts.ts` — site title and description.
- `.github/workflows/deploy.yml` — build & deploy to GitHub Pages.

## Customizing

- Change `SITE_TITLE` / `SITE_DESCRIPTION` in `src/consts.ts`.
- Add fields to posts: update the schema in `src/content.config.ts`
  **and** the matching fields in `public/admin/config.yml`.

## Commands

| Command         | Action                                       |
| :------------ | :------------------------------------------- |
| `npm install` | Installs dependencies                        |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/`    |
| `npm run preview` | Previews the build locally               |

This project started from Astro's official blog template
(`npm create astro@latest -- --template blog`), based on
[Bear Blog](https://github.com/HermanMartinus/bearblog/).
