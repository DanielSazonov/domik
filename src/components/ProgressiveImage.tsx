import { useState } from "react";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProgressiveImage = ({
  src,
  alt,
  className = "",
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <div
        className={`absolute inset-0 bg-muted animate-pulse transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-[opacity,filter] duration-500 ${
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />
    </div>
  );
};

