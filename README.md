# ROVANX

Production-ready local MVP for **ROVANX**, a Moroccan men's vitality and wellness e-commerce brand using Cash on Delivery.

## Tech Stack

- Next.js App Router with TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- Docker and Docker Compose
- Vitest and Playwright

## Local Setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Start PostgreSQL:

```bash
docker compose up -d postgres
```

4. Run Prisma migrations:

```bash
pnpm run prisma:migrate
```

5. Seed demo content:

```bash
pnpm run seed
```

6. Run the app:

```bash
pnpm run dev
```

Open `http://localhost:3000`.

## Admin Dashboard

Open `http://localhost:3000/admin`.

Seeded admin credentials come from `.env`:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

Change these before any production deployment.

## Database

The Prisma schema models:

- Admin users
- Products and categories
- Bundles and bundle items
- Customers
- Orders, order items, and status history
- Admin-editable upsell rules
- Blog articles, categories, tags, authors, and product relations
- FAQs, reviews, and site settings

## Editing Products

Go to `/admin/products`.

Products support pricing, SKU, active status, featured/hero flags, category and descriptions. Formula, dosage, warnings, ONSSA references and final claims are intentionally placeholders until official lab documentation is provided.

## Creating Upsell Rules

Go to `/admin/upsells`.

Rules are database-driven, not hardcoded:

- source product
- offered product
- optional upsell price
- headline
- description
- enabled flag
- priority

After checkout, the app selects one enabled relevant upsell and updates the same order if accepted.

## Creating Bundles

Go to `/admin/bundles`.

The schema supports full bundle composition through `BundleItem`. The current admin screen edits bundle-level content and prices; seeded bundles include initial products.

## Publishing Blog Articles

Go to `/admin/blog`.

Articles support draft/published status, category, author, Markdown body, SEO title and SEO description. Health-related articles must include reviewed sources before production publication.

## Checkout Flow

Visitor flow:

1. Product or shop page
2. Add to cart
3. COD checkout
4. Order creation
5. One website upsell
6. Confirmation page

No customer account is required.

## Environment Variables

See `.env.example`.

Tracking placeholders are present for Meta Pixel, Meta CAPI, Google Analytics, Search Console and TikTok Pixel. No tracking ID is hardcoded.

## Build and Tests

```bash
pnpm run typecheck
pnpm run lint
pnpm run test
pnpm run build
```

Optional Playwright flow:

```bash
pnpm run test:e2e
```

## Docker

Build:

```bash
docker build -t rovanx .
```

Run app and database:

```bash
docker compose up --build
```

For production, run migrations before starting the app:

```bash
pnpm run prisma:deploy
```

## Future Easypanel Deployment

Planned production shape:

- One ROVANX app container
- One dedicated ROVANX PostgreSQL database
- Persistent upload volume for local media, later replaceable with S3-compatible storage or Cloudflare R2
- Environment variables configured in Easypanel
- Run `pnpm run prisma:deploy` during release
- Health check: `/api/health`
- Regular database backups from the VPS or Easypanel backup tooling

## Cloudflare and rovanx.com

Do not configure production DNS yet.

When ready:

- Create an `A` record for `rovanx.com` pointing to the VPS IP
- Create `www` as CNAME to `rovanx.com` or an `A` record to the same IP
- Enable Cloudflare proxy after origin SSL works
- Use Full or Full Strict SSL mode
- Set `NEXT_PUBLIC_SITE_URL=https://rovanx.com`
- Submit sitemap in Google Search Console: `https://rovanx.com/sitemap.xml`

## Remaining Business Placeholders

- Final product formulas
- Ingredients and serving sizes
- Official warnings
- ONSSA references if applicable
- Final product images
- Final legal policies
- Fulfillment provider integration details
- WhatsApp/contact number
- Tracking IDs
- Production shipping and delivery copy
