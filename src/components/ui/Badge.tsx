import React from 'react';
interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
  className?: string;
}
export function Badge({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) {
  const variants = {
    default: 'bg-slate-800 text-cyan-400 border-slate-700',
    success: 'bg-emerald-950/50 text-emerald-400 border-emerald-900',
    warning: 'bg-amber-950/50 text-amber-400 border-amber-900',
    error: 'bg-red-950/50 text-red-400 border-red-900',
    outline: 'bg-transparent border-slate-700 text-slate-400'
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>;
}