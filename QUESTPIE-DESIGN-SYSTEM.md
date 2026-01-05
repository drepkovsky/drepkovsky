# QUESTPIE Design System

## Úvod

QUESTPIE Design System je moderný, tech-orientovaný dizajn systém s temnou estetikou a kybernetickým nádychom. Systém je navrhnutý pre developer portfolio a profesionálne aplikácie, s dôrazom na minimalizmus, čitateľnosť a technologický vzhľad.

## Dizajnová Filozofia

### Hlavné Princípy
- **Minimalizmus** - Redukcia na esenciálne prvky
- **Tech Aesthetic** - Inšpirované terminálmi a vývojárskymi nástrojmi
- **Vysoký Kontrast** - Tmavé pozadie s živými akcent farbami
- **Typografia** - Kombinácia monospace a sans-serif fontov
- **Geometria** - Ostré hrany, žiadne zaoblené rohy

---

## Farby

### Primárna Paleta

```css
--brand-primary: #b700ff;      /* Hlavná fialová farba */
--brand-black: #0a0a0a;        /* Hlavné pozadie */
--brand-offBlack: #111111;     /* Sekundárne pozadie */
--brand-surface: #1a1a1a;      /* Povrchy, karty */
--brand-border: #333333;       /* Oddeľovače, bordery */
```

### Použitie Farieb

#### Primary (#b700ff)
- **Použitie**: Akcentová farba, linky, ikony, hover stavy
- **Príklady**: Section titles, badges, borders, links
- **Glow efekty**: `shadow-[0_0_20px_rgba(183,0,255,0.4)]`

#### Black (#0a0a0a)
- **Použitie**: Hlavné pozadie stránky
- **Background efekty**: Grid pattern s opacity 40%

#### Off-Black (#111111)
- **Použitie**: Kontajnery, sidebar
- **Príklady**: Sidebar sekcie, modály

#### Surface (#1a1a1a)
- **Použitie**: Karty, elevated surfaces
- **Príklady**: Project cards, experience cards

#### Border (#333333)
- **Použitie**: Delimitery, rámčeky
- **Príklady**: Timeline borders, card borders

### Neutrálne Farby

```css
--neutral-300: text-neutral-300;   /* Hlavný text */
--neutral-400: text-neutral-400;   /* Sekundárny text */
--neutral-500: text-neutral-500;   /* Tertiary text */
--neutral-600: text-neutral-600;   /* Disabled / footer */
```

---

## Typografia

### Font Family

```css
/* Primary Font */
font-family: system-ui, -apple-system, sans-serif;

/* Monospace Font (pre technický vzhľad) */
font-family: 'Monaco', 'Courier New', monospace;
```

### Typografická Hierarchia

#### Nadpisy

**H1 - Main Name**
```tsx
<h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
  // Desktop: 48px (3rem)
  // Mobile: 36px (2.25rem)
```

**H2 - Section Titles**
```tsx
<h2 className="text-sm font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase">
  // Size: 14px
  // Letter spacing: 0.2em
  // Transform: uppercase
```

**H3 - Subsection Titles**
```tsx
<h3 className="text-lg font-bold text-white leading-tight">
  // Size: 18px
  // Font weight: 700
```

**H4 - Card Titles**
```tsx
<h4 className="font-bold text-white">
  // Size: 16px (base)
  // Font weight: 700
```

#### Body Text

**Large Body**
```tsx
<p className="text-lg md:text-xl text-brand-primary font-mono">
  // Desktop: 20px
  // Mobile: 18px
  // Pre subtitle/role
```

**Medium Body**
```tsx
<p className="text-sm text-neutral-400 leading-relaxed">
  // Size: 14px
  // Line height: 1.625
  // Hlavný paragraph text
```

**Small Body**
```tsx
<span className="text-xs text-neutral-500">
  // Size: 12px
  // Metadata, dates
```

**Tiny Text**
```tsx
<span className="text-[10px] font-mono">
  // Size: 10px
  // Badges, tech stack
```

### Print Optimalizácia

```css
/* Print size adjustments */
print:text-3xl      /* H1: 30px */
print:text-xs       /* H3: 12px */
print:text-[10px]   /* Body: 10px */
print:text-[11px]   /* Large body: 11px */
print:text-[9px]    /* Tiny: 9px */
```

---

## Spacing System

### Scale (Tailwind-based)

