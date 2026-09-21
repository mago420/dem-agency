"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const liveShots = [
  {
    title: "Falabella Coffee Party",
    year: "2025",
    tag: "SAMPLING & RETAIL",
    image: "/deck/assets/falabella-coffee-party.jpg",
    rotate: "-3deg",
  },
  {
    title: "Falabella Gamer Zone",
    year: "2025",
    tag: "ARENA PERMANENTE",
    image: "/deck/assets/falabella-gamer-zone.jpg",
    rotate: "2deg",
  },
  {
    title: "UCV Connect (Sede Ate)",
    year: "2025",
    tag: "CAMPUS GAMING",
    image: "/deck/assets/ucv-connect.jpg",
    rotate: "-2deg",
  },
  {
    title: "Comunidad & Torneos",
    year: "2025",
    tag: "LIVE EXPERIENCE",
    image: "/deck/assets/experience-arena-community.jpg",
    rotate: "3deg",
  },
];

export default function ContextSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const floatY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section
      ref={containerRef}
      id="oportunidad"
      className="relative py-24 sm:py-32 bg-zinc-950 text-white overflow-hidden scroll-mt-20 lg:scroll-mt-24 border-t border-white/5"
    >
      {/* Resplandor ambiental */}
      <div
        className="absolute top-1/3 -left-32 w-[35rem] h-[35rem] bg-[#3A45D0]/15 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* TITULO Y SUBTITULO: PUNCHY & DIRECTO ("MENOS ES MÁS") */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#7B85FF] uppercase font-bold">
              <div className="relative w-4 h-4">
                <Image
                  src="/images/dem-icon-d-white.png"
                  alt="DEM"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
              <span>05 // LA EVIDENCIA FÍSICA: EL IMPACTO PRESENCIAL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95]">
              EXPERIENCIAS.
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-[#7B85FF] bg-clip-text text-transparent">
                EN EL LUGAR DE LOS HECHOS.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="font-sans text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
              Del feed digital al mundo físico: activaciones en retail, degustaciones masivas y conexión directa cara a cara.
            </p>
          </div>
        </div>

        {/* COMPOSICIÓN VISUAL INMERSIVA CON FOTOS CALADAS Y SUPERPUESTAS (ZERO BENTO BOX) */}
        <div className="relative pt-6">
          {/* Tira Asimétrica de Fotos Flotantes con Rotaciones e Inclinaciones Humanas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
            {liveShots.map((shot, idx) => (
              <motion.div
                key={shot.title}
                style={{ y: idx % 2 === 0 ? floatY1 : floatY2 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900 aspect-[4/5] shadow-2xl hover:scale-105 hover:border-[#3A45D0] hover:shadow-[0_0_35px_rgba(58,69,208,0.4)] transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={shot.image}
                  alt={shot.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                {/* Badge Flotante Superior */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {shot.year} // {shot.tag}
                  </span>
                </div>

                {/* Titular Flotante Inferior */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white leading-tight">
                    {shot.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#7B85FF] block">
                    ACTIVACIÓN PRESENCIAL VERIFICADA
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AYUDA VISUAL DE VIDEO REAL: DINÁMICA DE ACTIVACIÓN EN VIVO */}
        <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-zinc-950 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 font-sans">
              <div className="flex items-center gap-2">
                <div className="relative w-3.5 h-3.5 shrink-0">
                  <Image
                    src="/images/dem-icon-d-white.png"
                    alt="DEM"
                    fill
                    sizes="14px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7B85FF] block">
                  EXPERIENCIA EN MOVIMIENTO // DEM LIVE
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
                Contacto Directo
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Mira cómo reacciona el público joven cuando llevamos una marca a arenas comerciales, festivales y puntos de venta.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200">
                  ⚡ Sampling en Vivo
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200">
                  🏆 Convocatorias Abiertas
                </span>
              </div>
            </div>

            {/* Reproductor de Video Nativo DEM */}
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster="/deck/assets/falabella-gamer-zone.jpg"
              >
                <source src="/videos/dinamica-kmc.mp4" type="video/mp4" />
                <source src="/videos/oster-activation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
