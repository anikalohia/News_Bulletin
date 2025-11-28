# Design Document - NewsPortal

## Table of Contents
1. [Wireframes](#wireframes)
2. [Layout Evaluation](#layout-evaluation)
3. [Design System](#design-system)
4. [Non-Plagiarism Statement](#non-plagiarism-statement)

---

## Wireframes

### Desktop Layout (1920px)

```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVBAR                                                              │
│ [Logo] NewsPortal    Politics Sports Business Entertainment Tech   │
│                                                      [Theme] [Menu] │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ HERO SECTION                                                        │
│ ┌──────────────────────┐  ┌──────────────────────────────────────┐ │
│ │                      │  │ [Badge: Category]                    │ │
│ │                      │  │                                      │ │
│ │   Featured Image     │  │ Main Headline (Large, Bold)          │ │
│ │   (Large)            │  │                                      │ │
│ │                      │  │ Summary text...                      │ │
│ │                      │  │                                      │ │
│ │                      │  │ [Author] [Reading Time]              │ │
│ └──────────────────────┘  │ [Read Full Story Button]             │ │
│                           └──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ CATEGORY FILTER BAR                                                 │
│ Filter by: [All] [Politics] [Sports] [Business] [Entertainment]... │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ LATEST NEWS SECTION                                                 │
│ Latest News ═══                                          [View All] │
│                                                                     │
│ ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐                        │
│ │ Image │  │ Image │  │ Image │  │ Image │                        │
│ │       │  │       │  │       │  │       │                        │
│ │ Badge │  │ Badge │  │ Badge │  │ Badge │                        │
│ │ Title │  │ Title │  │ Title │  │ Title │                        │
│ │ Text  │  │ Text  │  │ Text  │  │ Text  │                        │
│ │ Meta  │  │ Meta  │  │ Meta  │  │ Meta  │                        │
│ └───────┘  └───────┘  └───────┘  └───────┘                        │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ POLITICS SECTION                                                    │
│ Politics ═══                                         [View All]     │
│ [4-column grid of news cards similar to above]                     │
└─────────────────────────────────────────────────────────────────────┘

[Similar sections for Sports, Business, Entertainment, Tech, Trending]

┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                              │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│ │ [Logo]   │  │Categories│  │ Company  │  │  Legal   │            │
│ │ About    │  │ Politics │  │ About Us │  │ Privacy  │            │
│ │ Social   │  │ Sports   │  │ Contact  │  │ Terms    │            │
│ │ Icons    │  │ Business │  │ Careers  │  │ Cookies  │            │
│ └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
│                                                                     │
│ © 2024 NewsPortal. All rights reserved.  Made with ❤️ in India    │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375px)

```
┌─────────────────────────┐
│ NAVBAR                  │
│ [Logo] NewsPortal       │
│            [Theme] [≡]  │
└─────────────────────────┘

┌─────────────────────────┐
│ HERO SECTION            │
│ ┌─────────────────────┐ │
│ │                     │ │
│ │  Featured Image     │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
│ [Badge]                 │
│ Main Headline           │
│ (Stacked)               │
│                         │
│ Summary...              │
│                         │
│ [Author] [Time]         │
│ [Read Button]           │
└─────────────────────────┘

┌─────────────────────────┐
│ FILTER (Horizontal)     │
│ [All][Politics][Sports] │
│ ← scrollable →          │
└─────────────────────────┘

┌─────────────────────────┐
│ NEWS CARDS (Single Col) │
│ ┌─────────────────────┐ │
│ │ Image               │ │
│ │ Badge               │ │
│ │ Title               │ │
│ │ Summary             │ │
│ │ Meta                │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Image               │ │
│ │ ...                 │ │
│ └─────────────────────┘ │
└─────────────────────────┘

┌─────────────────────────┐
│ FOOTER (Stacked)        │
│ [Logo]                  │
│ Social Icons            │
│                         │
│ Categories              │
│ Company                 │
│ Legal                   │
│                         │
│ © 2024 NewsPortal       │
└─────────────────────────┘
```

### Article Page Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│ NAVBAR (Same as home)                                               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ ARTICLE HEADER (Light background)                                   │
│                                                                     │
│ Home / Category                                                     │
│                                                                     │
│ [Badge: Category]                                                   │
│                                                                     │
│ Article Headline (Very Large, Bold)                                 │
│                                                                     │
│ Summary paragraph (Larger text)                                     │
│                                                                     │
│ [Author Icon] Author Name  [Calendar] Date  [Clock] Reading Time    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ ARTICLE IMAGE (Full width, large)                                   │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │                                                                 │ │
│ │                    Featured Image                               │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ ARTICLE CONTENT (Centered, max-width)                               │
│                                                                     │
│ Paragraph 1...                                                      │
│                                                                     │
│ Paragraph 2...                                                      │
│                                                                     │
│ Paragraph 3...                                                      │
│                                                                     │
│ ─────────────────────────────────────────────────────────────────  │
│ Share this article                                                  │
│ [Twitter] [Facebook] [LinkedIn] [WhatsApp]                          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ RELATED ARTICLES (Light background)                                 │
│                                                                     │
│ Related Articles                                                    │
│                                                                     │
│ ┌───────────┐  ┌───────────┐  ┌───────────┐                        │
│ │ Card 1    │  │ Card 2    │  │ Card 3    │                        │
│ └───────────┘  └───────────┘  └───────────┘                        │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER (Same as home)                                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Layout Evaluation

### Why This Design?

#### 1. **Hero Section with Side-by-Side Layout**
- **Purpose**: Immediately capture attention with the most important news
- **Design Choice**: Image on one side, content on the other (desktop) creates visual balance
- **Difference from LiveHindustan**: They use a carousel with overlaid text; we use a static hero with separated content for better readability
- **Benefit**: Reduces cognitive load, better accessibility, faster loading

#### 2. **Category Filter Bar**
- **Purpose**: Enable quick content filtering without page reload
- **Design Choice**: Horizontal scrollable button group with clear visual states
- **Difference from LiveHindustan**: They use a sidebar navigation; we use a horizontal filter for better mobile experience
- **Benefit**: More intuitive for modern users, works seamlessly on mobile

#### 3. **Grid-Based Card Layout**
- **Purpose**: Maximize content visibility while maintaining scannability
- **Design Choice**: 4-column grid on desktop, responsive down to 1 column on mobile
- **Difference from LiveHindustan**: They use mixed layouts with different card sizes; we use consistent card sizes for visual harmony
- **Benefit**: Cleaner, more predictable layout that's easier to scan

#### 4. **Alternating Section Backgrounds**
- **Purpose**: Create visual separation between category sections
- **Design Choice**: Subtle background color changes (white/light gray)
- **Difference from LiveHindustan**: They use borders and dividers; we use background colors
- **Benefit**: Softer visual hierarchy, better dark mode support

#### 5. **Minimal Navbar**
- **Purpose**: Keep focus on content, not navigation
- **Design Choice**: Logo, category links, theme toggle, mobile menu
- **Difference from LiveHindustan**: They have a dense navbar with many options; we keep it minimal
- **Benefit**: Less overwhelming, better mobile experience

#### 6. **Article Page with Centered Content**
- **Purpose**: Optimal reading experience
- **Design Choice**: Max-width content column (896px) for comfortable reading
- **Difference from LiveHindustan**: They use full-width content; we center it
- **Benefit**: Better typography, reduced eye strain, follows modern blog design patterns

### Spacing Philosophy

- **Consistent Scale**: Using Tailwind's spacing scale (4px base unit)
- **Generous Whitespace**: More breathing room than traditional news sites
- **Section Padding**: 48px (py-12) for desktop, 32px for mobile
- **Card Gaps**: 24px (gap-6) for optimal separation
- **Content Margins**: 16px-24px between elements within cards

---

## Design System

### Color Palette

#### Primary Colors (Red Theme)
```
primary-50:  #fef2f2  (Very light red)
primary-100: #fee2e2
primary-200: #fecaca
primary-300: #fca5a5
primary-400: #f87171
primary-500: #ef4444  ← Main brand color
primary-600: #dc2626  ← Primary interactive
primary-700: #b91c1c
primary-800: #991b1b
primary-900: #7f1d1d  (Very dark red)
```

#### Accent Colors (Orange Theme)
```
accent-500: #f97316  ← Secondary brand color
accent-600: #ea580c  ← Accent interactive
```

#### Neutral Colors (Gray Scale)
```
neutral-50:  #fafafa  (Backgrounds - light mode)
neutral-100: #f5f5f5  (Subtle backgrounds)
neutral-200: #e5e5e5  (Borders)
neutral-600: #525252  (Secondary text)
neutral-900: #171717  (Primary text)
neutral-950: #0a0a0a  (Backgrounds - dark mode)
```

**Why This Palette?**
- Red conveys urgency and importance (news)
- Orange adds energy and warmth
- Different from LiveHindustan's blue/teal theme
- High contrast for accessibility (WCAG AA compliant)

### Typography

#### Font Family
```
Primary: Inter (Google Fonts)
Fallback: system-ui, sans-serif
```

**Why Inter?**
- Excellent readability at all sizes
- Modern, professional appearance
- Optimized for screens
- Different from LiveHindustan's font choices

#### Font Sizes
```
Headings:
- H1 (Hero): 3rem (48px) → 5rem (80px) on large screens
- H2 (Section): 1.5rem (24px) → 1.875rem (30px)
- H3 (Card Title): 1.125rem (18px)

Body:
- Base: 1rem (16px)
- Small: 0.875rem (14px)
- Large: 1.25rem (20px)
```

### Spacing Scale

```
Base unit: 4px (0.25rem)

Common values:
- xs: 8px   (gap-2)
- sm: 12px  (gap-3)
- md: 16px  (gap-4)
- lg: 24px  (gap-6)
- xl: 48px  (py-12)
- 2xl: 64px (py-16)
```

### Shadows

```
soft:    Subtle card elevation
soft-lg: Prominent card hover state
glow:    Special accent (CTAs)
```

### Border Radius

```
sm: 0.5rem (8px)   - Badges
md: 0.75rem (12px) - Buttons
lg: 1rem (16px)    - Cards
2xl: 1.5rem (24px) - Hero images
```

### Animations

```
fade-in:  Opacity 0 → 1 (0.5s)
slide-up: Transform Y + opacity (0.5s)
shimmer:  Loading skeleton (2s infinite)
hover:    Scale/translate on hover (0.2s)
```

---

## Non-Plagiarism Statement

### What We Did NOT Copy from LiveHindustan

#### Layout & Structure
❌ **NOT Copied**: Their multi-column asymmetric grid
✅ **Our Choice**: Symmetric 4-column grid with consistent card sizes

❌ **NOT Copied**: Their carousel-based hero section
✅ **Our Choice**: Static hero with side-by-side layout

❌ **NOT Copied**: Their sidebar navigation
✅ **Our Choice**: Top navigation with horizontal category filter

❌ **NOT Copied**: Their dense, information-heavy layout
✅ **Our Choice**: Spacious, breathing room with generous margins

#### Visual Design
❌ **NOT Copied**: Their blue/teal color scheme
✅ **Our Choice**: Red/orange color palette

❌ **NOT Copied**: Their font choices
✅ **Our Choice**: Inter font family

❌ **NOT Copied**: Their card design with overlapping elements
✅ **Our Choice**: Clean cards with clear boundaries

❌ **NOT Copied**: Their heavy use of borders and dividers
✅ **Our Choice**: Background colors for section separation

#### Functionality
❌ **NOT Copied**: Their page-based category navigation
✅ **Our Choice**: Client-side filtering with smooth transitions

❌ **NOT Copied**: Their ad-heavy layout
✅ **Our Choice**: Clean, ad-free design focused on content

❌ **NOT Copied**: Their complex header with multiple rows
✅ **Our Choice**: Single-row minimal header

### Our Original Design Decisions

1. **Dark Mode First**: Built with dark mode as a first-class citizen
2. **Animation-Rich**: Framer Motion for smooth, delightful interactions
3. **Mobile-First**: Designed for mobile, enhanced for desktop
4. **Accessibility**: WCAG compliant with proper focus states
5. **Modern Stack**: Next.js 15, React 19, latest best practices
6. **Performance**: Optimized images, static generation, minimal JS
7. **Typography**: Larger text, better line height for comfortable reading
8. **Whitespace**: Generous spacing for modern, clean aesthetic

### Inspiration Sources (Not LiveHindustan)

- **Medium**: Article page layout and reading experience
- **The Verge**: Card-based grid system
- **Stripe**: Color usage and shadows
- **Tailwind UI**: Component patterns and spacing
- **Modern SaaS apps**: Dark mode implementation

---

## Conclusion

This design is **completely original** and built from the ground up with modern web design principles. While we studied LiveHindustan for understanding news portal requirements, we deliberately chose different approaches for layout, colors, typography, spacing, and functionality to create a unique, contemporary news experience.
