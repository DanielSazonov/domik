import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.2, delay = 100) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Fallback: if IntersectionObserver is unavailable or errors, reveal content
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setTimeout(() => setIsVisible(true), delay);
      return;
    }

    let observer: IntersectionObserver | undefined;
    const currentElement = elementRef.current;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
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
      setTimeout(() => setIsVisible(true), delay);
    }

    return () => {
      if (currentElement && observer) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay]);

  return { elementRef, isVisible };
};
