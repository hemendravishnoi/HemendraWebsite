import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from "react";
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: ReactNode;
  icon?: ReactNode;
}
export function Button({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 focus:ring-cyan-500 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)]',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-slate-500 border border-slate-700',
    outline: 'bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30 focus:ring-cyan-500',
    ghost: 'bg-transparent text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
  };
  return <motion.button whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>;
}