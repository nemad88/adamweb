import React from "react";
import { AnimatedText } from "./AnimatedText";
import { StyledLink } from "./StyledLink";
import { StyledText } from "./StyledText";

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
  const ariaLabel =
    label === "Email"
      ? "Send email"
      : label === "Phone"
      ? "Call phone number"
      : `Visit ${label}`;

  return (
    <div className="group flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-[background-color,border-color] duration-300">
      <span aria-hidden="true" className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/15 transition-colors duration-300">
        {icon}
      </span>
      <div className="flex flex-col min-w-0">
        <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
          {label}
        </span>
        <span className="text-sm">
          {href.startsWith("mailto:") || href.startsWith("http") ? (
            <StyledLink href={href} ariaLabel={ariaLabel}>
              {typeof value === "string" ? (
                <AnimatedText parts={[value]} />
              ) : (
                value
              )}
            </StyledLink>
          ) : (
            <StyledText>
              {typeof value === "string" ? (
                <AnimatedText parts={[value]} />
              ) : (
                value
              )}
            </StyledText>
          )}
        </span>
      </div>
    </div>
  );
}
