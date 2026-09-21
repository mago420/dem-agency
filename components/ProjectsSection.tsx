"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedMontage from "./AnimatedMontage";

const feedItems = [
  { type: 'montage', src: '/deck/assets/case-coolbox-cup.jpg', label: 'Broadcast 2027', tag: '● LIVE', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/case-gameclub-19k.jpg', label: 'Movistar GameClub', tag: '19K Gamers', height: 'h-48 sm:h-64' },
  { type: 'image', src: '/deck/assets/creator-limaconcafeina.jpg', label: '@limaconcafeina', tag: 'TikTok', height: 'h-72 sm:h-96' },
  { type: 'image', src: '/deck/assets/coolbox-elite-cup-cosplay.jpg', label: 'Elite Cup Cosplay', tag: 'FANS', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/experience-girl-gamer.jpg', label: '360° Energy', tag: 'Vibes', height: 'h-56 sm:h-72' },
  { type: 'image', src: '/deck/assets/case-actii-kmc-1m.jpg', label: 'Hunts Plaza Vea', tag: 'Retail', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/case-coolbox-cup.jpg', label: 'Act II Desnecesítenme', tag: 'Social', height: 'h-72 sm:h-96' },
  { type: 'image', src: '/deck/assets/creator-ryan-marz.jpg', label: '@ryan.marz', tag: 'Humor Gen Z', height: 'h-56 sm:h-72' },
  { type: 'image', src: '/deck/assets/experience-sampling-crackis.jpg', label: 'Crackis', tag: 'BTL', height: 'h-48 sm:h-64' },
  { type: 'image', src: '/deck/assets/content-actii-bowl.jpg', label: 'Act II Bowl', tag: 'Social', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/experience-fans-ajinomen.jpg', label: 'Ajinomen', tag: 'Fans', height: 'h-56 sm:h-72' },
  { type: 'image', src: '/deck/assets/content-ama-cargador.jpg', label: 'Snack Pack Chocolate', tag: 'Social', height: 'h-72 sm:h-96' },
  { type: 'video', src: '/videos/dinamica-kmc.mp4', label: 'Dinámica KMC', tag: 'Activación', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/experience-floril-gamer.jpg', label: 'Floril Gamer', tag: 'Sampling', height: 'h-48 sm:h-64' },
  { type: 'image', src: '/deck/assets/creator-ivic1vis.jpg', label: '@ivic1vis', tag: 'Cultura Pop', height: 'h-56 sm:h-72' },
  { type: 'image', src: '/deck/assets/experience-arena-community.jpg', label: 'Comunidad', tag: 'Retail', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/content-ama-cargador.jpg', label: 'Snack Pack Pudding', tag: 'Producto', height: 'h-48 sm:h-64' },
  { type: 'image', src: '/deck/assets/content-hunts-bbq.jpg', label: 'Hunts BBQ', tag: 'Creativo', height: 'h-72 sm:h-96' },
  { type: 'image', src: '/deck/assets/content-pam-corazon.jpg', label: 'Pam Heart', tag: 'Brand', height: 'h-56 sm:h-72' },
  { type: 'video', src: '/videos/oster-activation.mp4', label: 'Oster Activation', tag: 'BTL', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/content-snackpack.jpg', label: 'Hunts BBQ Expert', tag: 'FIP', height: 'h-48 sm:h-64' },
  { type: 'image', src: '/deck/assets/falabella-gamer-zone.jpg', label: 'Gamer Zone', tag: 'Falabella', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/ucv-connect.jpg', label: 'UCV Connect', tag: 'Campus', height: 'h-72 sm:h-96' },
  { type: 'image', src: '/deck/assets/community-gamer-headset.jpg', label: 'Gamer Headset', tag: 'Gear', height: 'h-56 sm:h-72' },
  { type: 'image', src: '/deck/assets/ucv-connect.jpg', label: 'Arena 2024', tag: 'Flashback', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/case-coolbox-cup.jpg', label: 'Act II Gaming', tag: 'Esports', height: 'h-48 sm:h-64' },
  { type: 'image', src: '/deck/assets/experience-ajinomen-soup.jpg', label: 'In-Store', tag: 'Activación', height: 'h-64 sm:h-80' },
  { type: 'image', src: '/deck/assets/falabella-coffee-party.jpg', label: 'Coffee Party', tag: 'Retail', height: 'h-56 sm:h-72' },
];

export default function ProjectsSection() {


  return (
    <section
      id="casos"
      className="relative min-h-screen py-16 sm:py-20 bg-zinc-950 text-white overflow-hidden scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Resplandor ambiental */}
      <div
        className="absolute top-1/2 -left-40 w-[35rem] h-[35rem] bg-[#3A45D0]/15 blur-[170px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* TITULO Y SUBTITULO: AUDITORIA REAL ("MENOS ES MÁS") */}
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
              <span>06 // DEMOSTRACIÓN EN VIVO: CASOS AUDITADOS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95]">
              PERSONALIZA TUS
              <br />
              <span className="bg-gradient-to-r from-white via-blue-200 to-[#7B85FF] bg-clip-text text-transparent">
                CAMPAÑAS
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="font-sans text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
              Reportes de ejecución y alcances para definir siguientes pasos.
            </p>
          </div>
        </div>

        {/* FEED PINTEREST ESTILO GENZ */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6 pt-8">
          {feedItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.1 }}
              className={`break-inside-avoid relative group rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#7B85FF] shadow-lg hover:shadow-[0_0_30px_rgba(123,133,255,0.3)] transition-all duration-500 cursor-pointer ${item.height}`}
            >
              {item.type === 'montage' ? (
                <div className="absolute inset-0 z-0">
                  <AnimatedMontage className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                </div>
              ) : item.type === 'video' ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              
              {/* Overlay Oscuro */}
              {item.type !== 'montage' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              )}

              {/* Contenido / Badges GenZ */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-end">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md border ${item.type === 'video' ? 'bg-[#FF003B]/20 text-[#FF003B] border-[#FF003B]/50' : 'bg-white/10 text-white border-white/20'}`}>
                    {item.tag}
                  </span>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-lg sm:text-xl font-black text-white uppercase leading-tight drop-shadow-lg">
                    {item.label}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
