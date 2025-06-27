const baseIconClassName = "w-6 h-6";
const gradientIconClassName =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 shadow text-white text-xl font-bold";

export function AtIcon() {
  return (
    <span className={`${baseIconClassName} ${gradientIconClassName}`}>@</span>
  );
}
