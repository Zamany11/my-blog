"use client"

// components/AnimatedHeading.tsx
import { useInView } from 'react-intersection-observer';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const AnimatedHeading = ({ 
  children, 
  className = '', 
  tag: Tag = 'h2' 
}: AnimatedHeadingProps) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-1000 ${
        inView 
          ? 'animate-zoom-in opacity-100' 
          : 'opacity-0 scale-0'
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default AnimatedHeading;
