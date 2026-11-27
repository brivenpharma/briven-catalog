# Briven Pharmaceutical — Product Catalog & Mobile App

Web & Android catalog repository for **Briven Pharmaceutical**.

## Project Structure

- `src/data/products.ts` — Product catalog items, formulations, therapeutic uses, and categories
- `public/images/` — Brand logo and product packaging imagery
- `src/app/` — Application routes (`/`, `/categories`, `/products`, `/about`)
- `capacitor.config.ts` — Android application configuration (`com.briven.app`)

## Editing Product Catalog Content

To update formulations, therapeutic descriptions, pack sizes, or imagery:
1. Edit entries in `src/data/products.ts`.
2. Add or replace images under `public/images/products/`.

## Build & Setup

> **Note:** The `briven-ui` core package is currently hosted privately during active delivery/milestone settlement and requires repository access credentials during `npm install`.

```bash
npm install
npm run dev      # Local web preview
npm run build    # Production static export (out/)
```
