"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EsportsMilestone() {
  return (
    <section
      id="highlights"
      className="relative min-h-[90vh] flex flex-col justify-center py-24 sm:py-32 bg-black border-t border-white/10 overflow-hidden select-none scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Fondo cinematográfico con arena de The International */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/esports-ti-stage.jpg"
          alt="The International Valve World Championship"
          fill
          sizes="100vw"
          className="object-cover opacity-25 brightness-90 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Steve Jobs "One More Thing..." Hook */}
        <div className="space-y-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#7B85FF] uppercase font-bold"
          >
            <div className="relative w-5 h-5">
              <Image
                src="/images/dem-icon-d-white.png"
                alt="DEM Icon"
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
            <span>08 // &ldquo;AND THERE IS ONE MORE THING...&rdquo;</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl sm:text-4xl text-zinc-400 font-extrabold tracking-tight uppercase"
          >
            Haciendo Historia en los Esports Mundiales
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Titular y Revelación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.98] uppercase">
              GESTIÓN INTEGRAL & CLASIFICACIÓN A
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-[#7B85FF] bg-clip-text text-transparent">
                THE INTERNATIONAL (VALVE)
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Estrategia comercial y patrocinios de escala global que llevaron a la primera delegación peruana al mundial de Dota 2 en KeyArena, Seattle.
            </p>

            {/* Micro-datos editoriales de apoyo */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm font-sans">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">
                  DISCIPLINA
                </span>
                <span className="font-bold text-white text-sm sm:text-base">
                  Dota 2 World Cup
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">
                  ROL DE AGENCIA
                </span>
                <span className="font-bold text-white text-sm sm:text-base">
                  Estrategia & Patrocinios
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">
                  ALCANCE
                </span>
                <span className="font-bold text-[#7B85FF] text-sm sm:text-base">
                  Top Mundial Valve
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-[#3A45D0] hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer font-sans"
              >
                Llevar mi Marca al Siguiente Nivel →
              </Link>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjeta Visual de Telemetría Global */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative p-8 rounded-3xl bg-zinc-950/80 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#7B85FF] uppercase font-bold">
                TI_GLOBAL_STAGE // SEATTLE
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-3 font-sans">
              <div className="text-3xl font-display font-black text-white">
                HITO GLOBAL.
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Gestión comercial y patrocinios de escala internacional que colocaron a la primera delegación peruana en el evento cumbre de Valve en Seattle.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-xl bg-[#3A45D0] flex items-center justify-center p-2 shrink-0">
                <Image
                  src="/images/dem-icon-d-white.png"
                  alt="DEM"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <div className="text-xs font-mono text-zinc-300">
                <span className="text-white font-bold block">DEM AGENCY // ESPORTS PIONEER</span>
                Validado en KeyArena, Seattle USA.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
