// src/components/ui/FadingLine.tsx
import React from "react";

type Props = {
  direction?: "horizontal" | "vertical";
  color?: string;        // base color (center glow)
  fade?: string;         // edges fade-to color
  thickness?: number;    // px
  length?: string;       // CSS length (e.g., '100%', '640px')
  blur?: number;         // px of blur glow
  className?: string;    // extra classes (e.g., mx-auto)
};

export default function FadingLine({
  direction = "horizontal",
  color = "rgba(59,130,246,0.9)",     // blue-500-ish
  fade = "rgba(59,130,246,0.0)",
  thickness = 2,
  length = "100%",
  blur = 8,
  className = "",
}: Props) {
  const isHorizontal = direction === "horizontal";

  const style: React.CSSProperties = isHorizontal
    ? {
        width: length,
        height: thickness,
        background: `linear-gradient(90deg, ${fade} 0%, ${color} 50%, ${fade} 100%)`,
        filter: `drop-shadow(0 0 ${blur}px ${color})`,
      }
    : {
        width: thickness,
        height: length,
        background: `linear-gradient(180deg, ${fade} 0%, ${color} 50%, ${fade} 100%)`,
        filter: `drop-shadow(0 0 ${blur}px ${color})`,
      };

  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className} max-w-7xl mx-auto`}
      style={style}
    />
  );
}