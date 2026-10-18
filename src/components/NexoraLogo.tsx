import React, { useId } from 'react';

interface NexoraLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
  interactive?: boolean;
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  size = 110,
  glow = true,
  interactive = true,
}) => {
  const uid = useId().replace(/:/g, '');

  const idCb = `cB_${uid}`;
  const idSm = `sM_${uid}`;
  const idId = `iD_${uid}`;
  const idDf = `dF_${uid}`;

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

      {/* Exact official SVG code provided by user */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size}
        height={size}
        className="relative z-10 drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]"
      >
        <defs>
          <linearGradient id={idCb} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id={idSm} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id={idId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <linearGradient id={idDf} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <g stroke="#7DD3FC" strokeWidth="2" strokeLinejoin="round" strokeOpacity="0.45">
          <polygon points="110,175 185,130 155,210" fill={`url(#${idId})`} />
          <polygon points="110,175 155,210 110,275" fill={`url(#${idSm})`} />
          <polygon points="155,210 185,235 110,275" fill={`url(#${idId})`} />
          <polygon points="110,275 185,235 150,320" fill={`url(#${idDf})`} />
          <polygon points="110,275 150,320 110,365" fill={`url(#${idId})`} />
          <polygon points="150,320 195,310 165,345" fill={`url(#${idCb})`} />
          <polygon points="150,320 165,345 110,365" fill={`url(#${idSm})`} />
          <polygon points="110,365 165,345 195,420" fill={`url(#${idDf})`} />
          <polygon points="165,345 195,340 195,420" fill={`url(#${idId})`} />
          <polygon points="185,130 245,195 155,210" fill={`url(#${idCb})`} />
          <polygon points="155,210 245,195 225,260" fill={`url(#${idSm})`} />
          <polygon points="155,210 225,260 185,235" fill={`url(#${idId})`} />
          <polygon points="245,195 295,255 225,260" fill={`url(#${idCb})`} />
          <polygon points="225,260 295,255 275,320" fill={`url(#${idSm})`} />
          <polygon points="185,235 225,260 275,320" fill={`url(#${idId})`} />
          <polygon points="275,320 295,255 340,340" fill={`url(#${idSm})`} />
          <polygon points="275,320 340,340 325,405" fill={`url(#${idId})`} />
          <polygon points="285,85 395,155 335,165" fill={`url(#${idCb})`} />
          <polygon points="285,85 335,165 285,185" fill={`url(#${idSm})`} />
          <polygon points="335,165 395,155 395,245" fill={`url(#${idId})`} />
          <polygon points="285,185 335,165 345,230" fill={`url(#${idCb})`} />
          <polygon points="335,165 395,245 345,230" fill={`url(#${idSm})`} />
          <polygon points="285,185 345,230 295,255" fill={`url(#${idId})`} />
          <polygon points="295,255 345,230 340,340" fill={`url(#${idDf})`} />
          <polygon points="345,230 395,245 395,355" fill={`url(#${idId})`} />
          <polygon points="345,230 395,355 340,340" fill={`url(#${idDf})`} />
          <polygon points="340,340 395,355 325,405" fill={`url(#${idSm})`} />
        </g>
        <path
          d="M110,175 L185,130 L285,243 L285,85 L395,155 L395,355 L325,405 L185,235 L185,312 L195,310 L195,420 L110,365 Z"
          fill="none"
          stroke="#E0F2FE"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeOpacity="0.85"
        />
      </svg>
    </div>
  );
};
