import { ObfuscatedText } from "./ObfuscatedText";

export function ObfuscatedPhone() {
  const parts = ["+36", " 30", " 594", "7244"];
  const phone = parts.join("");
  return (
    <ObfuscatedText
      parts={parts}
      href={`tel:${phone.replace(/\s/g, "")}`}
      ariaLabel="Call phone number"
      
    />
  );
}
