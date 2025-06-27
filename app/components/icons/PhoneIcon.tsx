const baseIconClassName = "w-6 h-6";
const greenIconClassName = "text-green-500 dark:text-green-300";

export function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${baseIconClassName} ${greenIconClassName}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}
