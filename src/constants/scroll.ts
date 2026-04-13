/**
 * Scroll-related constants
 */

// Scroll thresholds (in pixels)
export const SCROLL_THRESHOLDS = {
  NAVIGATION_SCROLL: 50,
  ANIMATION_TRIGGER: 100,
  PARALLAX_START: 200,
} as const;

// Scroll speeds and behaviors
export const SCROLL_BEHAVIOR = {
  SMOOTH: 'smooth',
  AUTO: 'auto',
  PASSIVE: true as const,
} as const;
