"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SteveJobsVillainSection() {
  return (
    <section
      id="el-conflicto"
      className="relative py-24 sm:py-32 bg-black text-white overflow-hidden select-none border-t border-white/10 scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Luz dramática cenital estilo keynote */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[45rem] h-[18rem] bg-[#3A45D0]/15 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* The Generational Bridge Headline */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#3A45D0]/15 border border-[#3A45D0]/30 text-[#7B85FF] text-xs font-mono tracking-widest uppercase font-bold"
          >
            <div className="relative w-3.5 h-3.5">
              <Image
                src="/images/dem-icon-d-white.png"
                alt="DEM"
                fill
                sizes="14px"
                className="object-contain"
              />
            </div>
            <span>02 // DOS GENERACIONES · UNA SOLA CULTURA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.92] text-white"
          >
            RESPETUOSOS EN CORPORATE.
            <br />
            <span className="text-zinc-500">VALIENTES</span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-[#7B85FF] bg-clip-text text-transparent">
              EN CULTURA & BUEN GUSTO.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            DEM nace de la unión de dos generaciones: <strong>Angel Chiri (50)</strong> y <strong>Joe Ccasani (35)</strong>. Cuando la experiencia corporativa y la rebeldía innovadora trabajan juntas, nace la verdadera cultura.
          </motion.p>
        </div>

        {/* 3 Pilares Concisos ("Menos es más") */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-zinc-950/70 border border-white/10 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl sm:text-4xl font-black text-white">
                50 Años
              </span>
              <span className="text-[10px] font-mono text-[#7B85FF] uppercase font-bold">
                ANGEL CHIRI
              </span>
            </div>
            <div className="font-display text-base font-bold uppercase text-white">
              Gobernanza & Rigor
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal">
              Sabemos comprometernos con directores, honrar contratos y blindar la reputación de marca con excelencia corporativa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-zinc-950/70 border border-white/10 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl sm:text-4xl font-black text-[#7B85FF]">
                35 Años
              </span>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                JOE CCASANI
              </span>
            </div>
            <div className="font-display text-base font-bold uppercase text-white">
              Pulso Joven & Gaming
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal">
              Conexión nativa con streamers, torneos y códigos virales que la Gen Z respeta, comparte y consume con pasión.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-2xl bg-zinc-950/70 border border-white/10 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl sm:text-4xl font-black text-white">
                100%
              </span>
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                LA FÓRMULA DEM
              </span>
            </div>
            <div className="font-display text-base font-bold uppercase text-white">
              Buen Gusto & Calidad
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal">
              Rebeldes para no conformarnos con publicidad aburrida. Valientes para exigir calidad a favor de nuestro público.
            </p>
          </motion.div>
        </div>

        {/* The Turning Point: Breve, Elegante y Claro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border border-white/15 text-center space-y-5 shadow-[0_0_50px_rgba(58,69,208,0.2)]"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7B85FF]">
            // EL PUENTE QUE OTROS NO SABEN CONSTRUIR
          </span>

          <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
            No hacemos ruido vacío.
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-[#7B85FF] bg-clip-text text-transparent">
              Creamos cultura con rigor comercial.
            </span>
          </h3>

          <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-light leading-relaxed">
            Contenido que entretiene, creadores con credibilidad y experiencias presenciales que generan valor tangible para tu marca.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href="#servicios"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-[#3A45D0] hover:text-white transition-all duration-300 shadow-xl group"
            >
              <span className="w-3.5 h-3.5 relative">
                <Image
                  src="/images/dem-icon-d.png"
                  alt="D"
                  fill
                  sizes="14px"
                  className="object-contain group-hover:invert transition-all"
                />
              </span>
              <span>Conoce el Ecosistema DEM ↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
