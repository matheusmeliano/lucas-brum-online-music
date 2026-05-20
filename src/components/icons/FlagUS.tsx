import type { SVGProps } from "react";

export default function FlagUS(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 32"
      role="img"
      aria-label="Estados Unidos"
      focusable="false"
      {...props}
    >
      <title>Estados Unidos</title>
      <rect width="48" height="32" rx="4" fill="#FFFFFF" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x="0" y={i * 4 * 2} width="48" height="4" fill="#B22234" />
      ))}
      <rect x="0" y="0" width="20" height="14" fill="#3C3B6E" />
      {Array.from({ length: 3 }).map((_, row) => (
        <g key={row}>
          {Array.from({ length: 5 }).map((__, col) => (
            <circle
              key={col}
              cx={2.5 + col * 3.5 + (row % 2) * 1.75}
              cy={2.5 + row * 4}
              r="0.7"
              fill="#FFFFFF"
              opacity="0.95"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

