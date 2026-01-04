# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Next.js 14 (App Router), featuring a portfolio of projects that can be written in either Markdown or Jupyter Notebook format. The site renders both content types seamlessly with custom components.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Route Structure

The app uses Next.js App Router with route groups:
- `src/app/page.tsx` - Home page
- `src/app/(main)/` - Main layout group with centered content wrapper
  - `/about` - About page
  - `/cv` - CV page
  - `/projects` - Projects listing page
  - `/projects/[slug]` - Dynamic project pages

### Projects System

**Key Files:**
- `src/app/(main)/projects/utils.ts` - Project parsing utilities
- `src/app/(main)/projects/nbType.ts` - TypeScript types for Jupyter notebooks

**How it works:**
1. Project files live in `src/projects/` (published) or `src/projects-wip/` (work-in-progress)
2. Projects can be either `.md` (Markdown) or `.ipynb` (Jupyter Notebook) files
3. The `parseProject()` function tries to parse as Markdown first, falls back to Jupyter
4. Markdown files support frontmatter metadata: `title`, `desc`, `date`
5. Projects are listed on `/projects` sorted by date (most recent first)

**Adding a new project:**
1. Create either a `.md` or `.ipynb` file in `src/projects/`
2. For Markdown: Add frontmatter with title, desc, and date
3. For Jupyter: The notebook's metadata.title is used
4. The file name (without extension) becomes the URL slug

### Content Rendering

**Markdown Component** (`src/components/markdown.tsx`):
- Uses `next-mdx-remote` for server-side MDX rendering
- Supports math equations via KaTeX (inline and block)
- Supports GitHub Flavored Markdown
- Custom code blocks via `Code` component
- Supports Mermaid diagrams in code blocks
- Custom image handling via `MdImage` component

**Notebook Component** (`src/components/nb.tsx`):
- Renders Jupyter notebook cells sequentially
- Markdown cells rendered via the `Markdown` component
- Code cells rendered via the `Code` component (assumes Python)

### MDX Configuration

MDX is configured in `next.config.mjs` with:
- `remark-math` for LaTeX math syntax
- `rehype-katex` for rendering math
- Supports `.md`, `.mdx`, `.js`, `.jsx`, `.ts`, `.tsx` as page extensions

### Styling

- Uses Tailwind CSS with `@tailwindcss/typography` for prose styling
- Custom path alias: `@/*` maps to `src/*`
- Main content uses responsive width classes (8/12 on md, 7/12 on lg)

### TypeScript Configuration

- Strict mode enabled
- Uses path aliases: `@/*` → `./src/*`
- Module resolution: bundler
- JSX: preserve

### ESLint Configuration

Several rules are disabled:
- `react/no-unescaped-entities`
- `react/jsx-key`
- `react-hooks/exhaustive-deps`

## Important Notes

- When working with projects, remember there are TWO directories: `src/projects/` (published) and `src/projects-wip/` (drafts)
- The projects listing page only reads from `src/projects/`, not `src/projects-wip/`
- Project slugs must match the filename without extension
- All project parsing happens at build time (server components with fs.readFileSync)
- Math rendering requires both remark-math (parsing) and rehype-katex (rendering)
- yarn in the package manager for this project