# Fixing "Can't reach database server" (Supabase)

Your `.env` and Prisma setup are correct. The error means your machine **cannot reach** the Supabase database host (often the project is paused or the network blocks the connection).

## 1. Unpause the Supabase project (most common)

Free-tier Supabase projects **pause after ~7 days** of no activity.

1. Go to [Supabase Dashboard](https://supabase.com/dashboard).
2. Open project **Miwesu_booking**.
3. If you see **“Project paused”** or **“Restore project”**, click it and wait until the project is running again.
4. Then run:

   ```bash
   npm run db:push
   npm run db:seed
   ```

## 2. Use the Session pooler (if direct connection is blocked)

Some networks or firewalls block port **5432**. Supabase’s **Session pooler** uses a different host and sometimes works when the direct connection does not.

1. In Supabase: **Project Settings** → **Database**.
2. Under **Connection string**, find **“Connection pooling”** / **“Session mode”** (URI that uses **port 5432** and a host like `aws-0-XX.pooler.supabase.com`).
3. Copy that URI. It will look like:
   ```text
   postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres
   ```
4. **URL-encode the password** in the URI (replace `@` → `%40`, `?` → `%3F`, `+` → `%2B`, `#` → `%23`).
5. Put the result in `.env` as `DATABASE_URL`, and add `?schema=public` if it’s not there:
   ```env
   DATABASE_URL="postgresql://postgres.gtfopwqlnmqjrnyxwvrr:YOUR_ENCODED_PASSWORD@aws-0-REGION.pooler.supabase.com:5432/postgres?schema=public"
   ```
6. Run again:

   ```bash
   npm run db:push
   npm run db:seed
   ```

## 3. Check network / firewall

- Try from another network (e.g. mobile hotspot) to see if the problem is your ISP or firewall.
- Ensure nothing is blocking outbound **port 5432** (or 6543 if you try the transaction pooler).

Once the database is reachable, `db:push` will create the tables and `db:seed` will add The Homestead and The Stone Villa.
