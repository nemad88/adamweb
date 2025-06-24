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
      className="inline-flex items-center gap-1 text-cyan-600 font-semibold hover:text-emerald-500 transition-colors group"
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
