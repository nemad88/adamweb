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
    <div className="flex items-center gap-3 text-lg bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 rounded-lg px-4 py-2 shadow-sm hover:shadow-lg transition-shadow border border-zinc-500">
      <span className="text-emerald-400">{icon}</span>
      <span className="font-medium text-zinc-300">{label}:</span>
      {href.startsWith("mailto:") || href.startsWith("http") ? (
        <StyledLink href={href} ariaLabel={ariaLabel}>
          {typeof value === "string" ? <AnimatedText parts={[value]} /> : value}
        </StyledLink>
      ) : (
        <StyledText>
          {typeof value === "string" ? <AnimatedText parts={[value]} /> : value}
        </StyledText>
      )}
    </div>
  );
}
