import React from 'react';
import type { ReactNode } from "react";
import { motion } from 'framer-motion';
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}
export function Card({
  children,
  className = '',
  hover = false,
  delay = 0
}: CardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay
  }} viewport={{
    once: true
  }} whileHover={hover ? {
    y: -5,
    boxShadow: '0 10px 30px -10px rgba(34, 211, 238, 0.2)'
  } : {}} className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden ${className}`}>
      {children}
    </motion.div>;
}