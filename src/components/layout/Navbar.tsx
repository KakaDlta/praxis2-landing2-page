"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GlowButton } from "../ui/GlowButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Pares", href: "#pillars" },
  { name: "Serviços", href: "#services" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-praxis-blue/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-praxis-gold rounded-lg flex items-center justify-center font-black text-praxis-blue text-xl">
            P
          </div>
          <span className="text-2xl font-heading font-bold tracking-tighter">
            PRAXIS <span className="text-praxis-gold font-light">Consulting</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-praxis-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <GlowButton variant="secondary" className="px-6 py-2 text-sm">
            Falar com Especialista
          </GlowButton>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-praxis-blue border-b border-white/10 absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-praxis-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <GlowButton className="w-full">Falar com Especialista</GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
