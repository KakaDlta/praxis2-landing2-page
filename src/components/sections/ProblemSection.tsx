"use client";

import { motion } from "framer-motion";

export const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-12">
            A Verdade Incômoda
          </h2>
          <div className="space-y-8 text-xl md:text-2xl text-white/60 font-light leading-relaxed">
            <p>
              A maioria das empresas não falha por falta de estratégia. 
              <span className="text-white font-medium"> Falham por incapacidade de executá-la.</span>
            </p>
            <p>
              Planos brilhantes morrem no papel porque a governança é frágil e os processos são desconexos.
            </p>
            <motion.div 
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="py-8 border-y border-white/10"
            >
              <p className="text-praxis-gold font-bold italic">
                "Não vendemos horas de consultoria. Protegemos a sua decisão."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
