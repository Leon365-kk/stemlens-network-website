/**
 * Security configuration settings
 */

export const SECURITY_CONFIG = {
  // Rate limiting settings
  RATE_LIMIT: {
    MAX_ATTEMPTS_PER_SECOND: 10,
    TIME_WINDOW_MS: 1000,
    BLOCK_DURATION_MS: 5000, // Temporary block duration
  },

  // Input validation settings
  VALIDATION: {
    MAX_HASH_LENGTH: 100,
    MAX_STRING_LENGTH: 500,
    ALLOWED_CHARACTERS: /^[a-zA-Z0-9\-_\/]+$/,
  },

  // Logging settings
  LOGGING: {
    ENABLE_SECURITY_LOGS: true,
    LOG_LEVEL: 'warn' as const,
    MAX_LOG_ENTRIES: 1000,
  },

  // XSS protection patterns
  XSS_PATTERNS: [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /data:(?:text|application)\/html/gi,
    /vbscript:/gi,
    /file:/gi,
  ],

  // Suspicious patterns to log
  SUSPICIOUS_PATTERNS: [
    /<script/i,
    /javascript:/i,
    /data:.*html/i,
    /vbscript:/i,
    /file:/i,
    /on\w+\s*=/i,
  ],

  // Content Security Policy (CSP) directives
  CSP_DIRECTIVES: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'font-src': ["'self'"],
    'connect-src': ["'self'"],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
  },
} as const;

/**
 * Security utility functions
 */
export class SecurityUtils {
  /**
   * Check if a string contains suspicious patterns
   */
  static containsSuspiciousPatterns(input: string): boolean {
    return SECURITY_CONFIG.SUSPICIOUS_PATTERNS.some(pattern => 
      pattern.test(input)
    );
  }

  /**
   * Generate a security report for logging
   */
  static generateSecurityReport(input: string, context: string) {
    return {
      timestamp: new Date().toISOString(),
      context,
      input: input.substring(0, 50),
      inputLength: input.length,
      suspiciousPatterns: SECURITY_CONFIG.SUSPICIOUS_PATTERNS.filter(pattern => 
        pattern.test(input)
      ).map(p => p.source),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    };
  }

  /**
   * Check if rate limit is exceeded
   */
  static isRateLimitExceeded(attempts: number[], maxAttempts: number, timeWindow: number): boolean {
    const now = Date.now();
    const recentAttempts = attempts.filter(time => now - time < timeWindow);
    return recentAttempts.length >= maxAttempts;
  }

  /**
   * Get CSP meta tag content
   */
  static getCSPContent(): string {
    const directives = Object.entries(SECURITY_CONFIG.CSP_DIRECTIVES)
      .map(([key, values]) => `${key} ${values.join(' ')}`)
      .join('; ');
    
    return directives;
  }
}

/**
 * Security monitoring and alerting
 */
export class SecurityMonitor {
  private static alerts: Array<{
    timestamp: string;
    type: string;
    message: string;
    data: any;
  }> = [];

  /**
   * Log a security event
   */
  static logSecurityEvent(type: string, message: string, data?: any) {
    if (!SECURITY_CONFIG.LOGGING.ENABLE_SECURITY_LOGS) return;

    const alert = {
      timestamp: new Date().toISOString(),
      type,
      message,
      data,
    };

    this.alerts.push(alert);
    
    // Keep only recent alerts
    if (this.alerts.length > SECURITY_CONFIG.LOGGING.MAX_LOG_ENTRIES) {
      this.alerts = this.alerts.slice(-SECURITY_CONFIG.LOGGING.MAX_LOG_ENTRIES);
    }

    // Log to console
    console.warn(`[SECURITY] ${type}: ${message}`, data);
  }

  /**
   * Get recent security alerts
   */
  static getRecentAlerts(count: number = 10) {
    return this.alerts.slice(-count);
  }

  /**
   * Clear security alerts
   */
  static clearAlerts() {
    this.alerts = [];
  }
}
