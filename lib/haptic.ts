/**
 * Haptic feedback for primary actions (mobile).
 * Uses Vibration API when available; no-op on desktop.
 */
const DEFAULT_PATTERN = [10, 50, 10] // light–medium–light pulse

export function hapticLight(): void {
  if (typeof navigator === 'undefined' || !navigator.vibrate) return
  navigator.vibrate(10)
}

export function hapticConfirm(): void {
  if (typeof navigator === 'undefined' || !navigator.vibrate) return
  navigator.vibrate(DEFAULT_PATTERN)
}

export function hapticSuccess(): void {
  if (typeof navigator === 'undefined' || !navigator.vibrate) return
  navigator.vibrate([5, 30, 5, 30, 5])
}
