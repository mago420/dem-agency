"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whyDemPoints = [
  {
    title: "Cultura Nativa",
    desc: "Hablamos el idioma de la GenZ sin forzarlo. Entendemos los códigos, el humor y los formatos que realmente capturan la atención orgánica.",
    icon: "👾"
  },
  {
    title: "Ejecución Ágil",
    desc: "Menos burocracia, más impacto. Producimos, activamos y medimos a la velocidad que exige el entorno digital moderno.",
    icon: "⚡"
  },
  {
    title: "Cero Improvisación",
    desc: "Detrás de cada pieza viral hay estrategia, data y rigor corporativo. Cuidamos el brand safety de marcas transnacionales.",
    icon: "🛡️"
  }
];

export default function PhilosophySection() {
  return (
    <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#7B85FF] uppercase font-bold">
              <div className="relative w-4 h-4">
                <Image src="/images/dem-icon-d-white.png" alt="DEM" fill sizes="16px" className="object-contain" />
              </div>
              <span>04 // ACERCA DE DEM</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
              NO SOLO SEGUIMOS <br /> LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">CULTURA</span>. <br /> LA CREAMOS.
            </h2>
            
            <p className="text-zinc-400 font-sans text-lg leading-relaxed">
              Somos una agencia híbrida (Digital + Experiencial) que tiende el puente definitivo entre las grandes marcas corporativas y las audiencias jóvenes que hoy dictan las reglas del consumo.
            </p>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {whyDemPoints.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-[#7B85FF]/50 transition-colors ${idx === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="font-display font-black text-xl uppercase mb-2 text-white">{point.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
