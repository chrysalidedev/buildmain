import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  isLoading = false,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  disabled,
  ...props
}) => {
  // Base classes for consistent sizing, accessibility, and smooth interaction
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 select-none rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  }[size];

  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-brand-950 font-semibold shadow-[0_4px_20px_-4px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_25px_-2px_rgba(245,158,11,0.6)] hover:brightness-110 active:scale-[0.98]',
    secondary: 'bg-white/10 text-white hover:bg-white/15 border border-white/10 active:scale-[0.98]',
    outline: 'border border-white/20 text-white hover:border-amber-400 hover:text-amber-300 hover:bg-amber-400/5 active:scale-[0.98]',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.98]',
  }[variant];

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
