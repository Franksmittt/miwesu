/**
 * Prisma stub: database disabled to speed up builds.
 * Re-add @prisma/client and prisma, run "prisma generate" and "npm run build", then restore the real client from git history or reinstall.
 */
const msg = 'Prisma is disabled. Re-add @prisma/client and prisma, run db:generate and db:seed to enable database.'

const stub = () => Promise.reject(new Error(msg))

export const prisma = new Proxy(
  {},
  {
    get() {
      return new Proxy(() => stub(), { get: () => stub })
    },
  }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) as any
