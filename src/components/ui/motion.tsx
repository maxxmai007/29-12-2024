import React from 'react';

interface MotionDivProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  whileInView?: Record<string, any>;
  transition?: Record<string, any>;
  viewport?: Record<string, any>;
}

export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  initial,
  animate,
  transition,
  viewport,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (viewport?.once) {
            observer.disconnect();
          }
        } else if (!viewport?.once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [viewport?.once]);

  const style = {
    opacity: isVisible ? animate?.opacity || 1 : initial?.opacity || 0,
    transform: isVisible 
      ? `translate(${animate?.x || 0}px, ${animate?.y || 0}px)` 
      : `translate(${initial?.x || 0}px, ${initial?.y || 0}px)`,
    transition: `all ${transition?.duration || 0.3}s ${transition?.delay || 0}s ease-out`,
  };

  return (
    <div ref={elementRef} style={style} className={className} {...props}>
      {children}
    </div>
  );
};