```
0.5  → 2px
1    → 4px
1.5  → 6px
2    → 8px
3    → 12px
4    → 16px
6    → 24px
8    → 32px
12   → 48px
16   → 64px
```

### Použitie

**Margins**
```tsx
mb-2   // 8px bottom margin (malé elementy)
mb-4   // 16px (stredné elementy)
mb-6   // 24px (sekcie)
mb-12  // 48px (veľké sekcie)
```

**Padding**
```tsx
p-4    // 16px all sides (cards)
p-6    // 24px (containers)
px-2   // 8px horizontal (badges)
py-1   // 4px vertical (badges)
```

**Gaps**
```tsx
gap-2   // 8px (badges)
gap-3   // 12px (section title)
gap-4   // 16px (cards grid)
gap-8   // 32px (header elements)
```

### Print Spacing

```tsx
print:mb-1     // 4px
print:mb-2     // 8px
print:mb-4     // 16px
print:gap-3    // 12px
print:p-3      // 12px
```

---

## Komponenty

### 1. Badge

**Použitie**: Tech stack, skills, categories

```tsx
<Badge>TypeScript</Badge>
```

**Štýly**:
```css
px-2 py-1
text-xs font-mono font-medium
text-brand-primary
bg-brand-primary/10
border border-brand-primary/20
```

**Varianty**:
- Standard badge (outlined)
- Tech stack badge (smaller border)

---

### 2. Section Title

**Použitie**: Hlavičky sekcií

```tsx
<SectionTitle icon={Terminal}>Where I've worked</SectionTitle>
```

**Štruktúra**:
- Ikona (optional, 20px)
- Text (uppercase, tracked, mono)
- Horizontal line delimiter

**Štýly**:
```css
text-sm font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase
flex items-center gap-3
```

---

### 3. Experience Card

**Použitie**: Timeline events, work history

**Štruktúra**:
- Left border (timeline)
- Decorative dot (9x9px square)
- Header (role, company, period)
- Description
- Achievements list (bulleted with ›)
- Tech stack badges

**Timeline Border**:
```css
border-l border-brand-border
relative pl-6 pb-8
```

**Timeline Dot**:
```css
position: absolute
left: -5px
width: 9px
height: 9px
background: brand-black
border: brand-primary
```

---

### 4. Project Card

**Použitie**: Project showcase, portfolio items

**Štruktúra**:
- Border container
- Header (title, period, external links)
- Description
- Details list (bulleted with -)
- Hover effect

**Štýly**:
```css
border border-brand-border
bg-brand-surface/30
backdrop-blur-sm
p-4
hover:border-brand-primary/50
transition-colors
```

**Links**:
- External link icon (3x3 grid)
- GitHub icon (source code)
- Hover: color transition to white

---

### 5. Sidebar Item

**Použitie**: Contact info, metadata

**Štruktúra**:
- Icon + Label (uppercase, tracked)
- Value (linkable)

```tsx
<SidebarItem 
  icon={Mail}
  label="Email"
  value={contact.email}
  href={`mailto:${contact.email}`}
/>
```

---

### 6. Carousel (Mobile)

**Použitie**: Project cards na mobile devices

**Features**:
- Snap scroll
- Fade indicators na krajoch
- Dot navigation
- Touch-friendly

**Behavior**:
```tsx
snap-x snap-mandatory
overflow-x-auto
scrollbar-hide
```

---

## Ikony

### Zdroj
**Phosphor Icons React** - v2.x
- Outline style
- Konzistentná hrúbka čiar
- Minimalistický vzhľad

### Používané Ikony

```tsx
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  CalendarBlankIcon,
  ArrowSquareOutIcon,
  TerminalWindowIcon,
  CpuIcon,
  HardDrivesIcon,
  CodeIcon,
  PrinterIcon,
  PackageIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
```

### Veľkosti

```css
w-3 h-3    /* 12px - small links */
w-4 h-4    /* 16px - sidebar icons */
w-5 h-5    /* 20px - section titles */
w-6 h-6    /* 24px - large buttons */
```

---

## Efekty & Animácie

### Hover Transitions

```css
transition-colors
duration-300
hover:border-brand-primary/50
hover:text-brand-primary
```

### Background Effects

**Grid Pattern**:
```tsx
<div className="bg-grid-pattern opacity-40" />
```

**Gradient Glow**:
```tsx
<div className="w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px]" />
```

### Shadow Effects

