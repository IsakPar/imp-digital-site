# 🚀 IMP Digital Services - Next.js Project

A premium, performance-optimized website built with Next.js 14, TypeScript, and Tailwind CSS. This project implements the comprehensive design system and technical specifications from the IMP Digital Services PRD.

## 📋 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Custom Design System** with Tailwind CSS
- 🔒 **TypeScript** for type safety and developer experience
- 🎬 **Animation Ready** with Framer Motion, Three.js, GSAP, and Lottie
- 📱 **Responsive Design** with mobile-first approach
- ♿ **Accessibility** WCAG 2.1 AA compliant
- 🔍 **SEO Optimized** with structured data and meta tags
- ⚡ **Performance** optimized for Core Web Vitals
- 🛠️ **Developer Tools** ESLint, Prettier, Husky pre-commit hooks

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14.2+ (App Router) |
| **Language** | TypeScript 5.4+ |
| **Styling** | Tailwind CSS 3.4+ |
| **Animations** | Framer Motion 11.0+, Three.js, GSAP 3.12+, Lottie |
| **Image Optimization** | Sharp |
| **Performance** | Partytown, React Intersection Observer |
| **Code Quality** | ESLint, Prettier, Husky |
| **Package Manager** | npm |

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd imp-digital-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run analyze` | Analyze bundle size |

## 📁 Project Structure

```
imp-digital-site/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── globals.css    # Global styles & design system
│   │   ├── layout.tsx     # Root layout with SEO
│   │   └── page.tsx       # Homepage
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── sections/     # Page sections
│   │   └── animations/   # Animation components
│   └── types/            # TypeScript type definitions
├── tailwind.config.ts     # Tailwind configuration
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── .prettierrc            # Prettier configuration
├── .husky/                # Git hooks
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

| Color | Variable | Hex | Usage |
|-------|----------|-----|-------|
| Ivory | `ivory` | `#FAF9F6` | Background |
| Matcha | `matcha` | `#D9E5C1` | Primary accent |
| Matcha Dark | `matcha-dark` | `#B8C9A3` | Secondary accent |
| Charcoal | `charcoal` | `#1F1F1F` | Text |
| Silver | `silver` | `#C4C4C4` | Borders, secondary UI |

### Typography

- **Primary Font:** Space Grotesk (Google Fonts)
- **Scale:** 1.250 (Major Third)
- **Weights:** 300, 400, 500, 600, 700

### Component Classes

```css
/* Buttons */
.btn-primary     /* Primary button with gradient */
.btn-secondary   /* Secondary button with border */

/* Cards */
.card           /* Standard card with hover effects */

/* Forms */
.form-input     /* Styled input fields */
.form-label     /* Form labels */

/* Animations */
.animate-fade-up     /* Fade up animation */
.animate-stagger-1   /* 100ms delay */
.animate-stagger-2   /* 200ms delay */
```

## ⚡ Performance Targets

Based on the PRD specifications:

| Metric | Target |
|--------|--------|
| **LCP** | < 2.0s |
| **FID** | < 50ms |
| **CLS** | < 0.05 |
| **FCP** | < 1.2s |
| **TTI** | < 3.5s |
| **Bundle Size** | < 170KB (gzipped) |
| **CSS Size** | < 25KB (gzipped) |

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Performance Optimizations

The project includes several performance optimizations:

- **Image Optimization:** WebP/AVIF formats with Sharp
- **Bundle Splitting:** Vendor and animation libraries separated
- **Font Optimization:** Preloaded Google Fonts
- **Security Headers:** CSP, HSTS, and other security headers
- **Compression:** Enabled for all assets
- **Caching:** Aggressive caching for static assets

## ♿ Accessibility

The project follows WCAG 2.1 AA standards:

- **Keyboard Navigation:** All interactive elements accessible via Tab
- **Screen Readers:** Semantic HTML and ARIA labels
- **Color Contrast:** 4.5:1 minimum for normal text
- **Focus Indicators:** Visible focus outlines
- **Reduced Motion:** Respects `prefers-reduced-motion`

## 🔍 SEO Features

- **Meta Tags:** Complete Open Graph and Twitter Card support
- **Structured Data:** JSON-LD for organization information
- **Sitemap:** Auto-generated sitemap.xml
- **Canonical URLs:** Proper canonical URL structure
- **Performance:** Optimized for Core Web Vitals

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure environment variables**
3. **Deploy automatically on push to main**

### Manual Build

```bash
npm run build
npm run start
```

## 🤝 Development Workflow

### Code Quality

The project uses several tools to maintain code quality:

- **ESLint:** Code linting and error detection
- **Prettier:** Code formatting
- **Husky:** Pre-commit hooks
- **TypeScript:** Type checking

### Pre-commit Hooks

Husky runs these checks before each commit:
- ESLint linting
- Prettier formatting
- TypeScript type checking

### Branch Protection

Recommended branch protection rules:
- Require pull request reviews
- Require status checks to pass
- Require up-to-date branches

## 📚 Component Development

### Creating New Components

1. **Create component file:** `src/components/ui/NewComponent.tsx`
2. **Add types:** Export interfaces in `src/types/index.ts`
3. **Add styles:** Use Tailwind classes or add to global CSS
4. **Export:** Add to component index files

### Animation Guidelines

- Use Framer Motion for component animations
- Respect `prefers-reduced-motion`
- Follow the animation tokens in the design system
- Test performance on mobile devices

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
- Run `npm run type-check` to identify TypeScript issues
- Run `npm run lint:fix` to auto-fix linting errors

**Styling Issues:**
- Check Tailwind class names in the design system
- Verify CSS custom properties are defined
- Test across different browsers

**Performance Issues:**
- Use `npm run analyze` to check bundle sizes
- Optimize images with proper formats and sizes
- Check for unused dependencies

## 📞 Support

For project-specific questions or issues, please refer to the original PRD documentation or create an issue in the repository.

---

**Built with ❤️ for IMP Digital Services**
