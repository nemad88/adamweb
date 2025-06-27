import { AnimatedText } from "./AnimatedText";

const baseClassName =
  "inline-flex items-center gap-1 group text-emerald-400 font-semibold hover:text-cyan-400 transition-colors";

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
      className={baseClassName}
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
