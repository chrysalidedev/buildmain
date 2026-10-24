import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'amber' | 'emerald' | 'cyan' | 'neutral';
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'amber',
  title,
  highlightedWord,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`mb-4 flex ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
        {title}{' '}
        {highlightedWord && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
            {highlightedWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
