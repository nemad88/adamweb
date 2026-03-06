"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const animationConfig = {
  y: 20,
  opacity: 0,
};
const animationToConfig = {
  y: 0,
  opacity: 1,
  stagger: 0.08,
  duration: 0.5,
  ease: "power2.out",
};

export function AnimatedText({ parts }: { parts: string[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (ref.current && !prefersReduced) {
      gsap.fromTo(ref.current.children, animationConfig, animationToConfig);
    }
  }, []);
  return (
    <span className="break-all" ref={ref}>
      {parts.map((part, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {part}
        </span>
      ))}
    </span>
  );
}
