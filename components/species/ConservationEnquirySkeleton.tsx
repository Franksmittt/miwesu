/** Skeleton for streamed enquiry panel (PPR-style shell; no client JS). */
export function ConservationEnquirySkeleton() {
  return (
    <section
      className="border-y border-white/10 bg-onyx px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      aria-hidden
    >
      <div className="mx-auto max-w-4xl">
        <div className="h-4 w-40 animate-pulse rounded bg-white/10" />
        <div className="mt-6 h-10 w-full max-w-md animate-pulse rounded bg-white/10" />
        <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded bg-white/10" />
        <div className="mt-2 h-4 w-full max-w-xl animate-pulse rounded bg-white/10" />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <div className="h-12 flex-1 animate-pulse rounded-lg bg-white/10" />
          <div className="h-12 flex-1 animate-pulse rounded-lg bg-white/10" />
        </div>
      </div>
    </section>
  )
}
