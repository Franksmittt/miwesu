-- Run this in Supabase Dashboard → SQL Editor to fix "RLS Disabled in Public" warnings.
-- The app uses Prisma (postgres user) only; enabling RLS locks down the PostgREST API (anon key).
-- Prisma connections bypass RLS; anon key will have no access to these tables.

ALTER TABLE "Unit" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Booking" ENABLE ROW LEVEL SECURITY;

-- Optional: allow service_role (backend) full access if you ever use Supabase client server-side.
-- For Prisma-only access you can leave no policies; anon gets no access.
-- CREATE POLICY "Service role full access" ON "Unit" FOR ALL TO service_role USING (true) WITH CHECK (true);
-- CREATE POLICY "Service role full access" ON "Booking" FOR ALL TO service_role USING (true) WITH CHECK (true);
