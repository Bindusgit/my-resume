
# my-resume

Small React + Vite demo that renders a resume at the `/resume` route. This project uses `react-router-dom` BrowserRouter so the resume is available at a clean URL (e.g. `https://your-site.example/resume`) when hosted on platforms that support SPA fallback.

Quick start

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Deploying

Netlify

- In Netlify, drag & drop the `dist` folder or connect the repository and set the build command to `npm run build` and publish directory to `dist`.
- This project includes `public/_redirects` which instructs Netlify to serve `index.html` for all routes (SPA fallback) so `/resume` will work.

Vercel

- Connect your repository to Vercel. Vercel auto-detects Vite projects. After deploy the resume is available at `https://your-site.vercel.app/resume`.

GitHub Pages

- GitHub Pages doesn't provide SPA fallback out of the box. You can either use `gh-pages` with a `404.html` fallback or switch to hash-based routing. If you prefer clean `/resume` URLs, use Netlify or Vercel.

Shareable link

After deploying, you can share a clean link like:

```
https://your-site.example/resume
```

Notes

- If you prefer to avoid hosting configuration or want immediate compatibility with GitHub Pages without extra setup, switch to hash routing (e.g., `/#/resume`). This repo previously used hash routing.
- To build and deploy:

```powershell
npm install; npm run build
```

Then upload the contents of `dist` to your host.
