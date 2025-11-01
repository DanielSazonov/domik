import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback: if IntersectionObserver is unavailable or errors, reveal content
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | undefined;
    const currentElement = elementRef.current;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // reveal once
            if (currentElement && observer) observer.unobserve(currentElement);
          }
        },
        { threshold, rootMargin: '0px 0px -50px 0px' }
      );

      if (currentElement) {
        observer.observe(currentElement);
      }
    } catch (_e) {
      // Safety net
      setIsVisible(true);
    }

    // Additional safety: ensure visibility after 2s even if observer never fires
    const timeout = window.setTimeout(() => setIsVisible(true), 2000);

    return () => {
      if (currentElement && observer) {
        observer.unobserve(currentElement);
      }
      window.clearTimeout(timeout);
    };
  }, [threshold, isVisible]);

  return { elementRef, isVisible };
};
