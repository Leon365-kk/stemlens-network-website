/**
 * Layout and spacing constants
 */

// Viewport Heights
export const VIEWPORT_HEIGHTS = {
  SMALL: '8vh',
  MEDIUM: '10vh',
  LARGE: '18vh',
  EXTRA_LARGE: '80vh',
  FULL: '100vh',
} as const;

// Viewport Widths
export const VIEWPORT_WIDTHS = {
  SMALL: '4vw',
  MEDIUM: '34vw',
  LARGE: '44vw',
  EXTRA_LARGE: '56vw',
  FULL: '92vw',
} as const;

// Spacing (in pixels)
export const SPACING = {
  XS: 2,
  SM: 3,
  MD: 4,
  LG: 5,
  XL: 6,
  XXL: 8,
  XXXL: 12,
} as const;

// Padding/Margin values
export const PADDING = {
  TIGHT: 2.5,
  NORMAL: 5,
  RELAXED: 8,
  LOOSE: 12,
} as const;

// Border Radius
export const BORDER_RADIUS = {
  SMALL: 8,
  MEDIUM: 12,
  LARGE: 18,
  EXTRA_LARGE: 24,
  FULL: 9999,
} as const;

// Shadow Values
export const SHADOWS = {
  SMALL: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  MEDIUM: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  LARGE: '0 18px 45px rgba(11, 30, 59, 0.10)',
  EXTRA_LARGE: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  CARD: '0_18px_45px_rgba(11,30,59,0.10)',
} as const;

// Z-Index Values
export const Z_INDEX = {
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL: 40,
  TOOLTIP: 50,
  MAXIMUM: 9999,
} as const;
