import React from "react";

type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
};

const baseClassName =
  "inline-flex items-center gap-1 text-emerald-400 font-semibold hover:text-cyan-400 transition-colors group";

export const StyledLink = ({ href, children, ariaLabel }: StyledLinkProps) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={baseClassName}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
