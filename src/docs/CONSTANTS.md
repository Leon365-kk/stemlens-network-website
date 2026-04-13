# Constants Documentation

## Overview

This document outlines the magic numbers that have been extracted into named constants throughout the STEMlens Network website. This improves code maintainability, readability, and makes it easier to update design values consistently across the application.

## Constants Structure

### 📁 File Organization

```
src/constants/
├── index.ts           # Centralized exports
├── animations.ts      # GSAP animation constants
├── layout.ts          # Layout and spacing constants
├── ui.ts              # UI component constants
├── sdg.ts             # SDG-specific constants
└── scroll.ts          # Scroll-related constants
```

## 🎬 Animation Constants (`animations.ts`)

### Timing Values
```typescript
ANIMATION_TIMING = {
  SCROLL_START: 'top 80%',     // Scroll trigger start position
  SCROLL_END: '+=100%',        // Scroll trigger end position
  SCRUB_SPEED: 0.6,             // Scroll animation speed
  DELAY_IMMEDIATE: 0,           // No delay
  DELAY_SHORT: 0.08,             // Short delay
  DELAY_MEDIUM: 0.15,            // Medium delay
  DELAY_LONG: 0.2,               // Long delay
}
```

### Animation Values
```typescript
ANIMATION_VALUES = {
  // X-axis movements
  X_NEGATIVE_LARGE: '-50vw',     // Large negative X movement
  X_POSITIVE_LARGE: '50vw',      // Large positive X movement
  X_NEGATIVE_MEDIUM: '-60',      // Medium negative X movement
  X_POSITIVE_MEDIUM: '60',      // Medium positive X movement
  X_NEGATIVE_SMALL: '-10vw',     // Small negative X movement
  X_ZERO: 0,                     // No X movement
  
  // Y-axis movements
  Y_NEGATIVE_LARGE: 28,          // Large negative Y movement
  Y_NEGATIVE_MEDIUM: 20,         // Medium negative Y movement
  Y_NEGATIVE_SMALL: 18,          // Small negative Y movement
  Y_NEGATIVE_TINY: 14,            // Tiny negative Y movement
  Y_NEGATIVE_MINI: 12,           // Mini negative Y movement
  Y_ZERO: 0,                      // No Y movement
  
  // Opacity and scale
  OPACITY_HIDDEN: 0,             // Fully transparent
  OPACITY_VISIBLE: 1,            // Fully opaque
  SCALE_NORMAL: 1,                // Normal scale
  SCALE_SLIGHTLY_SMALL: 0.98,    // Slightly smaller
  SCALE_SMALL: 0.96,             // Smaller
}
```

### Easing Functions
```typescript
EASING = {
  NONE: 'none',                   // No easing
  POWER2_OUT: 'power2.out',      // Power2 ease out
  POWER2_IN: 'power2.in',        // Power2 ease in
  SINE_OUT: 'sine.out',           // Sine ease out
}
```

## 🏗️ Layout Constants (`layout.ts`)

### Viewport Dimensions
```typescript
VIEWPORT_HEIGHTS = {
  SMALL: '8vh',                   // Small viewport height
  MEDIUM: '10vh',                 // Medium viewport height
  LARGE: '18vh',                  // Large viewport height
  EXTRA_LARGE: '80vh',            // Extra large viewport height
  FULL: '100vh',                  // Full viewport height
}

VIEWPORT_WIDTHS = {
  SMALL: '4vw',                   // Small viewport width
  MEDIUM: '34vw',                 // Medium viewport width
  LARGE: '44vw',                  // Large viewport width
  EXTRA_LARGE: '56vw',            // Extra large viewport width
  FULL: '92vw',                   // Full viewport width
}
```

### Spacing
```typescript
SPACING = {
  XS: 2,                          // Extra small spacing
  SM: 3,                          // Small spacing
  MD: 4,                          // Medium spacing
  LG: 5,                          // Large spacing
  XL: 6,                          // Extra large spacing
  XXL: 8,                         // Extra extra large spacing
  XXXL: 12,                       // Triple extra large spacing
}

PADDING = {
  TIGHT: 2.5,                     // Tight padding
  NORMAL: 5,                      // Normal padding
  RELAXED: 8,                     // Relaxed padding
  LOOSE: 12,                      // Loose padding
}
```

