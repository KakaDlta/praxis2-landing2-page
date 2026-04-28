"use client";

import { motion } from "framer-motion";
import { GlowButton } from "../ui/GlowButton";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-praxis-gold/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-praxis-amber/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-white/20 text-xs font-bold tracking-widest uppercase text-praxis-gold">
            Execução de Estratégia & Governança
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-[1.1] mb-6">
            Estratégia sem execução é <span className="text-praxis-gold">intenção.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light mb-8 max-w-xl leading-relaxed">
            Execução sem governança é desperdício. Protegemos sua decisão com eficiência sistêmica e arquitetura de estratégia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <GlowButton>
              Falar com Especialista <ArrowRight size={20} />
            </GlowButton>
            <GlowButton variant="secondary">
              Ver Metodologia
            </GlowButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-square glass flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-praxis-gold/5 to-transparent" />
            <div className="w-full h-full relative">
               {/* Abstract geometric shape representing "Execution" */}
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
               />
               <div className="absolute inset-10 border-2 border-white/10 rounded-full" />
               <div className="absolute inset-20 border-t-2 border-praxis-gold rounded-full" />
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-praxis-gold to-praxis-amber rounded-2xl rotate-45 shadow-[0_0_50px_rgba(245,158,11,0.3)]" />
               </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-2xl flex items-center justify-center -rotate-12">
            <div className="w-8 h-8 bg-white/20 rounded-full" />
          </div>
          <div className="absolute -bottom-10 -left-10 p-6 glass rounded-2xl rotate-6 max-w-[200px]">
            <p className="text-xs font-bold text-praxis-gold mb-1">EFICIÊNCIA OPERACIONAL</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-praxis-gold" 
                />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
