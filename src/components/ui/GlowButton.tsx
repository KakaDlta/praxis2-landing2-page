"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const GlowButton = ({ className, variant = "primary", children, ...props }: GlowButtonProps) => {
  const variants = {
    primary: "bg-praxis-gold text-praxis-blue font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    secondary: "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20",
    outline: "bg-transparent border-2 border-praxis-gold text-praxis-gold hover:bg-praxis-gold/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-8 py-4 rounded-full transition-all duration-300 relative overflow-hidden group",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-praxis-gold to-praxis-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );
};
