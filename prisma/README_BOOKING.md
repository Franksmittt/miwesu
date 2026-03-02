# MIWESU Booking – Phase 1 (Database)

## What’s in place

- **Prisma schema** (`prisma/schema.prisma`): `Unit` (Homestead 16, Stone Villa 6) and `Booking` (with status PENDING / CONFIRMED / CANCELLED, Stripe session id, etc.).
- **Seed** (`prisma/seed.ts`): Inserts the two units. Run after the DB exists.
- **Client** (`lib/prisma.ts`): Single Prisma client for the app.

## Before Phase 2

1. **PostgreSQL**  
   Create a database (e.g. [Supabase](https://supabase.com) or Vercel Postgres) and set in `.env`:

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
   ```

2. **Create tables**

   ```bash
   npm run db:push
   ```

   Or, for migrations:

   ```bash
   npm run db:migrate
   ```

3. **Seed units**

   ```bash
   npm run db:seed
   ```

4. **Optional – Prisma Studio**

   ```bash
   npm run db:studio
   ```

   Use it to set `basePricePerNight` on each unit if you don’t do it in code later.

## Scripts

| Script          | Purpose                    |
|-----------------|----------------------------|
| `npm run db:generate` | Generate Prisma client only |
| `npm run db:push`     | Push schema to DB (no migrations) |
| `npm run db:migrate`  | Create and run migrations  |
| `npm run db:seed`     | Seed the two units         |
| `npm run db:studio`   | Open Prisma Studio         |

Build already runs `prisma generate`; the rest of the site is unchanged.
