import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  accentGlow?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  accentGlow = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        relative rounded-2xl bg-[#0C121E]/80 backdrop-blur-md 
        border border-white/[0.08] p-6 sm:p-7
        transition-all duration-300
        ${hoverEffect ? 'hover:border-amber-500/30 hover:bg-[#101726]/90 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6),0_0_20px_-5px_rgba(245,158,11,0.12)]' : ''}
        ${accentGlow ? 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)] border-amber-500/25' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
