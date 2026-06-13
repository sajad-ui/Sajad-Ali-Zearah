import React from 'react';

interface AlAyenLogoProps {
  className?: string; // Classes for the SVG container
  color?: string; // Color of the logo path (defaults to Al-Ayen Oxford Blue)
  showText?: boolean; // Whether to display bilingual subtitle texts underneath
  textColor?: string; // Text color
}

export const AlAyenLogo: React.FC<AlAyenLogoProps> = ({
  className = "w-12 h-12",
  color = "currentColor",
  showText = false,
  textColor = "text-oxford-blue"
}) => {
  return (
    <div className="flex flex-col items-center select-none text-center">
      {/* Real Authentic Al-Ayen Iraqi University (AUIQ) Logo SVG */}
      <svg
        className={`transform hover:scale-105 transition-all duration-300 ${className}`}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="auiq-academic-logo-assembly">
          {/* 1. Left outer elegant Tulip petal */}
          <path
            d="M 250,340 C 220,325 180,245 180,180 C 180,120 145,85 110,70 L 112,70 C 145,85 178,115 185,150 C 195,190 195,215 224,238 Z"
            fill={color}
          />

          {/* 2. Right outer elegant Tulip petal (Mirrored) */}
          <path
            d="M 250,340 C 280,325 320,245 320,180 C 320,120 355,85 390,70 L 388,70 C 355,85 322,115 315,150 C 305,190 305,215 276,238 Z"
            fill={color}
          />

          {/* 3. Left Inner Fountain Pen Nib Blade */}
          <path
            d="M 247,340 L 210,245 C 205,190 205,145 205,145 L 205,75 L 247,155 Z M 247,155"
            fill={color}
          />

          {/* 4. Right Inner Fountain Pen Nib Blade (Mirrored) */}
          <path
            d="M 253,340 L 290,245 C 295,190 295,145 295,145 L 295,75 L 253,155 Z M 253,155"
            fill={color}
          />

          {/* 5. Center Breather Hole (Represented transparently) */}
          <circle cx="250" cy="158" r="7" fill="#ffffff" />
          {/* Subtle gold center marker / academic light */}
          <circle cx="250" cy="158" r="3" fill="#c5a059" />

          {/* 6. Base Swoosh Waves (Left bottom) */}
          <path
            d="M 143,290 C 170,305 215,322 225,322 C 205,324 185,317 160,302 Z"
            fill={color}
          />
          <path
            d="M 188,318 C 210,328 235,332 235,332 C 220,334 205,330 190,323 Z"
            fill={color}
          />

          {/* 7. Base Swoosh Waves (Right bottom - Mirrored) */}
          <path
            d="M 357,290 C 330,305 285,322 275,322 C 295,324 315,317 340,302 Z"
            fill={color}
          />
          <path
            d="M 312,318 C 290,328 265,332 265,332 C 280,334 295,330 310,323 Z"
            fill={color}
          />
        </g>
      </svg>

      {/* Bilingual authentic typography underneath (Used on logo expansions) */}
      {showText && (
        <div className={`mt-2 flex flex-col items-center ${textColor}`}>
          <span className="font-sans font-extrabold text-sm md:text-base leading-tight tracking-wider uppercase">
            ALAYEN IRAQI
          </span>
          <span className="font-sans font-normal text-xs tracking-[0.25em] uppercase opacity-90">
            UNIVERSITY
          </span>
          <span className="font-serif font-semibold text-[10px] tracking-[0.4em] uppercase opacity-75 mt-0.5">
            AUIQ
          </span>
        </div>
      )}
    </div>
  );
};
