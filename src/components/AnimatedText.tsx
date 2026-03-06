import { useScrollColor } from "@/hooks/use-scroll-color";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function AnimatedText({
  children,
  className,
  colorFrom = "text-muted-foreground/50",
  colorTo = "text-foreground",
  delay = 0,
  as: Component = "span",
}: AnimatedTextProps) {
  const { elementRef, isVisible } = useScrollColor({ threshold: 0.2 });

  return (
    <Component
      ref={elementRef as any}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? colorTo : colorFrom,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
