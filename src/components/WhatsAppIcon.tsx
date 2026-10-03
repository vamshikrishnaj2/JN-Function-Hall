import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number | string;
  variant?: 'official' | 'monochrome' | 'badge';
}

/**
 * Official WhatsApp Logo Component
 * Renders the authentic WhatsApp logo (green circular badge with white telephone receiver in speech bubble)
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5',
  size = 24,
  variant = 'official',
}) => {
  if (variant === 'monochrome') {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={`shrink-0 ${className}`}
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.81 11.64c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.51-.42-.44-.58-.45l-.49-.01c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.43 3.92.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3z" />
      </svg>
    );
  }

  // Official colored WhatsApp badge (Authentic Green #25D366 circle + White phone handset)
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={`shrink-0 drop-shadow-sm ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#29E06D" />
          <stop offset="100%" stopColor="#20BA5A" />
        </linearGradient>
      </defs>
      {/* Official WhatsApp Green Background */}
      <circle cx="16" cy="16" r="15" fill="url(#waGreenGrad)" />
      {/* WhatsApp White Contour & Phone Glyph */}
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6.5C10.753 6.5 6.5 10.753 6.5 16c0 1.76.48 3.413 1.317 4.832L6.5 25.5l4.81-1.262A9.458 9.458 0 0 0 16 25.5c5.247 0 9.5-4.253 9.5-9.5S21.247 6.5 16 6.5zm-4.717 16.488l-.297-.176a7.886 7.886 0 0 1-3.64-5.32 7.892 7.892 0 0 1 1.258-5.698A7.876 7.876 0 0 1 16 8.125c4.343 0 7.875 3.532 7.875 7.875 0 4.343-3.532 7.875-7.875 7.875-1.398 0-2.735-.367-3.904-1.042l-.297-.17l-2.89.758.774-2.816-.196-.312z"
      />
      <path
        fill="#FFFFFF"
        d="M20.67 18.79c-.25-.125-1.48-.73-1.71-.813-.23-.083-.4-.125-.56.125-.16.25-.64.812-.79.98-.14.166-.29.187-.54.062-.25-.125-1.06-.39-2.02-1.245-.74-.66-1.24-1.476-1.38-1.726-.14-.25-.015-.385.11-.51.11-.11.25-.29.37-.437.12-.146.16-.25.25-.417.08-.166.04-.312-.02-.437-.06-.125-.56-1.343-.76-1.843-.2-.488-.4-.421-.56-.43h-.47c-.16 0-.43.062-.66.312-.23.25-.87.854-.87 2.083s.89 2.417 1.02 2.583c.12.167 1.76 2.687 4.26 3.766.6.258 1.06.412 1.42.527.6.191 1.14.164 1.57.1.48-.072 1.48-.604 1.69-1.188.21-.583.21-1.083.15-1.187-.06-.104-.23-.167-.48-.292z"
      />
    </svg>
  );
};
