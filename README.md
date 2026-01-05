# Miwesu - The Royal Residence

A luxury Next.js website for Miwesu Game Reserve, showcasing the Iron Eden sanctuary in the Waterberg region of South Africa.

## Features

- Modern Next.js 14 with App Router
- Tailwind CSS with custom luxury color palette (Gold, Onyx, Marble)
- Responsive design with mobile menu
- Smooth scroll animations
- Lucide React icons
- Google Fonts (Cinzel & Montserrat)
- Image optimization with Next.js Image component
- **Multipage structure ready** - Easy to add new pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
miwesu/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Home page (landing page)
│   ├── about/
│   │   └── page.tsx    # Example: About page
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Layout.tsx      # Shared layout (Navigation + Modal)
│   ├── Navigation.tsx  # Navigation bar with mobile menu
│   └── VettingModal.tsx # Access request modal
├── public/             # Static assets
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## Adding New Pages

To add a new page, create a new folder in the `app` directory with a `page.tsx` file:

```
app/
  ├── your-page/
  │   └── page.tsx
```

Example:
```tsx
import Layout from '@/components/Layout'

export default function YourPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-marble pt-24">
        {/* Your page content */}
      </main>
    </Layout>
  )
}
```

The `Layout` component automatically includes the Navigation and VettingModal on all pages.

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:
- **Gold**: 300 (#E5C687), 400 (#D4AF37), 500 (#C5A059), 600 (#997B3D)
- **Onyx**: DEFAULT (#050505), light (#121212)
- **Marble**: DEFAULT (#FAFAFA), dark (#F4F4F4)

### Fonts

Fonts are loaded via Next.js Google Fonts in `app/layout.tsx`:
- **Cinzel**: Serif font for headings
- **Montserrat**: Sans-serif font for body text

## Technologies

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## License

© 2025 Miwesu Game Reserve
