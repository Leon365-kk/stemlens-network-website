/**
 * Animation constants and timing values
 */

// GSAP Animation Timing
export const ANIMATION_TIMING = {
  // Scroll trigger positions
  SCROLL_START: 'top 80%',
  SCROLL_END: '+=100%',
  SCRUB_SPEED: 0.6,
  
  // Animation delays (in seconds)
  DELAY_IMMEDIATE: 0,
  DELAY_SHORT: 0.08,
  DELAY_MEDIUM: 0.15,
  DELAY_LONG: 0.2,
  
  // Animation durations
  DURATION_FAST: 0.3,
  DURATION_MEDIUM: 0.4,
  DURATION_SLOW: 0.5,
  DURATION_EXTRA_SLOW: 0.6,
} as const;

// GSAP Animation Values
export const ANIMATION_VALUES = {
  // Transform values
  X_NEGATIVE_LARGE: '-50vw',
  X_POSITIVE_LARGE: '50vw',
  X_NEGATIVE_MEDIUM: '-60',
  X_POSITIVE_MEDIUM: '60',
  X_NEGATIVE_SMALL: '-10vw',
  X_ZERO: 0,
  
  // Y-axis movements
  Y_NEGATIVE_LARGE: 28,
  Y_NEGATIVE_MEDIUM: 20,
  Y_NEGATIVE_SMALL: 18,
  Y_NEGATIVE_TINY: 14,
  Y_NEGATIVE_MINI: 12,
  Y_ZERO: 0,
  
  // Opacity values
  OPACITY_HIDDEN: 0,
  OPACITY_VISIBLE: 1,
  
  // Scale values
  SCALE_NORMAL: 1,
  SCALE_SLIGHTLY_SMALL: 0.98,
  SCALE_SMALL: 0.96,
} as const;

// Easing Functions
export const EASING = {
  NONE: 'none',
  POWER2_OUT: 'power2.out',
  POWER2_IN: 'power2.in',
  SINE_OUT: 'sine.out',
} as const;
