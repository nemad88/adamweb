import { AnimatedText } from "./AnimatedText";

export function ObfuscatedText({
  parts,
  href,
  ariaLabel,
}: {
  parts: string[];
  href: string;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-zinc-200 font-medium hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-sm transition-colors duration-200"
      aria-label={ariaLabel}
      style={
        href.startsWith("tel:")
          ? { direction: "ltr", unicodeBidi: "bidi-override" }
          : undefined
      }
    >
      <AnimatedText parts={parts} />
    </a>
  );
}
