/**
 * Input sanitization utilities for security
 */

/**
 * Sanitizes a hash string for routing
 * - Removes HTML/JavaScript tags
 * - Limits length
 * - Allows only safe characters
 * - Prevents XSS attacks
 */
export function sanitizeHash(hash: string): string {
  if (!hash || typeof hash !== 'string') {
    return 'home';
  }

  // Remove the # symbol if present
  let sanitized = hash.replace(/^#/, '');

  // Remove potentially dangerous characters and patterns
  sanitized = sanitized
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove JavaScript: protocol
    .replace(/^javascript:/i, '')
    // Remove data: protocol
    .replace(/^data:/i, '')
    // Remove vbscript: protocol
    .replace(/^vbscript:/i, '')
    // Remove file: protocol
    .replace(/^file:/i, '')
    // Remove script tags and event handlers
    .replace(/on\w+\s*=/gi, '')
    // Remove script references
    .replace(/script/gi, '')
    // Allow only alphanumeric, hyphens, underscores, and forward slashes
    .replace(/[^a-zA-Z0-9\-_\/]/g, '')
    // Remove multiple consecutive slashes
    .replace(/\/+/g, '/')
    // Remove leading/trailing slashes
    .replace(/^\/|\/$/g, '')
    // Limit length to prevent DoS
    .substring(0, 100);

  // Return 'home' if empty after sanitization
  return sanitized || 'home';
}

/**
 * Validates if a route is in the allowed routes list
 */
export function isValidRoute(route: string, allowedRoutes: readonly string[]): boolean {
  return allowedRoutes.includes(route);
}

/**
 * Sanitizes and validates a route against allowed routes
 */
export function sanitizeAndValidateRoute<T extends readonly string[]>(
  hash: string, 
  allowedRoutes: T
): T[number] {
  const sanitized = sanitizeHash(hash);
  return isValidRoute(sanitized, allowedRoutes) ? sanitized as T[number] : 'home' as T[number];
}

/**
 * Sanitizes any string for display purposes
 */
export function sanitizeString(input: string, maxLength: number = 500): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove potentially dangerous characters
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
    // Escape HTML entities
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    // Limit length
    .substring(0, maxLength);
}
