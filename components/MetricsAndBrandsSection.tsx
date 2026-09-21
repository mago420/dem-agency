"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const keyMetrics = [
  { value: "3.4x", label: "Mayor Retención", desc: "Nuestras producciones orgánicas retienen a la GenZ frente a los 3s promedio del mercado." },
  { value: "19K+", label: "Gamers Presenciales", desc: "Movilizados en un solo fin de semana de activación física." },
  { value: "+1M", label: "Views Orgánicas", desc: "Alcance masivo por campaña usando códigos nativos de TikTok e Instagram." },
  { value: "3.4K", label: "Espectadores Concurrentes", desc: "Picos de audiencia en transmisiones en vivo y torneos." }
];

const brands = [
  "ASUS ROG", "Intel", "HP Omen", "Samsung", "Acer Predator", 
  "Movistar", "Claro", "Entel", "Bitel",
  "Pilsen Callao", "Monster Energy", "Red Bull", "Coca-Cola",
  "KMC", "PAM", "Hunt's", "Act II"
];

export default function MetricsAndBrandsSection() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* METRICAS CLAVE */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#7B85FF] uppercase font-bold mb-8">
            <div className="relative w-4 h-4">
              <Image src="/images/dem-icon-d-white.png" alt="DEM" fill sizes="16px" className="object-contain" />
            </div>
            <span>03 // DEM EN NÚMEROS</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-10">Casos Reales</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 text-center hover:bg-zinc-900 transition-colors"
              >
                <div className="font-display text-4xl sm:text-5xl font-black text-[#7B85FF] mb-2">{metric.value}</div>
                <div className="font-bold uppercase text-white mb-2">{metric.label}</div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MARCAS - TICKER INFINITO */}
        <div className="pt-10 border-t border-white/10">
          <p className="text-center text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Marcas que confían en nosotros</p>
          <div className="w-full overflow-hidden flex whitespace-nowrap mask-edges">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-12 sm:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            >
              {[...brands, ...brands].map((brand, idx) => (
                <div key={idx} className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white/80">
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
