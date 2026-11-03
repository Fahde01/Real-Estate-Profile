# Real Estate Profile Website

Professional React + TypeScript + Vite website for Illinois broker Ayomiposi Fadeni at Michael Gabriel Realty Inc.

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React icons
- React Hook Form + Zod
- Supabase (optional lead backend)
- ESLint + Prettier + Vitest

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

- `npm run dev` — start local dev server
- `npm run lint` — run ESLint
- `npm run test` — run Vitest
- `npm run build` — production build
- `npm run preview` — preview production build

## Configuration

Update business details in:

- `src/config/siteConfig.ts`

Environment variables:

- Copy `.env.example` to `.env`
- Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to enable secure lead storage
- If not set, forms run in clearly labeled demo mode

## Deployment

1. `npm run build`
2. Deploy `dist/` to a static host (Netlify, Vercel, Cloudflare Pages, etc.)
3. Set production environment variables for Supabase if lead capture is required
4. Replace sitemap domain placeholders in `public/sitemap.xml`

## Compliance notes

- Includes brokerage identification and Illinois license reference
- Includes Fair Housing / Equal Housing Opportunity page
- Listing data is mock/demo only unless authorized MLS/IDX integration is configured
- Legal pages include placeholders for brokerage/legal review
