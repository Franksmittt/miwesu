# MIWESU — Spacing & Layout Standard

Use this for consistency across desktop and mobile.

## Container padding
- **Standard:** `px-4 sm:px-6 lg:px-8` (16px mobile, 24px tablet, 32px desktop).
- **With max-width:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (narrower content: max-w-4xl, max-w-5xl, etc. same px scale).

## Section vertical padding
- **Standard:** `py-16 sm:py-24 lg:py-32` (64px → 96px → 128px).
- **Tighter:** `py-12 sm:py-16 lg:py-20` for dense content.

## Touch targets (mobile)
- Interactive elements (links, buttons): **min 44px** height — use `min-h-[44px]`, `py-3`, or `touch-manipulation` where appropriate.
- Menu and footer links: `min-h-[44px] py-3 flex items-center touch-manipulation`.

## Gaps
- **Grids:** `gap-4 sm:gap-6 lg:gap-8` or `gap-6 md:gap-8 lg:gap-12` for section content.
- **Stack:** `space-y-4 sm:space-y-6` or `space-y-6 sm:space-y-8`.

## Layout
- **Content top offset (non-home):** `pt-[100px] sm:pt-[112px]` in Layout for fixed nav.
- **Overflow:** `overflow-x-hidden` on html/body to avoid horizontal scroll on mobile.
