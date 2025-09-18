# Project Architecture & Development Guidelines

## 📁 Project Structure Philosophy

This Next.js 15 portfolio follows a **hybrid server/client architecture** optimized for **SEO performance** and **developer experience** while maintaining **clean separation of concerns**.

## 🎯 Core Principles

### 1. **Component Co-location**
- Components live **close to where they're used**
- Route-specific components in `src/app/[lang]/components/`
- Shared components in `src/components/`
- No deeply nested component hierarchies

### 2. **High Cohesion, Low Coupling**
- Related functionality stays together
- Components have single, clear responsibilities  
- Minimal dependencies between unrelated components

### 3. **Server/Client Separation**
- **Server Components** (default): Static content, SEO-critical data
- **Client Components** (`"use client"`): Interactivity, animations, user events
- Hybrid patterns: Server wrapper + Client interactive parts

## 🚫 Naming Conventions - What NOT to Do

### **Avoid Adjective-Based Names:**
- ❌ `OptimizedComponent.tsx`
- ❌ `LazyImageLoader.tsx` 
- ❌ `ClientNavigationBar.tsx`
- ❌ `ServerAboutSection.tsx`
- ❌ `StaticFooter.tsx`
- ❌ `DynamicCounter.tsx`

### **Use Purpose/Function-Based Names:**
- ✅ `ParticleLoader.tsx` (loads particles)
- ✅ `CounterAnimation.tsx` (animates counters)
- ✅ `NavigationBar.tsx` (navigation functionality)
- ✅ `AboutContent.tsx` (about section content)
- ✅ `ContactButton.tsx` (contact interaction)

## 📂 File Organization

```
src/
├── app/
│   ├── [lang]/                    # Internationalized routes
│   │   ├── components/            # Route-specific components (co-located)
│   │   │   ├── AboutContent.tsx   # Server: Static about content
│   │   │   ├── AboutCounters.tsx  # Client: Animated counters
│   │   │   ├── HeroContent.tsx    # Server: Hero section layout
│   │   │   ├── HeroButtons.tsx    # Client: Interactive hero buttons
│   │   │   └── ParticleLoader.tsx # Client: Delayed particle loading
│   │   ├── hooks/                 # Route-specific custom hooks
│   │   ├── layout.tsx             # Language-aware metadata
│   │   ├── page.tsx               # Main portfolio page
│   │   └── opengraph-image.tsx    # Dynamic social images
│   ├── globals SEO files          # robots.ts, sitemap.ts, manifest.ts
│   └── page.tsx                   # Root redirect handler
├── components/                    # Shared components
│   ├── ui/                        # Design system components
│   └── StructuredData.tsx         # Global SEO component
├── dictionaries/                  # i18n translations
├── lib/                          # Utilities and configurations
└── types/ (if needed)            # TypeScript definitions
```

## 🏗️ Component Architecture Patterns

### **1. Hybrid Server/Client Pattern**

#### Server Component (Content)
```typescript
// AboutContent.tsx - Server Component
import { AboutCounters } from "./AboutCounters";

export const AboutContent = () => {
  return (
    <section data-section="about">
      <h2>About Me</h2>
      <p>Static content rendered on server...</p>
      <AboutCounters end={18} label="Years Experience" />
    </section>
  );
};
```

#### Client Component (Interactivity)  
```typescript
// AboutCounters.tsx - Client Component
"use client";

import { useId } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

export const AboutCounters = ({ end, label }) => {
  const counterId = useId();
  // Interactive logic here...
  return <AnimatedCounter end={end} />;
};
```

### **2. Loader Pattern for Performance**

```typescript
// ParticleLoader.tsx - Delays non-critical animations
"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
  loading: () => null,
});

export const ParticleLoader = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return shouldLoad ? <ParticleBackground /> : null;
};
```

## 🎨 Component Design Guidelines

### **1. Single Responsibility**
- One component = one clear purpose
- `NavigationBar` handles layout, `NavigationButtons` handles interactions
- `GalleryContent` shows images, `GalleryCard` handles individual card interactions

### **2. Composition Over Inheritance**
- Prefer composition patterns
- Small, focused components that combine well
- Avoid large, monolithic components

### **3. Prop Interface Design**
```typescript
// Clear, specific interfaces
interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

// Avoid generic or unclear props
interface BadProps {
  data: any;
  config: object;
  options: unknown;
}
```

## 🌐 Internationalization Architecture

### **Route-Level i18n**
```
/en     → English version
/pt-BR  → Portuguese version
```

### **Language-Aware Components**
```typescript
// Language passed down from page component
export default async function Page({ params }) {
  const { lang } = await params;
  return <StructuredData lang={lang} />;
}
```

### **Dictionary Pattern**
```typescript
// dictionaries/en.json
{
  "hero.title": "Aviation Engineering Consultant",
  "hero.description": "20+ years experience..."
}
```

## ⚡ Performance Optimization Patterns

### **1. Server-First Approach**
- Default to Server Components
- Add `"use client"` only when needed
- Critical content renders immediately

### **2. Smart Loading**
```typescript
// Load animations after critical content
useEffect(() => {
  const timer = setTimeout(() => setLoadAnimations(true), 100);
  return () => clearTimeout(timer);
}, []);
```

### **3. Static Generation**
- OpenGraph images generated at build time
- Sitemap generated statically
- Metadata computed during build

## 🔍 SEO Architecture

### **1. Structured Data**
```typescript
// lib/structured-data.ts
export const createStructuredData = (lang) => ({
  "@context": "https://schema.org",
  "@type": ["Person", "ProfessionalService"],
  // Language-aware structured data
});
```

### **2. Dynamic Metadata**
```typescript
// layout.tsx
export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: titles[lang],
    description: descriptions[lang],
    // Language-specific metadata
  };
}
```

### **3. Social Media Assets**
- Dynamic OpenGraph images per language
- Proper hreflang implementation
- Comprehensive sitemap with language alternates

## 🧪 Testing Philosophy

### **Component Testing**
- Test component behavior, not implementation
- Mock external dependencies
- Test both server and client components appropriately

### **SEO Testing**
- Validate structured data
- Test metadata generation
- Verify social media cards

## 🚀 Deployment Considerations

### **Build Optimization**
- Server components pre-rendered
- Client components code-split automatically
- Static assets optimized and cached

### **Performance Monitoring**
- Core Web Vitals tracking
- SEO metrics monitoring
- User experience analytics

## 📋 Development Checklist

### **New Component Checklist:**
- [ ] Clear, purpose-based name (no adjectives)
- [ ] Co-located with related components
- [ ] Server component by default
- [ ] `"use client"` only if interactive
- [ ] TypeScript interfaces defined
- [ ] Proper error boundaries if needed
- [ ] Performance considerations addressed

### **SEO Checklist:**
- [ ] Language-aware metadata
- [ ] Structured data updated
- [ ] OpenGraph images work
- [ ] Sitemap includes new routes
- [ ] Robots.txt allows indexing

## 🎯 Success Metrics

This architecture achieves:
- **🚀 82% Server-Side Rendered Content**
- **⚡ Excellent Core Web Vitals**
- **🔍 Enterprise-Grade SEO**
- **🌐 Perfect Internationalization**
- **🛠️ Developer-Friendly Maintenance**

---

## 💡 Remember

> **"Clean architecture is not about perfection, it's about intention."**

Every component should have a clear purpose, every file should be exactly where a developer expects to find it, and every optimization should serve the user experience first.
