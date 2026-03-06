import { ObfuscatedText } from "./ObfuscatedText";

const emailParts = ["adam.nemeth.dev", "@", "gmail", ".com"];
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
