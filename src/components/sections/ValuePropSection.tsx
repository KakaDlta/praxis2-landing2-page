"use client";

import { GlassCard } from "../ui/GlassCard";
import { Shield, Zap, LayoutGrid, Target } from "lucide-react";

const pillars = [
  {
    title: "Arquitetura de Estratégia",
    description: "Desdobramento tático que transforma visão em marcos executáveis e mensuráveis.",
    icon: Target,
  },
  {
    title: "Engenharia de Receita",
    description: "Otimização de funis e processos comerciais para crescimento sustentável e previsível.",
    icon: Zap,
  },
  {
    title: "Eficiência Sistêmica",
    description: "Eliminação de gargalos operacionais e integração de fluxos para máxima produtividade.",
    icon: LayoutGrid,
  },
  {
    title: "Governança de Projetos",
    description: "Estruturação de ritos e controles que garantem o cumprimento do roadmap estratégico.",
    icon: Shield,
  },
];

export const ValuePropSection = () => {
  return (
    <section id="pillars" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">Pilares de Atuação</h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Nossa metodologia é construída sobre quatro fundamentos que garantem a solidez e a escalabilidade do seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <GlassCard key={index} delay={index * 0.1} className="h-full">
            <div className="w-12 h-12 bg-praxis-gold/10 rounded-xl flex items-center justify-center mb-6 border border-praxis-gold/20">
              <pillar.icon className="text-praxis-gold" size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold mb-4">{pillar.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
