import type { DemoCategoryId } from "@/content/demo";

/**
 * Simple drawn illustrations for each business type, used instead of stock photos.
 * They are drawn in white so they sit on any coloured gradient.
 */
export function DemoArt({ id, className }: { id: DemoCategoryId; className?: string }) {
  const common = { viewBox: "0 0 120 120", fill: "none", className, "aria-hidden": true } as const;
  const w = "#fff";
  switch (id) {
    case "restaurant":
      return (
        <svg {...common}>
          <circle cx="60" cy="64" r="40" fill={w} fillOpacity=".95" />
          <circle cx="60" cy="64" r="29" fill={w} fillOpacity=".35" stroke={w} strokeOpacity=".6" />
          <path d="M44 66c2-12 12-18 23-15s15 14 9 23-20 11-28 4-5-7-4-12Z" fill="#000" fillOpacity=".16" />
          <path d="M48 20c-5 6 5 8 0 15M60 16c-5 6 5 8 0 15M72 20c-5 6 5 8 0 15" stroke={w} strokeWidth="3" strokeLinecap="round" strokeOpacity=".8" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...common}>
          <circle cx="92" cy="26" r="11" fill={w} fillOpacity=".85" />
          <rect x="26" y="34" width="52" height="72" rx="4" fill={w} fillOpacity=".95" />
          <rect x="78" y="58" width="24" height="48" rx="3" fill={w} fillOpacity=".55" />
          {[44, 58, 72].map((y) => [36, 48, 60].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="7" height="8" rx="1.5" fill="#000" fillOpacity=".22" />))}
          <rect x="46" y="90" width="12" height="16" rx="2" fill="#000" fillOpacity=".3" />
          <path d="M10 106h100" stroke={w} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "salon":
      return (
        <svg {...common}>
          <ellipse cx="60" cy="50" rx="30" ry="36" fill={w} fillOpacity=".3" stroke={w} strokeWidth="4" />
          <path d="M60 86v20M42 108h36" stroke={w} strokeWidth="4" strokeLinecap="round" />
          <path d="M46 44c6-14 24-14 30 0-4 22-26 22-30 0Z" fill={w} fillOpacity=".9" />
          <path d="M92 20l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7ZM22 70l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill={w} />
        </svg>
      );
    case "clinic":
      return (
        <svg {...common}>
          <rect x="24" y="24" width="72" height="72" rx="18" fill={w} fillOpacity=".95" />
          <path d="M60 42v36M42 60h36" stroke="#000" strokeOpacity=".28" strokeWidth="11" strokeLinecap="round" />
          <path d="M8 104h24l7-12 9 20 8-14h56" stroke={w} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "school":
      return (
        <svg {...common}>
          <path d="M60 22 12 44l48 22 48-22-48-22Z" fill={w} fillOpacity=".95" />
          <path d="M30 56v22c8 9 52 9 60 0V56" fill={w} fillOpacity=".4" stroke={w} strokeWidth="3" strokeLinejoin="round" />
          <path d="M102 47v26" stroke={w} strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="102" cy="78" r="5" fill={w} />
          <path d="M24 104h72" stroke={w} strokeWidth="3" strokeLinecap="round" strokeOpacity=".7" />
        </svg>
      );
    case "realestate":
      return (
        <svg {...common}>
          <path d="M20 62 54 32l34 30v44H20V62Z" fill={w} fillOpacity=".95" />
          <path d="M12 66 54 28l42 38" stroke={w} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="45" y="78" width="18" height="28" rx="2" fill="#000" fillOpacity=".26" />
          <rect x="68" y="66" width="12" height="12" rx="2" fill="#000" fillOpacity=".2" />
          <rect x="28" y="66" width="12" height="12" rx="2" fill="#000" fillOpacity=".2" />
          <path d="M100 106V74M100 74c-9 0-12-8-8-16 2 6 8 8 8 16Zm0 0c9 0 12-8 8-16-2 6-8 8-8 16Z" stroke={w} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shop":
    default:
      return (
        <svg {...common}>
          <path d="M28 44h64l-6 62H34l-6-62Z" fill={w} fillOpacity=".95" />
          <path d="M44 52V38a16 16 0 0 1 32 0v14" stroke={w} strokeWidth="5" strokeLinecap="round" />
          <circle cx="44" cy="56" r="4" fill="#000" fillOpacity=".3" />
          <circle cx="76" cy="56" r="4" fill="#000" fillOpacity=".3" />
          <path d="M50 78c4 8 16 8 20 0" stroke="#000" strokeOpacity=".26" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
  }
}
