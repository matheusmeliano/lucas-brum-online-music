import type { SVGProps } from "react";

export default function FlagBR(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 32"
      role="img"
      aria-label="Brasil"
      focusable="false"
      {...props}
    >
      <title>Brasil</title>
      <rect width="48" height="32" rx="4" fill="#009B3A" />
      <path d="M24 4L44 16L24 28L4 16L24 4Z" fill="#FFDF00" />
      <circle cx="24" cy="16" r="7" fill="#002776" />
      <path
        d="M15.6 14.7c3.7-1.7 8.1-1.8 12-.4 2 .7 3.8 1.8 5.4 3.3"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

