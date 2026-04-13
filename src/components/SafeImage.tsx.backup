import { useState } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  fallbackComponent?: React.ReactNode;
  onLoad?: () => void;
  onError?: (error: Event) => void;
  showLoadingIndicator?: boolean;
  loadingType?: 'spinner' | 'skeleton' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
}

type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

const loadingSizes = {
  sm: { spinner: 'w-4 h-4', skeleton: 'h-4', pulse: 'h-4' },
  md: { spinner: 'w-6 h-6', skeleton: 'h-6', pulse: 'h-6' },
  lg: { spinner: 'w-8 h-8', skeleton: 'h-8', pulse: 'h-8' },
};

const loadingColors = {
  primary: 'border-blue-500',
  secondary: 'border-gray-300',
  white: 'border-white',
};

export default function SafeImage({
  src,
  alt,
  className = '',
  fallback,
  fallbackComponent,
  onLoad,
  onError,
  showLoadingIndicator = true,
  loadingType = 'spinner',
  size = 'md',
}: Props) {
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');

  const handleLoad = () => {
    setLoadingState('loaded');
    onLoad?.();
  };

  const handleError = (error: React.SyntheticEvent<HTMLImageElement>) => {
    setLoadingState('error');
    onError?.(error.nativeEvent);
  };

  const handleLoadStart = () => {
    if (loadingState === 'idle') {
      setLoadingState('loading');
    }
  };

  if (loadingState === 'error' && fallbackComponent) {
    return <>{fallbackComponent}</>;
  }

  if (loadingState === 'error') {
    return (
      <div className={`flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg ${className}`}>
        <div className="text-center p-4">
          <ImageOff className={`w-8 h-8 text-gray-400 mx-auto mb-2 ${size === 'lg' ? 'w-12 h-12' : size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'}`} />
          <div className="text-xs text-gray-500 font-medium">Image not available</div>
          <div className="text-xs text-gray-400 mt-1">Failed to load</div>
        </div>
      </div>
    );
  }

  const renderLoadingIndicator = () => {
    if (!showLoadingIndicator || loadingState !== 'loading') return null;

    const sizeClasses = loadingSizes[size];

    switch (loadingType) {
      case 'skeleton':
        return (
          <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <div className={`w-12 h-12 bg-gray-300 rounded animate-pulse ${sizeClasses.skeleton}`} />
            </div>
          </div>
        );

      case 'pulse':
        return (
          <div className="absolute inset-0 bg-gray-100 rounded-lg animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <div className={`w-8 h-8 bg-gray-300 rounded-full animate-pulse ${sizeClasses.pulse}`} />
            </div>
          </div>
        );

      case 'spinner':
      default:
        return (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="relative">
              <div className={`${sizeClasses.spinner} border-2 ${loadingColors.secondary} border-t-blue-500 rounded-full animate-spin`} />
              {size === 'lg' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-4 h-4 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderLoadingIndicator()}
      <img
        src={fallback && loadingState === 'error' ? fallback : src}
        alt={alt}
        className={`${className} transition-all duration-300 ${
          loadingState === 'loading' ? 'opacity-0 scale-95' : 
          loadingState === 'loaded' ? 'opacity-100 scale-100' : 
          loadingState === 'error' ? 'opacity-0 scale-95' :
          'opacity-0 scale-95'
        }`}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Loading progress indicator for large images */}
      {showLoadingIndicator && loadingState === 'loading' && size === 'lg' && (
        <div className="absolute bottom-2 left-2 right-2">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: '60%' }} />
          </div>
        </div>
      )}
    </div>
  );
}
