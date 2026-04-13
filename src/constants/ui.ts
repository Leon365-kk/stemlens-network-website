/**
 * UI component constants
 */

// Typography
export const TYPOGRAPHY = {
  // Font sizes (in pixels)
  XS: 11,
  SM: 12,
  BASE: 14,
  LG: 16,
  XL: 18,
  XXL: 20,
  XXXL: 22,
  HUGE: 24,
  MASSIVE: 28,
  GIANT: 32,
  COLOSSAL: 36,
  MEGA: 40,
  TITAN: 48,
  
  // Line heights
  TIGHT: 1.1,
  NORMAL: 1.15,
  RELAXED: 1.5,
  EXTRA_RELAXED: 1.6,
  
  // Letter spacing
  TIGHT_TRACKING: -0.02,
  NORMAL_TRACKING: 0,
  WIDE_TRACKING: 0.12,
} as const;

// Breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  XXL: '1536px',
} as const;

// Component Heights
export const HEIGHTS = {
  NAVIGATION_SMALL: 14,
  NAVIGATION_MEDIUM: 16,
  NAVIGATION_LARGE: 18,
  NAVIGATION_EXTRA_LARGE: 20,
  
  LOGO_SMALL: 16,
  LOGO_MEDIUM: 18,
  LOGO_LARGE: 20,
  LOGO_EXTRA_LARGE: 24,
  
  CARD_SMALL: 120,
  CARD_MEDIUM: 280,
  CARD_LARGE: 260,
} as const;

// Grid Settings
export const GRID = {
  COLUMNS_2: 2,
  COLUMNS_3: 3,
  COLUMNS_4: 4,
  GAP_SMALL: 4,
  GAP_MEDIUM: 6,
  GAP_LARGE: 8,
} as const;

// Transition Settings
export const TRANSITIONS = {
  FAST: 150,
  MEDIUM: 300,
  SLOW: 500,
  EXTRA_SLOW: 600,
} as const;

// Opacity Values
export const OPACITY = {
  HIDDEN: 0,
  FAINT: 0.04,
  LIGHT: 0.06,
  MEDIUM: 0.1,
  SEMI: 0.5,
  VISIBLE: 0.95,
  FULL: 1,
} as const;
