# NeuroFlow AI

Premium marketing site for **NeuroFlow AI** — an AI platform that automates business workflows with autonomous agents.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 4** · **shadcn/Radix UI** · **Lucide** icons
- **Framer Motion** (LazyMotion) · **GSAP** ScrollTrigger · **Lenis** smooth scroll · **Embla** carousel
- **React Hook Form** + **Zod**

## Features

- Dark / light theme with system detection and no FOUC
- Animated hero with an interactive workflow graph, aurora + grid + noise backdrop, and custom cursor
- Reusable, strongly-typed component architecture (`components/`, `sections/`, `hooks/`, `lib/`, `types/`)
- Full SEO: per-route metadata, OpenGraph, Twitter cards, dynamic OG image, JSON-LD, sitemap, robots, manifest
- Accessible by default: semantic HTML, ARIA, keyboard navigation, visible focus, `prefers-reduced-motion`
- Static / SSG rendering across all routes

## Pages

Home · Features · Pricing · About · Blog (+ posts) · Contact

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint the project |
| `npm run typecheck` | Type-check with `tsc` |

## Project structure

```
app/          Routes, layout, sitemap, robots, manifest, OG image
components/    ui/ · common/ · layout/ · backgrounds/
sections/      Composable page sections
hooks/         Reusable client hooks
lib/           Utils, content, SEO, schema, validations
types/         Shared types
styles/        Global styles and design tokens
```
