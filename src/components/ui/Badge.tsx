import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'violet' | 'amber' | 'emerald' | 'cyan' | 'neutral' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'md',
  className = '',
  dot = false,
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  }[size];

  const variantClasses = {
    purple: 'bg-purple-500/15 text-purple-300 border border-purple-500/30',
    violet: 'bg-violet-500/15 text-violet-300 border border-violet-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25',
    neutral: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    subtle: 'bg-white/5 text-slate-400 border border-white/10',
  }[variant];

  const dotColorClasses = {
    purple: 'bg-purple-400 shadow-[0_0_8px_#A855F7] animate-pulse',
    violet: 'bg-violet-400 shadow-[0_0_8px_#8B5CF6] animate-pulse',
    amber: 'bg-amber-400',
    emerald: 'bg-emerald-400 animate-pulse',
    cyan: 'bg-cyan-400',
    neutral: 'bg-slate-400',
    subtle: 'bg-slate-500',
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full tracking-wide select-none ${sizeClasses} ${variantClasses} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColorClasses}`} />}
      {children}
    </span>
  );
};
