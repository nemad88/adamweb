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

const emailParts = ["info", "@", "adamweb", ".dev"];
const emailHref = `mailto:${emailParts.join("")}`;

export function ObfuscatedEmail() {
  return (
    <ObfuscatedText
      parts={emailParts}
      href={emailHref}
      ariaLabel="Send email"
    />
  );
}
