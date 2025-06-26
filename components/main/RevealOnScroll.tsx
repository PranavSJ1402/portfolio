"use client";
import { useRef, useState, useEffect } from "react";

const RevealOnScroll = ({ children }: { children: React.ReactNode })=> {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,                  // viewport
        rootMargin: "0px 0px -20% 0px", // triggers only when 80% of section is in view
        threshold: 0.3               // 30% of element must be visible
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}
export default RevealOnScroll;