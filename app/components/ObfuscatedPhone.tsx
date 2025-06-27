import { ObfuscatedText } from "./ObfuscatedText";

const phoneParts = ["+36", " 30", " 594", "7244"];
const phoneHref = `tel:${phoneParts.join("").replace(/\s/g, "")}`;

export function ObfuscatedPhone() {
  return (
    <ObfuscatedText
      parts={phoneParts}
      href={phoneHref}
      ariaLabel="Call phone number"
    />
  );
}
