import React, { useState, useEffect, useRef } from 'react';
import { Cake } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackTitle,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAttemptedFallback, setHasAttemptedFallback] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoaded(false);
    setHasAttemptedFallback(false);
  }, [src]);

  // Check if image is already cached/completed on mount
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleImageError = () => {
    // If original source was an asset and hasn't tried public /images path yet, try public path
    if (!hasAttemptedFallback && typeof currentSrc === 'string') {
      const fileName = currentSrc.split('/').pop()?.split('?')[0];
      if (fileName) {
        setHasAttemptedFallback(true);
        setCurrentSrc(`/images/${fileName}`);
        return;
      }
    }
    setHasError(true);
  };

  if (hasError || !currentSrc) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#FFF8F3] border-2 border-[#F6D4DF] text-[#50343D] p-6 text-center select-none ${
          containerClassName || className
        }`}
      >
        <div className="w-12 h-12 rounded-2xl bg-[#F6D4DF] flex items-center justify-center mb-2 text-[#C6537D] shadow-xs">
          <Cake className="w-6 h-6 stroke-[1.75]" />
        </div>
        <p className="font-serif text-sm font-bold tracking-wide text-[#50343D]">
          {fallbackTitle || alt || 'Usha Bakery Delicacy'}
        </p>
        <span className="text-[11px] text-[#C6537D] font-bold mt-1">
          Artisanal Patisserie
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#FFF8F3] animate-pulse flex items-center justify-center z-1">
          <Cake className="w-6 h-6 text-[#D96B91]/50 animate-bounce" />
        </div>
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt || 'Usha Bakery'}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
        className={`${className} ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};
