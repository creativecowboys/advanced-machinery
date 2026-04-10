// Custom SVG icon components for "Industries We Serve" section.
// All icons use currentColor so they inherit text color from the parent,
// and consistent strokeWidth={1.5} to align with the site's Lucide icon style.

interface IconProps {
  className?: string;
  size?: number;
}

/** Cabinet door with panel detail — Cabinets & Closets */
export function CabinetsIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer cabinet box */}
      <rect x="4" y="6" width="40" height="38" rx="1" />
      {/* Center divider — top rail */}
      <line x1="4" y1="22" x2="44" y2="22" />
      {/* Center divider — vertical stile */}
      <line x1="24" y1="22" x2="24" y2="44" />
      {/* Top-left door panel inset */}
      <rect x="8" y="26" width="12" height="14" rx="0.5" />
      {/* Top-right door panel inset */}
      <rect x="28" y="26" width="12" height="14" rx="0.5" />
      {/* Upper cabinet panel inset */}
      <rect x="8" y="10" width="32" height="8" rx="0.5" />
      {/* Left door knob */}
      <circle cx="18" cy="33" r="1.2" fill="currentColor" stroke="none" />
      {/* Right door knob */}
      <circle cx="30" cy="33" r="1.2" fill="currentColor" stroke="none" />
      {/* Toe kick */}
      <line x1="4" y1="40" x2="44" y2="40" />
    </svg>
  );
}

/** Structural beam / framing with nail detail — Construction */
export function ConstructionIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Main horizontal beam */}
      <rect x="4" y="14" width="40" height="8" rx="1" />
      {/* Left vertical stud */}
      <rect x="8" y="22" width="6" height="22" rx="0.5" />
      {/* Right vertical stud */}
      <rect x="34" y="22" width="6" height="22" rx="0.5" />
      {/* Center stud */}
      <rect x="21" y="22" width="6" height="22" rx="0.5" />
      {/* Top ridge / roofline */}
      <polyline points="4,14 24,4 44,14" />
      {/* Nail dots on beam */}
      <circle cx="13" cy="18" r="1" fill="currentColor" stroke="none" />
      <circle cx="24" cy="18" r="1" fill="currentColor" stroke="none" />
      <circle cx="35" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** CNC router bit profile / extruded plastic shape — Plastics */
export function PlasticsIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Extruded profile — front face */}
      <rect x="10" y="12" width="22" height="26" rx="1" />
      {/* 3-D depth lines — top */}
      <line x1="10" y1="12" x2="16" y2="6" />
      <line x1="32" y1="12" x2="38" y2="6" />
      <line x1="16" y1="6" x2="38" y2="6" />
      {/* 3-D depth lines — right side */}
      <line x1="32" y1="38" x2="38" y2="32" />
      <line x1="38" y1="6" x2="38" y2="32" />
      {/* Internal hollow — extrusion bore */}
      <rect x="16" y="18" width="10" height="12" rx="0.5" />
      {/* Material tick marks on extrusion face */}
      <line x1="10" y1="24" x2="13" y2="24" />
      <line x1="10" y1="28" x2="13" y2="28" />
    </svg>
  );
}

/** Blueprint / architectural plan — Architecture */
export function ArchitectureIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Blueprint sheet */}
      <rect x="5" y="5" width="38" height="38" rx="1" />
      {/* Floor plan walls */}
      <polyline points="12,36 12,16 36,16 36,36 12,36" />
      {/* Interior wall */}
      <line x1="24" y1="16" x2="24" y2="28" />
      {/* Door opening on interior wall */}
      <line x1="24" y1="28" x2="24" y2="32" strokeDasharray="2 2" />
      {/* Door swing arc */}
      <path d="M24,28 Q28,28 28,32" />
      {/* Window on right wall */}
      <line x1="36" y1="22" x2="36" y2="30" strokeWidth={3} strokeLinecap="butt" />
      {/* Dimension tick at bottom */}
      <line x1="12" y1="39" x2="36" y2="39" strokeDasharray="2 1.5" strokeWidth={1} />
      <line x1="12" y1="38" x2="12" y2="40" />
      <line x1="36" y1="38" x2="36" y2="40" />
      {/* Title block lines */}
      <line x1="5" y1="42" x2="43" y2="42" />
    </svg>
  );
}

/** CNC machined aerospace panel / wing rib — Aerospace */
export function AerospaceIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Wing profile — top surface */}
      <path d="M4,26 C10,12 30,10 44,22" />
      {/* Wing profile — bottom surface */}
      <path d="M4,26 C10,30 30,30 44,22" />
      {/* Wing rib lines — internal structure */}
      <line x1="16" y1="14.5" x2="16" y2="29" />
      <line x1="24" y1="12" x2="24" y2="29.5" />
      <line x1="32" y1="13" x2="32" y2="28" />
      {/* Leading edge detail */}
      <circle cx="44" cy="22" r="2" />
      {/* Trailing edge */}
      <circle cx="4" cy="26" r="1.5" />
      {/* Spar (horizontal structural member) */}
      <line x1="10" y1="22" x2="40" y2="22" strokeDasharray="3 2" strokeWidth={1} />
    </svg>
  );
}

/** Chair profile / furniture form — Furniture */
export function FurnitureIcon({ className, size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Chair seat */}
      <rect x="10" y="22" width="28" height="5" rx="1" />
      {/* Chair back */}
      <rect x="12" y="10" width="24" height="12" rx="1" />
      {/* Back vertical rails inside back */}
      <line x1="20" y1="12" x2="20" y2="22" />
      <line x1="28" y1="12" x2="28" y2="22" />
      {/* Back top rail */}
      <line x1="12" y1="10" x2="36" y2="10" />
      {/* Front left leg */}
      <line x1="14" y1="27" x2="12" y2="42" />
      {/* Front right leg */}
      <line x1="34" y1="27" x2="36" y2="42" />
      {/* Back left leg */}
      <line x1="14" y1="10" x2="12" y2="42" />
      {/* Back right leg */}
      <line x1="34" y1="10" x2="36" y2="42" />
      {/* Stretcher — lower cross brace */}
      <line x1="14" y1="35" x2="34" y2="35" />
    </svg>
  );
}
