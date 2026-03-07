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
