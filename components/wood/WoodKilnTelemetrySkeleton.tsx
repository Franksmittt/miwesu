export function WoodKilnTelemetrySkeleton() {
  return (
    <div
      className="liquid-glass-dark rounded-2xl border border-white/10 px-4 py-6 sm:px-6 sm:py-8"
      aria-hidden
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="h-4 w-48 animate-pulse rounded bg-white/10" />
        <div className="h-8 w-40 animate-pulse rounded bg-white/10" />
      </div>
      <div className="mt-6 h-2 w-full animate-pulse rounded-full bg-white/10" />
    </div>
  )
}
