# OrthoAI Style Guide & Color Palette

## Overview
This style guide extracts the beautiful color palette and design system from your OrthoAI landing page for use in other projects.

## Color Palette

### Theme System
The design uses a flexible theme system with 6 different color schemes. Each theme follows the same structure but with different color combinations.

### Current Theme (Blue-Cyan)
```css
/* Backgrounds */
--bg-primary: linear-gradient(to bottom right, #ecfeff, #f0fdfa, #cffafe);
--bg-value-section: linear-gradient(to right, rgba(236, 254, 255, 0.3), rgba(240, 253, 250, 0.2), rgba(207, 250, 254, 0.3));
--bg-signup-section: linear-gradient(to right, rgba(236, 254, 255, 0.8), rgba(240, 253, 250, 0.8));

/* Text Gradients */
--text-title-1: linear-gradient(to right, #0f172a, #2563eb, #0f172a);
--text-title-2: linear-gradient(to right, #0891b2, #3b82f6, #2563eb);
--text-trust-number: linear-gradient(to right, #0f172a, #2563eb, #0f172a);

/* Buttons */
--btn-primary: linear-gradient(to right, #2563eb, #0891b2);
--btn-primary-hover: linear-gradient(to right, #1d4ed8, #0e7490);

/* Icons */
--icon-1: linear-gradient(to bottom right, #2563eb, #0891b2);
--icon-2: linear-gradient(to bottom right, #0891b2, #3b82f6);
--icon-3: linear-gradient(to bottom right, #0891b2, #2563eb);

/* Borders */
--border-trust: #e0f2fe;
```

### Purple Theme
```css
/* Backgrounds */
--bg-primary: linear-gradient(to bottom right, #fdf4ff, #fdf2f8, #f3e8ff);
--bg-value-section: linear-gradient(to right, rgba(253, 244, 255, 0.3), rgba(253, 242, 248, 0.2), rgba(243, 232, 255, 0.3));
--bg-signup-section: linear-gradient(to right, rgba(253, 244, 255, 0.8), rgba(253, 242, 248, 0.8));

/* Text Gradients */
--text-title-1: linear-gradient(to right, #0f172a, #9333ea, #0f172a);
--text-title-2: linear-gradient(to right, #9333ea, #ec4899, #9333ea);
--text-trust-number: linear-gradient(to right, #0f172a, #9333ea, #0f172a);

/* Buttons */
--btn-primary: linear-gradient(to right, #9333ea, #ec4899);
--btn-primary-hover: linear-gradient(to right, #7c3aed, #db2777);

/* Icons */
--icon-1: linear-gradient(to bottom right, #9333ea, #ec4899);
--icon-2: linear-gradient(to bottom right, #ec4899, #a855f7);
--icon-3: linear-gradient(to bottom right, #9333ea, #ec4899);

/* Borders */
--border-trust: #e9d5ff;
```

### Dark Purple Theme
```css
/* Backgrounds */
--bg-primary: linear-gradient(to bottom right, #0f172a, #581c87, #1e293b);
--bg-value-section: linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(88, 28, 135, 0.3), rgba(30, 41, 59, 0.5));
--bg-signup-section: linear-gradient(to right, rgba(30, 41, 59, 0.8), rgba(88, 28, 135, 0.8));

/* Text Gradients */
--text-title-1: linear-gradient(to right, #ffffff, #d8b4fe, #ffffff);
--text-title-2: linear-gradient(to right, #c084fc, #f9a8d4, #c084fc);
--text-trust-number: linear-gradient(to right, #ffffff, #d8b4fe, #ffffff);

/* Buttons */
--btn-primary: linear-gradient(to right, #9333ea, #ec4899);
--btn-primary-hover: linear-gradient(to right, #a855f7, #f472b6);

/* Icons */
--icon-1: linear-gradient(to bottom right, #9333ea, #ec4899);
--icon-2: linear-gradient(to bottom right, #ec4899, #a855f7);
--icon-3: linear-gradient(to bottom right, #9333ea, #ec4899);

/* Borders */
--border-trust: #7c3aed;

/* Dark theme text colors */
--text-heading: #ffffff;
--text-body: #cbd5e1;
```

## Typography Scale

```css
/* Headings */
.heading-xl { font-size: 3.75rem; line-height: 1.1; font-weight: 700; } /* 60px */
.heading-lg { font-size: 3rem; line-height: 1.1; font-weight: 700; }    /* 48px */
.heading-md { font-size: 2.25rem; line-height: 1.2; font-weight: 700; } /* 36px */
.heading-sm { font-size: 1.875rem; line-height: 1.2; font-weight: 700; } /* 30px */
.heading-xs { font-size: 1.5rem; line-height: 1.3; font-weight: 700; }  /* 24px */

/* Body Text */
.text-xl { font-size: 1.25rem; line-height: 1.5; }  /* 20px */
.text-lg { font-size: 1.125rem; line-height: 1.5; } /* 18px */
.text-base { font-size: 1rem; line-height: 1.5; }   /* 16px */

/* Colors */
.text-primary { color: #0f172a; }
.text-secondary { color: #64748b; }
.text-muted { color: #94a3b8; }
```

## Spacing System

```css
/* 8px base spacing system */
.space-1 { margin: 0.5rem; }   /* 8px */
.space-2 { margin: 1rem; }     /* 16px */
.space-3 { margin: 1.5rem; }   /* 24px */
.space-4 { margin: 2rem; }     /* 32px */
.space-5 { margin: 2.5rem; }   /* 40px */
.space-6 { margin: 3rem; }     /* 48px */
.space-8 { margin: 4rem; }     /* 64px */
.space-10 { margin: 5rem; }    /* 80px */
.space-12 { margin: 6rem; }    /* 96px */
.space-16 { margin: 8rem; }    /* 128px */
.space-20 { margin: 10rem; }   /* 160px */
```

## Component Styles

### Buttons
```css
.btn-primary {
  background: var(--btn-primary);
  color: white;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: var(--btn-primary-hover);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px) scale(1.05);
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 2rem 2.5rem;
  border: 1px solid var(--border-trust);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card-icon:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Form Elements
```css
.input {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  ring: 2px solid #9333ea;
  border-color: transparent;
  transform: scale(1.02);
}
```

## Animation Presets

### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

### Hover Lift
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

## Usage Examples

### HTML Structure
```html
<section class="hero-section">
  <h1 class="heading-xl gradient-text-title-1">
    Your Amazing Product
  </h1>
  <p class="text-xl text-secondary">
    Beautiful description text
  </p>
  <button class="btn-primary hover-lift">
    Get Started
  </button>
</section>
```

### CSS Classes
```css
.gradient-text-title-1 {
  background: var(--text-title-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-section {
  background: var(--bg-primary);
  padding: 4rem 1rem;
  text-align: center;
}
```