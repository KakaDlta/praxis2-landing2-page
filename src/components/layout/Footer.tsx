"use client";

import React from "react";
import { Link2, Camera, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-praxis-blue border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-praxis-gold rounded flex items-center justify-center font-black text-praxis-blue">
              P
            </div>
            <span className="text-xl font-heading font-bold tracking-tighter">
              PRAXIS <span className="text-praxis-gold font-light">Consulting</span>
            </span>
          </div>
          <p className="text-white/50 max-w-sm mb-8">
            Consultoria executiva focada em transformar estratégia em resultados reais através de governança sólida e eficiência operacional.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Link2 size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Camera size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-6">Navegação</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="#home" className="hover:text-praxis-gold transition-colors">Início</a></li>
            <li><a href="#pillars" className="hover:text-praxis-gold transition-colors">Pilares</a></li>
            <li><a href="#services" className="hover:text-praxis-gold transition-colors">Serviços</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="#" className="hover:text-praxis-gold transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-praxis-gold transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-praxis-gold transition-colors">Compliance</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-white/30 text-xs">
        <p>&copy; {new Date().getFullYear()} PRAXIS Consulting. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
