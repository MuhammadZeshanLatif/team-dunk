# Team Dunk Website

Production-ready Next.js 16 website for Team Dunk Corporation.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The fully static website is generated in `out/`.

## Hostinger deployment

Upload the **contents** of `out/` to Hostinger's `public_html` directory. No Node.js server is required. SSL and the `teamdunk.net` domain should be connected in Hostinger before launch.

## Editing content

- Shared site information, navigation, gallery items and blog posts: `lib/site.js`
- Page content: `app/`
- Reusable layout components: `components/`
- Styles: `app/globals.css`
- Images: `public/images/`

All site imagery is WebP and all rendered images include descriptive alternative text.
