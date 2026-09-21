"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedMontage from "./AnimatedMontage";

const showreelClips = [
  {
    id: "clip-torneo",
    type: "montage",
    title: "Torneo Arena en Vivo",
    category: "ESPORTS & BROADCAST",
    src: "",
    poster: "/deck/assets/case-coolbox-cup.jpg",
  },
  {
    id: "clip-kmc",
    title: "Sampling Masivo BTL",
    category: "ACTIVACIÓN EN FESTIVAL",
    src: "/videos/dinamica-kmc.mp4",
    poster: "/deck/assets/falabella-coffee-party.jpg",
  },
  {
    id: "clip-retail",
    title: "Experiencia Retail",
    category: "IN-STORE DEM",
    src: "/videos/oster-activation.mp4",
    poster: "/deck/assets/falabella-gamer-zone.jpg",
  },
];

const stats = [
  { value: "+19K", label: "Gamers en Arenas" },
  { value: "3,400", label: "Asistentes Torneo" },
  { value: "+1M", label: "Impresiones Digitales" },
  { value: "27", label: "Marcas Oficiales" },
];

export default function ShowreelSection() {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentClip = showreelClips[activeClipIndex];

  const handleClipChange = (index: number) => {
    setActiveClipIndex(index);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      id="el-conflicto"
      className="relative py-20 sm:py-28 bg-black text-white overflow-hidden select-none border-t border-white/10 scroll-mt-20"
    >
      {/* Resplandor Neón Central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[25rem] bg-[#3A45D0]/20 blur-[180px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Titular Minimalista */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-xs font-sans tracking-wider text-[#7B85FF] uppercase font-semibold">
              <div className="relative w-4 h-4">
                <Image
                  src="/images/dem-icon-d-white.png"
                  alt="DEM"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
              <span>Showreel de Producciones</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
              EN ESCENA.
            </h2>
          </div>

          {/* Selector de Clips Rápido */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {showreelClips.map((clip, idx) => {
              const isActive = activeClipIndex === idx;
              return (
                <button
                  key={clip.id}
                  onClick={() => handleClipChange(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#3A45D0] text-white shadow-[0_0_20px_#3A45D0] font-semibold"
                      : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {clip.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reproductor de Video Showreel de Gran Escala */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video max-h-[70vh] w-full rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(58,69,208,0.25)] bg-zinc-950 mx-auto group"
        >
          {currentClip.type === 'montage' ? (
            <AnimatedMontage className="w-full h-full object-cover" />
          ) : (
            <video
              ref={videoRef}
              key={currentClip.src}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              poster={currentClip.poster}
            >
              <source src={currentClip.src} type="video/mp4" />
            </video>
          )}

          {/* Badge Flotante Superior */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium uppercase bg-black/75 backdrop-blur-md text-white border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{currentClip.category}</span>
            </span>
          </div>
        </motion.div>

        {/* HUD de 4 Métricas Clave */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {stats.map((st, idx) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md text-center md:text-left hover:border-[#3A45D0]/60 transition-colors"
            >
              <div className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                {st.value}
              </div>
              <div className="text-xs font-sans text-zinc-400 uppercase tracking-wider mt-1 font-medium">
                {st.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
