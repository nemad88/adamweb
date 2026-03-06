import React from "react";

type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
};

export const StyledLink = ({ href, children, ariaLabel }: StyledLinkProps) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 text-zinc-200 font-medium hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-sm transition-colors duration-200"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
