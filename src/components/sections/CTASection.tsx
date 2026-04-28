"use client";

import { motion } from "framer-motion";
import { GlowButton } from "../ui/GlowButton";
import { Send } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-praxis-gold/5 -z-10" />
      <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative border-white/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-praxis-gold/10 rounded-full blur-[80px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">
            Pronto para transformar <br /> 
            <span className="text-praxis-gold">intenção em execução?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Agende uma reunião diagnóstica com nossos especialistas e descubra como proteger suas decisões estratégicas.
          </p>
          <div className="flex flex-col items-center gap-4">
            <GlowButton className="text-lg px-12 py-5">
              Falar com Especialista agora <Send size={20} />
            </GlowButton>
            <p className="text-sm text-white/40">
              Resposta em até 24h úteis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