**Primary Glow**:
```css
shadow-[0_0_20px_rgba(183,0,255,0.4)]
```

**Card Elevation**:
```css
backdrop-blur-sm
```

---

## Responsive Design

### Breakpoints (Tailwind)

```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
```

### Mobile First Approach

**Layout Stack**:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
  // Mobile: Single column
  // Desktop: Main + Sidebar
</div>
```

**Typography Scale**:
```tsx
className="text-4xl md:text-5xl"
// Mobile: 36px
// Desktop: 48px
```

**Carousel vs Grid**:
```tsx
// Mobile: Carousel
<div className="md:hidden">
  <ProjectCarousel />
</div>

// Desktop: Grid
<div className="hidden md:grid">
  <ProjectGrid />
</div>
```

---

## Print Styles

### Optimalizácie

**Page Setup**:
```css
@page {
  size: A4;
  margin: 15mm;
}
```

**Visibility**:
```css
print:hidden    /* Hide decorative elements */
print:block     /* Show essential content */
```

**Spacing Reduction**:
```css
print:mb-2      /* Tighter margins */
print:gap-3     /* Smaller gaps */
print:p-3       /* Less padding */
```

**Typography**:
```css
print:text-xs
print:text-[10px]
print:leading-tight
print:break-all   /* URL line breaks */
```

**Colors**:
```css
print:border-brand-primary/30
print:bg-brand-offBlack/60
print:grayscale-0
```

**Page Breaks**:
```css
print-break-avoid   /* Keep sections together */
break-after-avoid
```

---

## Layout Patterns

### Container

```tsx
<main className="max-w-[1000px] mx-auto p-6 sm:p-8 md:p-12">
  // Max width: 1000px
  // Centered
  // Responsive padding
</main>
```

### Two Column Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
  <div>{/* Main content */}</div>
  <aside className="lg:sticky lg:top-8">{/* Sidebar */}</aside>
</div>
```

### Card Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {items.map((item) => (
    <Card key={item.id} />
  ))}
</div>
```

---

## Utility Classes

### Custom Utilities

**Scrollbar Hide**:
```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

**Background Grid Pattern**:
```css
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(183, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(183, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

---

## Best Practices

### 1. Konzistencia
- Vždy používať definované farby z palety
- Dodržiavať spacing scale
- Používať štandardné komponenty

### 2. Accessibility
- Zachovať kontrast textu
- Používať sémantické HTML elementy
- Poskytovať alt texty pre obrázky

### 3. Performance
- Lazy load obrázkov
- Optimalizovať fonty
- Minimalizovať re-renders

### 4. Print Friendly
- Všetky kritické info viditeľné
- Optimalizované pre A4 formát
- Linky underlined & visible

### 5. Mobile First
- Carousel pre mobile, grid pre desktop
- Touch-friendly button sizes (min 44px)
- Responsive typography

---

## Príklady Použitia

### Timeline Section

```tsx
<section>
  <SectionTitle icon={Terminal}>Where I've worked</SectionTitle>
  <div className="space-y-0">
    {experience.map((job, index) => (
      <ExperienceCard key={index} item={job} />
    ))}
  </div>
</section>
```

### Contact Sidebar

```tsx
<aside className="bg-brand-offBlack/30 border border-brand-border p-6">
  <h3 className="font-mono text-xs uppercase">Get in touch</h3>
  <SidebarItem icon={Mail} label="Email" value={email} href={`mailto:${email}`} />
</aside>
```

### Skills Grid

```tsx
<div className="flex flex-wrap gap-1.5">
  {skills.map((skill) => (
    <Badge key={skill}>{skill}</Badge>
  ))}
</div>
```

---

## Tech Stack

- **Framework**: React 18+ (TSX)
- **Styling**: Tailwind CSS 3+
- **Icons**: Phosphor Icons React
- **Build**: Vite
- **Language**: TypeScript

---

## Changelog

### Version 1.0 (January 2026)
- Initial QUESTPIE Design System
- Dark theme with purple accent
- Responsive grid system
- Print optimization
- Mobile carousel components
- Timeline components

---

## Credits

Designed and developed by **Dominik Repkovský**  
QUESTPIE s.r.o. © 2026

Portfolio: [drepkovsky.com](https://drepkovsky.com)  
Company: [questpie.com](https://questpie.com)  
GitHub: [github.com/drepkovsky](https://github.com/drepkovsky)
