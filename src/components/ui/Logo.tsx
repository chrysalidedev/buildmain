import React from 'react';
import { siteConfig } from '../../config/site';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'badge' | 'full';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true,
  variant = 'badge',
}) => {
  // Dimension definitions
  const dimensions = {
    sm: { badge: 'w-8 h-8', text: 'text-lg', full: 'h-8' },
    md: { badge: 'w-10 h-10', text: 'text-xl', full: 'h-10' },
    lg: { badge: 'w-14 h-14', text: 'text-2xl', full: 'h-14' },
    xl: { badge: 'w-20 h-20', text: 'text-3xl', full: 'h-20' },
  }[size];

  // If user requested the full circular official badge image directly
  if (variant === 'full' && siteConfig.logo.customImageSrc) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img 
          src={siteConfig.logo.customImageSrc} 
          alt={siteConfig.logo.alt} 
          className={`${dimensions.badge} object-contain rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} aria-label={siteConfig.logo.alt}>
      {/* Official Circular Logo Badge */}
      <div 
        className={`${dimensions.badge} rounded-full overflow-hidden bg-black border border-purple-500/30 flex items-center justify-center p-0.5 shadow-[0_0_20px_-3px_rgba(168,85,247,0.35)] transition-transform duration-200 hover:scale-105 shrink-0`}
        title="Build-Main - Rendre la technologie accessible à tous"
      >
        {siteConfig.logo.customImageSrc ? (
          <img 
            src={siteConfig.logo.customImageSrc} 
            alt={siteConfig.logo.alt}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-1"
          >
            {/* Robot Head Frame */}
            <rect x="19" y="33" width="62" height="46" rx="14" fill="#0B0F19" stroke="#FFFFFF" strokeWidth="4.5" />
            
            {/* Antenna */}
            <circle cx="50" cy="18" r="4.5" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />
            <line x1="50" y1="22.5" x2="50" y2="33" stroke="#FFFFFF" strokeWidth="4" />
            
            {/* Ears */}
            <rect x="13" y="46" width="6" height="18" rx="3" fill="#FFFFFF" />
            <rect x="81" y="46" width="6" height="18" rx="3" fill="#FFFFFF" />
            
            {/* Solid circular happy eyes from official brand logo */}
            <circle cx="39" cy="51" r="4.2" fill="#FFFFFF" />
            <circle cx="61" cy="51" r="4.2" fill="#FFFFFF" />
            
            {/* Friendly smile */}
            <path d="M 39 63 Q 50 71 61 63" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        )}
      </div>

      {/* Typography: buildmain in pure white with purple tech dot */}
      {showText && (
        <div className="flex items-baseline">
          <span className={`font-extrabold tracking-tight text-white font-sans ${dimensions.text}`}>
            build<span className="text-purple-400 font-bold">main</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 ml-1 inline-block animate-pulse shadow-[0_0_8px_#A855F7]" />
        </div>
      )}
    </div>
  );
};
