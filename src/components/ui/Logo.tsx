import React from 'react';
import { siteConfig } from '../../config/site';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  // Dimension definitions
  const dimensions = {
    sm: { icon: 34, text: 'text-lg', badge: 'w-8 h-8' },
    md: { icon: 42, text: 'text-xl', badge: 'w-10 h-10' },
    lg: { icon: 56, text: 'text-2xl', badge: 'w-14 h-14' },
  }[size];

  // If a custom image was configured by the user, display it cleanly
  if (siteConfig.logo.customImageSrc) {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <img 
          src={siteConfig.logo.customImageSrc} 
          alt={siteConfig.logo.alt} 
          className={`${dimensions.badge} object-contain rounded-full`}
        />
        {showText && (
          <span className={`font-bold tracking-tight text-white font-sans ${dimensions.text}`}>
            build<span className="text-amber-400">main</span>
          </span>
        )}
      </div>
    );
  }

  // Exact reference logo recreation:
  // - Circular deep black background (#000000 or #0B0F19)
  // - Friendly smiling robot icon on the left
  // - Typography « buildmain » in crisp white with modern geometric kerning
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`} aria-label={siteConfig.logo.alt}>
      {/* Circular Emblem */}
      <div 
        className={`${dimensions.badge} rounded-full bg-[#05080E] border border-amber-500/30 flex items-center justify-center p-1.5 shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)] transition-transform duration-200 hover:scale-105`}
        title="Build-Main - Rendre la technologie accessible à tous"
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Subtle inner ring */}
          <circle cx="50" cy="50" r="47" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
          
          {/* Antenna */}
          <circle cx="50" cy="18" r="4" fill="#F59E0B" />
          <line x1="50" y1="22" x2="50" y2="30" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          
          {/* Ears */}
          <rect x="18" y="44" width="5" height="14" rx="2.5" fill="#F59E0B" opacity="0.9" />
          <rect x="77" y="44" width="5" height="14" rx="2.5" fill="#F59E0B" opacity="0.9" />
          
          {/* Robot Head Frame */}
          <rect x="23" y="30" width="54" height="42" rx="12" fill="#111827" stroke="#FFFFFF" strokeWidth="3" />
          
          {/* Smiling Happy Eyes */}
          <path d="M 36 47 Q 41 41 46 47" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 54 47 Q 59 41 64 47" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          
          {/* Gentle Smile */}
          <path d="M 38 58 Q 50 67 62 58" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Wordmark Typography */}
      {showText && (
        <div className="flex items-baseline">
          <span className={`font-extrabold tracking-tight text-white font-sans ${dimensions.text}`}>
            build<span className="text-amber-400 font-bold">main</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-1 inline-block animate-pulse" />
        </div>
      )}
    </div>
  );
};
