import React from "react";
import { AnimatedText } from "./AnimatedText";

export function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href: string;
}) {
  return (
    <div className="flex items-center gap-3 text-lg bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 rounded-lg px-4 py-2 shadow-sm hover:shadow-lg transition-shadow border border-zinc-500">
      <span className="text-emerald-400">{icon}</span>
      <span className="font-medium text-zinc-300">{label}:</span>
      {["mailto:", "http"].some((prefix) => href.startsWith(prefix)) ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1 text-emerald-400 font-semibold hover:text-cyan-400 transition-colors group"
          aria-label={
            label === "Email"
              ? "Send email"
              : label === "Phone"
              ? "Call phone number"
              : `Visit ${label}`
          }
        >
          {typeof value === "string" ? <AnimatedText parts={[value]} /> : value}
        </a>
      ) : typeof value === "string" ? (
        <span className="break-all text-emerald-400 font-semibold">
          <AnimatedText parts={[value]} />
        </span>
      ) : (
        <span className="break-all text-emerald-400 font-semibold">
          {value}
        </span>
      )}
    </div>
  );
}