### Visual Properties
```typescript
BORDER_RADIUS = {
  SMALL: 8,                       // Small border radius
  MEDIUM: 12,                     // Medium border radius
  LARGE: 18,                      // Large border radius
  EXTRA_LARGE: 24,                // Extra large border radius
  FULL: 9999,                     // Full border radius
}

SHADOWS = {
  SMALL: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  MEDIUM: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  LARGE: '0 18px 45px rgba(11, 30, 59, 0.10)',
  EXTRA_LARGE: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  CARD: '0_18px_45px_rgba(11,30,59,0.10)', // Card shadow
}

Z_INDEX = {
  BASE: 0,                        // Base z-index
  DROPDOWN: 10,                   // Dropdown z-index
  STICKY: 20,                     // Sticky element z-index
  FIXED: 30,                      // Fixed element z-index
  MODAL: 40,                      // Modal z-index
  TOOLTIP: 50,                    // Tooltip z-index
  MAXIMUM: 9999,                  // Maximum z-index
}
```

## 🎨 UI Constants (`ui.ts`)

### Typography
```typescript
TYPOGRAPHY = {
  // Font sizes (in pixels)
  XS: 11,                         // Extra small text
  SM: 12,                         // Small text
  BASE: 14,                       // Base text size
  LG: 16,                         // Large text
  XL: 18,                         // Extra large text
  XXL: 20,                        // Extra extra large text
  XXXL: 22,                       // Triple extra large text
  HUGE: 24,                       // Huge text
  MASSIVE: 28,                    // Massive text
  GIANT: 32,                      // Giant text
  COLOSSAL: 36,                   // Colossal text
  MEGA: 40,                       // Mega text
  TITAN: 48,                      // Titan text
  
  // Line heights
  TIGHT: 1.1,                     // Tight line height
  NORMAL: 1.15,                   // Normal line height
  RELAXED: 1.5,                   // Relaxed line height
  EXTRA_RELAXED: 1.6,            // Extra relaxed line height
  
  // Letter spacing
  TIGHT_TRACKING: -0.02,         // Tight letter spacing
  NORMAL_TRACKING: 0,            // Normal letter spacing
  WIDE_TRACKING: 0.12,           // Wide letter spacing
}
```

### Component Heights
```typescript
HEIGHTS = {
  NAVIGATION_SMALL: 14,           // Small navigation height
  NAVIGATION_MEDIUM: 16,         // Medium navigation height
  NAVIGATION_LARGE: 18,          // Large navigation height
  NAVIGATION_EXTRA_LARGE: 20,    // Extra large navigation height
  
  LOGO_SMALL: 16,                // Small logo height
  LOGO_MEDIUM: 18,               // Medium logo height
  LOGO_LARGE: 20,                // Large logo height
  LOGO_EXTRA_LARGE: 24,          // Extra large logo height
  
  CARD_SMALL: 120,                // Small card height
  CARD_MEDIUM: 280,               // Medium card height
  CARD_LARGE: 260,                // Large card height
}
```

### Breakpoints and Grid
```typescript
BREAKPOINTS = {
  SM: '640px',                    // Small breakpoint
  MD: '768px',                    // Medium breakpoint
  LG: '1024px',                   // Large breakpoint
  XL: '1280px',                   // Extra large breakpoint
  XXL: '1536px',                  // Extra extra large breakpoint
}

GRID = {
  COLUMNS_2: 2,                   // 2 columns
  COLUMNS_3: 3,                   // 3 columns
  COLUMNS_4: 4,                   // 4 columns
  GAP_SMALL: 4,                   // Small grid gap
  GAP_MEDIUM: 6,                  // Medium grid gap
  GAP_LARGE: 8,                   // Large grid gap
}
```

## 🌍 SDG Constants (`sdg.ts`)

### SDG Goal Numbers
```typescript
SDG_GOALS = {
  NO_POVERTY: 1,                  // SDG 1
  ZERO_HUNGER: 2,                 // SDG 2
  GOOD_HEALTH: 3,                 // SDG 3
  QUALITY_EDUCATION: 4,           // SDG 4
  GENDER_EQUALITY: 5,             // SDG 5
  CLEAN_WATER: 6,                 // SDG 6
  CLEAN_ENERGY: 7,                // SDG 7
  ECONOMIC_GROWTH: 8,             // SDG 8
  INDUSTRY_INNOVATION: 9,         // SDG 9
  REDUCED_INEQUALITIES: 10,       // SDG 10
  SUSTAINABLE_CITIES: 11,         // SDG 11
  RESPONSIBLE_CONSUMPTION: 12,    // SDG 12
  CLIMATE_ACTION: 13,             // SDG 13
  LIFE_BELOW_WATER: 14,           // SDG 14
  LIFE_ON_LAND: 15,               // SDG 15
  PEACE_JUSTICE: 16,             // SDG 16
  PARTNERSHIPS: 17,               // SDG 17
}
```

