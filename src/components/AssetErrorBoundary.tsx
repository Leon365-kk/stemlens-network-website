import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  assetType?: 'image' | 'logo' | 'background';
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class AssetErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    // Log asset loading errors for debugging
    console.warn(`Asset loading error (${this.props.assetType || 'unknown'}):`, error);
    
    // You could also send this to an error tracking service
    // trackAssetError(error, this.props.assetType);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const assetType = this.props.assetType || 'asset';
      
      // Type-specific fallbacks
      switch (assetType) {
        case 'logo':
          return (
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-lg">
              <span className="text-xs text-gray-500 font-semibold">LOGO</span>
            </div>
          );
        
        case 'image':
          return (
            <div className="flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg p-4">
              <div className="text-center">
                <div className="text-gray-400 text-xs mb-1">Image unavailable</div>
                <div className="text-gray-500 text-xs">{this.state.error?.message}</div>
              </div>
            </div>
          );
        
        case 'background':
          return (
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full flex items-center justify-center">
              <div className="text-gray-500 text-xs">Background unavailable</div>
            </div>
          );
        
        default:
          return (
            <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded p-3">
              <span className="text-xs text-gray-500">Asset unavailable</span>
            </div>
          );
      }
    }

    return this.props.children;
  }
}
