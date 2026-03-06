import { useEffect, useRef, useState } from "react";

interface UseScrollColorOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollColor(options: UseScrollColorOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.3,
        rootMargin: options.rootMargin || "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return { elementRef, isVisible };
}