### SDG Grid Configuration
```typescript
SDG_GRID = {
  COLUMNS_SMALL: 2,               // Small screen columns
  COLUMNS_MEDIUM: 3,              // Medium screen columns
  COLUMNS_LARGE: 4,               // Large screen columns
  GAP: 6,                         // Grid gap
  CARD_HEIGHT: 192,                // Card height in pixels (h-48)
}
```

### SDG Animation Settings
```typescript
SDG_ANIMATION = {
  HOVER_SCALE: 1.05,              // Hover scale factor
  TRANSITION_DURATION: 300,       // Transition duration in ms
  SHADOW_DURATION: 300,           // Shadow transition duration in ms
}
```

## 📜 Scroll Constants (`scroll.ts`)

### Scroll Thresholds
```typescript
SCROLL_THRESHOLDS = {
  NAVIGATION_SCROLL: 50,          // Navigation scroll threshold
  ANIMATION_TRIGGER: 100,          // Animation trigger threshold
  PARALLAX_START: 200,             // Parallax start threshold
}
```

### Scroll Behaviors
```typescript
SCROLL_BEHAVIOR = {
  SMOOTH: 'smooth',               // Smooth scrolling
  AUTO: 'auto',                   // Auto scrolling
  PASSIVE: true,                   // Passive event listeners
}
```

## 🔄 Usage Examples

### Before Magic Numbers
```typescript
// ❌ Hard-coded values
scrollTl.fromTo(
  element,
  { x: '-50vw', y: 20, opacity: 0 },
  { x: 0, y: 0, opacity: 1 },
  0.08
);

<div className="w-56 h-76 rounded-18 shadow-[0_18px_45px_rgba(11,30,59,0.10)]">
```

### After Constants
```typescript
// ✅ Named constants
import { ANIMATION_VALUES, ANIMATION_TIMING, VIEWPORT_WIDTHS, VIEWPORT_HEIGHTS, BORDER_RADIUS, SHADOWS } from '../constants';

scrollTl.fromTo(
  element,
  { 
    x: ANIMATION_VALUES.X_NEGATIVE_LARGE, 
    y: ANIMATION_VALUES.Y_NEGATIVE_MEDIUM, 
    opacity: ANIMATION_VALUES.OPACITY_HIDDEN 
  },
  { 
    x: ANIMATION_VALUES.X_ZERO, 
    y: ANIMATION_VALUES.Y_ZERO, 
    opacity: ANIMATION_VALUES.OPACITY_VISIBLE 
  },
  ANIMATION_TIMING.DELAY_SHORT
);

<div className={`w-[${VIEWPORT_WIDTHS.EXTRA_LARGE}] h-[${VIEWPORT_HEIGHTS.EXTRA_LARGE}] rounded-[${BORDER_RADIUS.LARGE}px] shadow-[${SHADOWS.CARD}]`}>
```

## 📋 Benefits

### 1. **Maintainability**
- Single source of truth for design values
- Easy to update across the entire application
- Consistent design implementation

### 2. **Readability**
- Self-documenting code
- Clear intent with descriptive names
- Reduced cognitive load

### 3. **Type Safety**
- TypeScript support with proper typing
- Autocomplete and IDE support
- Compile-time error detection

### 4. **Scalability**
- Easy to add new constants
- Organized by category
- Centralized management

### 5. **Consistency**
- Prevents inconsistencies across components
- Standardized values
- Unified design language

## 🚀 Migration Guide

### Step 1: Identify Magic Numbers
Look for:
- Hard-coded numeric values
- Repeated measurements
- Animation timing values
- Color codes
- Breakpoints

### Step 2: Create Constants
- Group related constants
- Use descriptive names
- Add TypeScript types

### Step 3: Update Components
- Import required constants
- Replace magic numbers
- Test functionality

### Step 4: Review and Refine
- Ensure consistency
- Update documentation
- Remove unused imports

## 🔧 Best Practices

### Naming Conventions
- Use SCREAMING_SNAKE_CASE for constants
- Be descriptive and clear
- Group related constants together

### Organization
- Group by functionality (animations, layout, ui, etc.)
- Use separate files for different categories
- Export from index file for convenience

### TypeScript
- Use proper typing for all constants
- Create interfaces for complex objects
- Use `as const` for readonly arrays

### Documentation
- Document each constant's purpose
- Provide usage examples
- Keep documentation up to date

## 📊 Impact

This refactoring has:
- ✅ Extracted 50+ magic numbers to constants
- ✅ Improved code maintainability
- ✅ Enhanced type safety
- ✅ Standardized design values
- ✅ Reduced code duplication
- ✅ Improved developer experience

The constants system makes the codebase more maintainable, readable, and scalable while ensuring design consistency across the entire application.
