"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "PRAXIS Assessment",
    badge: "Diagnóstico",
    description: "Análise profunda da maturidade operacional, governança e alinhamento estratégico.",
    items: ["Raio-X de Processos", "Gap Analysis de Estratégia", "Roadmap de Melhorias"],
  },
  {
    title: "PRAXIS Mentoria",
    badge: "Acompanhamento",
    description: "Mentoria executiva focada no desenvolvimento de lideranças para alta performance.",
    items: ["Ritos de Gestão", "Tomada de Decisão", "Cultura de Execução"],
  },
  {
    title: "PRAXIS Projetos",
    badge: "Hands-on",
    description: "Implementação direta de soluções complexas e estruturação de novas áreas.",
    items: ["PMO Estratégico", "Redesenho de Processos", "Turnaround Operacional"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">Serviços</h2>
            <p className="text-white/60 text-lg max-w-xl">
              Soluções modulares desenhadas para cada estágio de maturidade da sua organização.
            </p>
          </div>
          <div className="text-right">
            <span className="text-6xl font-black text-white/5 font-heading hidden md:block">SERVICES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full group"
            >
              <div className="p-8 border border-white/10 rounded-3xl group-hover:border-praxis-gold/50 transition-all duration-500 flex flex-col h-full bg-[#0B1C2C]">
                <div className="text-xs font-bold text-praxis-gold uppercase tracking-tighter mb-4">
                  {service.badge}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-auto space-y-3">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-praxis-gold" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
