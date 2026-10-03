import React from 'react';

interface JNLogoProps {
  variant?: 'full' | 'mark' | 'horizontal' | 'crest';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official Brand Identity for:
 * JN FUNCTION HALL — Jaya Narayana
 *
 * Rendered faithfully from the official emblem:
 * - Lord Venkateswara & Goddess Lakshmi (Padmavathi Devi) with Prabhavali Arch & Hanging Diyas
 * - Royal Intertwining 3D Gold "JN" Monogram with Golden Lotus Base
 * - "JAYA NARAYANA" in Royal Classical Gold Serif
 * - "FUNCTION HALL" with ornamental arrow rules
 * - Deep Royal Maroon & Gold Filigree Frame
 */
export const JNLogo: React.FC<JNLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  size = 'md',
}) => {
  const fillColor = theme === 'dark' ? '#141b25' : '#ffffff';
  const subtitleColor = theme === 'dark' ? '#4b5563' : '#e4e4e7';

  // Mark dimension presets
  const emblemSizes = {
    sm: { w: 42, h: 42 },
    md: { w: 56, h: 56 },
    lg: { w: 76, h: 76 },
    xl: { w: 140, h: 140 },
  }[size];

  // Official Emblem Image Element
  const EmblemImage = ({
    width = emblemSizes.w,
    height = emblemSizes.h,
    imgClassName = '',
  }: {
    width?: number;
    height?: number;
    imgClassName?: string;
  }) => (
    <img
      src="/image.png"
      onError={(e) => {
        // Fallback to jpg or svg if png is unavailable
        const img = e.currentTarget as HTMLImageElement;
        if (!img.dataset.failedOnce) {
          img.dataset.failedOnce = 'true';
          img.src = '/jn-logo.jpg';
        } else {
          img.src = '/jn-logo.svg';
        }
      }}
      alt="JN Function Hall — Jaya Narayana Official Logo"
      width={width}
      height={height}
      className={`shrink-0 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105 rounded-full ${imgClassName}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      loading="eager"
      referrerPolicy="no-referrer"
    />
  );

  // Variant: Mark only (Emblem Icon)
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <EmblemImage />
      </div>
    );
  }

  // Variant: Full or Crest (Prominent standalone stacked brand lockup)
  if (variant === 'full' || variant === 'crest') {
    const fullWidth = size === 'xl' ? 140 : size === 'lg' ? 110 : size === 'md' ? 84 : 64;
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="relative group transition-transform duration-300 hover:scale-[1.02]">
          <EmblemImage
            width={fullWidth}
            height={fullWidth}
            imgClassName="drop-shadow-md ring-2 ring-[#d4af37]/30"
          />
        </div>

        {/* Brand Name Text Line 1 */}
        <div
          className="font-serif font-black tracking-[0.14em] uppercase leading-tight mt-2.5"
          style={{
            color: fillColor,
            fontSize: size === 'xl' ? '1.85rem' : size === 'lg' ? '1.4rem' : '1.1rem',
          }}
        >
          JN FUNCTION HALL
        </div>

        {/* Brand Sub-title Text Line 2 */}
        <div
          className="font-serif italic tracking-[0.2em] mt-0.5"
          style={{
            color: subtitleColor,
            fontSize: size === 'xl' ? '1.15rem' : size === 'lg' ? '0.95rem' : '0.82rem',
          }}
        >
          Jaya Narayana
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup (ideal for Navbar, sticky bar & compact headers)
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <EmblemImage
        width={size === 'sm' ? 44 : size === 'lg' ? 68 : 56}
        height={size === 'sm' ? 44 : size === 'lg' ? 68 : 56}
        imgClassName="drop-shadow-md"
      />
      <div className="flex flex-col justify-center">
        <span
          className="font-serif font-bold tracking-[0.12em] uppercase leading-none"
          style={{
            color: fillColor,
            fontSize: size === 'sm' ? '0.92rem' : size === 'lg' ? '1.3rem' : '1.08rem',
          }}
        >
          JN FUNCTION HALL
        </span>
        <span
          className="font-serif italic tracking-[0.18em] mt-1 text-[#8c6b2d] dark:text-[#f3e5ab]"
          style={{
            color: theme === 'dark' ? '#785b1a' : '#f3e5ab',
            fontSize: size === 'sm' ? '0.72rem' : size === 'lg' ? '0.88rem' : '0.78rem',
          }}
        >
          Jaya Narayana
        </span>
      </div>
    </div>
  );
};
