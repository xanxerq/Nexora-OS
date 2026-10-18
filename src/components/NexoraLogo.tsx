import React from 'react';

interface NexoraLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
  interactive?: boolean;
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  size = 120,
  glow = true,
  interactive = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${
        interactive ? 'group transition-transform duration-500 hover:scale-105' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background ambient cyan/blue glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0284C7]/30 via-[#38BDF8]/40 to-[#0EA5E9]/20 blur-xl opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
        />
      )}

      {/* SVG rendering of the faceted crystalline N logo from gemini-svg.svg & image.png */}
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="relative z-10 drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle cyan glow filter */}
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38BDF8" floodOpacity="0.8" />
          </filter>

          <filter id="outerGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Facet Gradients */}
          <linearGradient id="facetDeep1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1B3D" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>

          <linearGradient id="facetMidBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id="facetBrightCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          <linearGradient id="facetDarkNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="facetIcySpire" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id="facetVioletEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Crystalline Facets of the Letter 'N' */}
        {/* Left Vertical Pillar Facets */}
        <polygon
          points="46,78 72,54 84,78"
          fill="url(#facetMidBlue)"
          stroke="#38BDF8"
          strokeWidth="0.8"
          className="transition-colors duration-300 hover:brightness-125"
        />
        <polygon
          points="46,78 84,78 70,102"
          fill="#0284C7"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="46,78 46,128 70,102"
          fill="url(#facetBrightCyan)"
          stroke="#7DD3FC"
          strokeWidth="0.8"
        />
        <polygon
          points="46,128 58,154 70,102"
          fill="#0369A1"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="58,154 84,142 70,102"
          fill="url(#facetDarkNavy)"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />

        {/* Diagonal Stroke Facets */}
        <polygon
          points="70,102 84,78 106,102"
          fill="url(#facetMidBlue)"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="70,102 106,102 84,142"
          fill="#1E40AF"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="84,142 106,102 124,134"
          fill="url(#facetDeep1)"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="84,142 80,166 102,156"
          fill="#0C4A6E"
          stroke="#7DD3FC"
          strokeWidth="0.8"
        />
        <polygon
          points="84,142 102,156 124,134"
          fill="url(#facetVioletEdge)"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />

        {/* Right Vertical Spire Facets */}
        <polygon
          points="114,36 126,58 148,68"
          fill="url(#facetIcySpire)"
          stroke="#BAE6FD"
          strokeWidth="0.9"
        />
        <polygon
          points="114,36 148,68 158,84"
          fill="#0EA5E9"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="126,58 106,102 124,134"
          fill="url(#facetBrightCyan)"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="126,58 148,68 124,134"
          fill="#1D4ED8"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="148,68 158,84 146,128"
          fill="url(#facetDeep1)"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="148,68 124,134 146,128"
          fill="#1E3A8A"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />
        <polygon
          points="124,134 134,162 146,128"
          fill="url(#facetBrightCyan)"
          stroke="#7DD3FC"
          strokeWidth="0.8"
        />
        <polygon
          points="124,134 102,156 134,162"
          fill="#0369A1"
          stroke="#38BDF8"
          strokeWidth="0.8"
        />

        {/* Outer Perimeter Highlight Glow Line */}
        <polygon
          points="72,54 46,78 46,128 58,154 80,166 102,156 134,162 146,128 158,84 148,68 114,36 126,58 106,102 84,78"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeLinejoin="round"
          filter="url(#outerGlow)"
        />

        {/* Inner wireframe light nodes */}
        <circle cx="114" cy="36" r="2.2" fill="#E0F2FE" />
        <circle cx="72" cy="54" r="1.8" fill="#E0F2FE" />
        <circle cx="46" cy="78" r="1.8" fill="#38BDF8" />
        <circle cx="58" cy="154" r="1.8" fill="#38BDF8" />
        <circle cx="80" cy="166" r="1.8" fill="#38BDF8" />
        <circle cx="134" cy="162" r="2" fill="#7DD3FC" />
        <circle cx="158" cy="84" r="1.8" fill="#7DD3FC" />
        <circle cx="106" cy="102" r="2.2" fill="#E0F2FE" />
        <circle cx="70" cy="102" r="1.8" fill="#BAE6FD" />
      </svg>
    </div>
  );
};
