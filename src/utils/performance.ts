/**
 * Performance monitoring utilities for virtual scrolling
 */

export interface PerformanceMetrics {
  renderTime: number;
  scrollTime: number;
  visibleItems: number;
  totalItems: number;
  memoryUsage?: number;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure virtual list performance
  measureVirtualListPerformance(
    renderStart: number,
    renderEnd: number,
    scrollStart: number,
    scrollEnd: number,
    visibleItems: number,
    totalItems: number
  ): PerformanceMetrics {
    const metrics: PerformanceMetrics = {
      renderTime: renderEnd - renderStart,
      scrollTime: scrollEnd - scrollStart,
      visibleItems,
      totalItems,
      memoryUsage: this.getMemoryUsage(),
    };

    this.metrics.push(metrics);
    return metrics;
  }

  // Get current memory usage
  private getMemoryUsage(): number {
    if ('memory' in performance && (performance as any).memory) {
      return (performance as any).memory.usedJSHeapSize;
    }
    return 0;
  }

  // Get average performance metrics
  getAverageMetrics(): PerformanceMetrics | null {
    if (this.metrics.length === 0) return null;

    const sum = this.metrics.reduce(
      (acc, metric) => ({
        renderTime: acc.renderTime + metric.renderTime,
        scrollTime: acc.scrollTime + metric.scrollTime,
        visibleItems: acc.visibleItems + metric.visibleItems,
        totalItems: acc.totalItems + metric.totalItems,
        memoryUsage: (acc.memoryUsage || 0) + (metric.memoryUsage || 0),
      }),
      { renderTime: 0, scrollTime: 0, visibleItems: 0, totalItems: 0, memoryUsage: 0 }
    );

    const count = this.metrics.length;
    return {
      renderTime: sum.renderTime / count,
      scrollTime: sum.scrollTime / count,
      visibleItems: Math.round(sum.visibleItems / count),
      totalItems: Math.round(sum.totalItems / count),
      memoryUsage: (sum.memoryUsage || 0) > 0 ? Math.round((sum.memoryUsage || 0) / count) : undefined,
    };
  }

  // Check if virtualization is beneficial
  isVirtualizationBeneficial(itemCount: number): boolean {
    const avgMetrics = this.getAverageMetrics();
    if (!avgMetrics) return itemCount > 50; // Default threshold

    // If average render time is high, virtualization is beneficial
    const renderTimePerItem = avgMetrics.renderTime / avgMetrics.visibleItems;
    const estimatedTotalRenderTime = renderTimePerItem * itemCount;

    return estimatedTotalRenderTime > 16; // 16ms is one frame at 60fps
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics = [];
  }

  // Get recent metrics
  getRecentMetrics(count: number = 10): PerformanceMetrics[] {
    return this.metrics.slice(-count);
  }

  // Log performance report
  logPerformanceReport(): void {
    const avgMetrics = this.getAverageMetrics();
    if (!avgMetrics) {
      console.log('No performance data available');
      return;
    }

    console.group('🚀 Virtual List Performance Report');
    console.log('Average Render Time:', avgMetrics.renderTime.toFixed(2) + 'ms');
    console.log('Average Scroll Time:', avgMetrics.scrollTime.toFixed(2) + 'ms');
    console.log('Average Visible Items:', avgMetrics.visibleItems);
    console.log('Average Total Items:', avgMetrics.totalItems);
    console.log('Memory Usage:', avgMetrics.memoryUsage ? (avgMetrics.memoryUsage / 1024 / 1024).toFixed(2) + 'MB' : 'N/A');
    
    const efficiency = ((avgMetrics.visibleItems / avgMetrics.totalItems) * 100).toFixed(1);
    console.log('Rendering Efficiency:', efficiency + '%');
    
    if (avgMetrics.renderTime > 16) {
      console.warn('⚠️ Render time exceeds 16ms target');
    }
    
    console.groupEnd();
  }
}

export default PerformanceMonitor;
