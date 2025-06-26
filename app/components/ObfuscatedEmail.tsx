"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function AnimatedText({ children }: { children: React.ReactNode[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, []);
  return (
    <span className="break-all" ref={ref}>
      {children.map((child, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {child}
        </span>
      ))}
    </span>
  );
}

import { ObfuscatedText } from "./ObfuscatedText";

export function ObfuscatedEmail() {
  const parts = ["info", "@", "adamweb", ".dev"];
  const email = parts.join("");
  return (
    <ObfuscatedText
      parts={parts}
      href={`mailto:${email}`}
      ariaLabel="Send email"
      
    />
  );
}
