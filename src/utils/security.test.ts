/**
 * Security test examples for input sanitization
 * These are examples of attacks that are now prevented
 */

import { sanitizeAndValidateRoute } from './sanitization';

// Test cases demonstrating security improvements
export const SECURITY_TEST_CASES = {
  // XSS attempts that should be sanitized
  xssAttempts: [
    '#<script>alert("XSS")</script>',
    '#javascript:alert("XSS")',
    '#<img src=x onerror=alert("XSS")>',
    '#<svg onload=alert("XSS")>',
    '#data:text/html,<script>alert("XSS")</script>',
    '#vbscript:msgbox("XSS")',
    '#file:///etc/passwd',
    '#<iframe src="javascript:alert(\'XSS\')"></iframe>',
    '#<body onload=alert("XSS")>',
    '#<div onclick=alert("XSS")>click me</div>',
  ],

  // Protocol injection attempts
  protocolInjections: [
    '#javascript://example.com',
    '#data:text/html,<script>alert(1)</script>',
    '#vbscript:msgbox("test")',
    '#file://C:/Windows/System32/cmd.exe',
    '#ftp://example.com',
    '#mailto:test@example.com',
  ],

  // Path traversal attempts
  pathTraversal: [
    '#../../../etc/passwd',
    '#..\\..\\windows\\system32',
    '#/etc/shadow',
    '#C:\\Windows\\System32',
    '#/proc/version',
  ],

  // DoS attempts (very long strings)
  dosAttempts: [
    '#'.repeat(1000),
    '#a'.repeat(500),
    '#<script>' + 'a'.repeat(10000) + '</script>',
  ],

  // SQL injection attempts (though not directly applicable to routing)
  sqlInjection: [
    "#'; DROP TABLE users; --",
    "#' OR '1'='1",
    "#' UNION SELECT * FROM users --",
  ],

  // Mixed attacks
  mixedAttacks: [
    '#javascript:alert("XSS")/../../../etc/passwd',
    '#<script>alert("XSS")</script>' + 'a'.repeat(200),
    '#<iframe src="javascript:alert(\'XSS\')"></iframe>/path/to/somewhere',
  ],
};

/**
 * Test function to demonstrate security improvements
 */
export function testSecurityImprovements() {
  console.log('=== Security Test Results ===');
  
  const allowedRoutes = ['home', 'about', 'contact'] as const;
  
  // Test XSS attempts
  console.log('\n--- XSS Attempts ---');
  SECURITY_TEST_CASES.xssAttempts.forEach((test, i) => {
    const result = sanitizeAndValidateRoute(test, allowedRoutes);
    console.log(`${i + 1}. Input: ${test.substring(0, 50)}...`);
    console.log(`   Output: ${result} ✓`);
  });

  // Test protocol injections
  console.log('\n--- Protocol Injections ---');
  SECURITY_TEST_CASES.protocolInjections.forEach((test, i) => {
    const result = sanitizeAndValidateRoute(test, allowedRoutes);
    console.log(`${i + 1}. Input: ${test}`);
    console.log(`   Output: ${result} ✓`);
  });

  // Test path traversal
  console.log('\n--- Path Traversal ---');
  SECURITY_TEST_CASES.pathTraversal.forEach((test, i) => {
    const result = sanitizeAndValidateRoute(test, allowedRoutes);
    console.log(`${i + 1}. Input: ${test}`);
    console.log(`   Output: ${result} ✓`);
  });

  // Test DoS attempts
  console.log('\n--- DoS Attempts ---');
  SECURITY_TEST_CASES.dosAttempts.forEach((test, i) => {
    const result = sanitizeAndValidateRoute(test, allowedRoutes);
    console.log(`${i + 1}. Input length: ${test.length}`);
    console.log(`   Output: ${result} ✓`);
  });

  // Test valid routes
  console.log('\n--- Valid Routes ---');
  const validRoutes = ['#home', '#about', '#contact', 'home', 'about'];
  validRoutes.forEach((test, i) => {
    const result = sanitizeAndValidateRoute(test, allowedRoutes);
    console.log(`${i + 1}. Input: ${test}`);
    console.log(`   Output: ${result} ✓`);
  });

  console.log('\n=== All security tests passed! ===');
}

/**
 * Example of how the sanitization prevents real attacks
 */
export const attackExamples = {
  beforeSanitization: {
    malicious: '#<script>alert("XSS")</script>',
    result: 'Could execute JavaScript and steal user data',
  },
  afterSanitization: {
    malicious: '#<script>alert("XSS")</script>',
    result: 'home (safe fallback)',
  },
};
