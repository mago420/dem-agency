"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import TrustGrid from "./TrustGrid";
import AnimatedMontage from "./AnimatedMontage";

const highlightEvents = [
  { id: 1, type: "montage", title: "Torneos, League Ops y Broadcast", tag: "LIVE", src: "/deck/assets/case-gameclub-19k.jpg", poster: "/deck/assets/case-gameclub-19k.jpg", aspect: "aspect-[3/4]" },
  { id: 2, type: "image", title: "Sampling BTL Retail", tag: "RETAIL", src: "/deck/assets/falabella-coffee-party.jpg", aspect: "aspect-[4/5]" },
  { id: 3, type: "image", title: "Hub de Comunidades", tag: "CREATORS", src: "/deck/assets/experience-arena-community.jpg", aspect: "aspect-[4/5]" },
  { id: 4, type: "image", title: "Producción de Eventos", tag: "ESPORTS", src: "/deck/assets/case-coolbox-cup.jpg", aspect: "aspect-[4/5]" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col select-none"
    >
      {/* FONDO OSCURO CON AURA CYBERPUNK (LIMPIO) */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {/* Mobile Background Image (Solo visible en pantallas chicas donde el feed lateral no está) */}
        <div className="absolute inset-0 block lg:hidden opacity-30 mix-blend-lighten">
          <img src="/deck/assets/experience-arena-community.jpg" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
        </div>

        {/* Glow principal púrpura/magenta */}
        <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[120vw] lg:w-[60vw] h-[120vw] lg:h-[60vw] bg-[#6B21A8]/40 lg:bg-[#6B21A8]/30 blur-[150px] rounded-full pointer-events-none mix-blend-screen z-0" />
        {/* Glow secundario cian */}
        <div className="absolute top-[30%] left-[50%] lg:left-[20%] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[90vw] lg:w-[50vw] h-[90vw] lg:h-[50vw] bg-[#06B6D4]/30 lg:bg-[#06B6D4]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />
      </div>

      {/* BLOQUE SUPERIOR: 2 COLUMNAS (TEXTO+FORM IZQUIERDA, FEED DERECHA) */}
      <div className="relative z-10 w-full flex-grow flex flex-col justify-start max-w-[1440px] mx-auto overflow-x-hidden lg:overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start h-full min-h-[90vh]">
          
          {/* COLUMNA IZQUIERDA: TEXTO Y CTA */}
          <div className="flex flex-col gap-2 lg:gap-4 text-center lg:text-left px-4 lg:pl-12 xl:pl-20 pt-16 lg:pt-20 pb-8 relative z-20">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="text-white font-display font-black tracking-tighter uppercase leading-none text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              CONECTAMOS
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.5 }}
              className="text-blue-300 italic font-serif text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              marcas con
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.6 }}
              className="relative inline-block w-fit mx-auto lg:mx-0"
            >
              <h1 className="font-display font-black tracking-tighter uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_15px_30px_rgba(200,50,255,0.4)] text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4rem] mt-2">
                CULTURA<br /> DIGITAL
              </h1>
              {/* Mando Gamer Flotante */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotateZ: [-10, 10, -10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute -right-12 lg:-right-20 top-1/2 -translate-y-1/2 text-5xl lg:text-[4.5rem] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-30 pointer-events-none"
              >
                🎮
              </motion.div>
            </motion.div>
            
            {/* FIRMA DEM */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center gap-3 lg:gap-4 mt-3 lg:mt-4 mx-auto lg:mx-0 w-fit"
            >
              <div className="w-6 lg:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#3A45D0]" />
              <p className="font-sans text-[9px] sm:text-[10px] lg:text-xs tracking-[0.4em] text-zinc-300 uppercase font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                DIGITAL ENTERTAINMENT MANAGEMENT
              </p>
              <div className="w-6 lg:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#3A45D0] lg:hidden" />
            </motion.div>

            <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-300 font-light mt-8 lg:mt-10 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              Creamos un calendario de campañas que refuerzan los objetivos para conectar con el segmento digital y convocarlos a experiencias de comunidad.
            </p>

            {/* CAJA DE CONTACTO INTEGRADA ABAJO */}
            <div className="mt-6 lg:mt-8 p-6 sm:p-8 rounded-[2rem] bg-zinc-950/80 border border-[#3A45D0]/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(58,69,208,0.25)] ring-1 ring-white/10 w-full max-w-xl mx-auto lg:mx-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3A45D0]/15 to-transparent pointer-events-none" />
              
              {/* Glow sutil dentro de la caja */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const nombre = formData.get("Nombre") as string;
                  const empresa = formData.get("Empresa") as string;
                  const mensaje = formData.get("Mensaje") as string;
                  
                  const subject = encodeURIComponent(`Contacto de ${nombre} (${empresa})`);
                  const body = encodeURIComponent(`Hola equipo DEM,\n\nMi nombre es ${nombre} de ${empresa}.\n\n${mensaje}`);
                  
                  window.location.href = `mailto:hola@dem.agency?subject=${subject}&body=${body}`;
                }} 
                className="relative z-10 flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    name="Nombre" 
                    placeholder="Tu Nombre" 
                    className="w-full bg-black/80 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-[#3A45D0] focus:ring-2 focus:ring-[#3A45D0]/50 transition-all text-sm font-medium" 
                    required 
                  />
                  <input 
                    type="text" 
                    id="empresa-input"
                    name="Empresa" 
                    placeholder="Tu Empresa" 
                    className="w-full bg-black/80 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-[#3A45D0] focus:ring-2 focus:ring-[#3A45D0]/50 transition-all text-sm font-medium" 
                    required 
                  />
                </div>
                <textarea 
                  name="Mensaje" 
                  placeholder="¿De qué trata tu proyecto?" 
                  rows={2}
                  className="w-full bg-black/80 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-[#3A45D0] focus:ring-2 focus:ring-[#3A45D0]/50 transition-all text-sm font-medium resize-none" 
                  required 
                />
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden flex items-center justify-center gap-3 px-6 py-4 mt-2 text-sm font-sans font-black uppercase tracking-widest text-white bg-black/60 border border-[#3A45D0]/60 hover:bg-[#3A45D0]/20 rounded-xl transition-all shadow-[0_0_20px_rgba(58,69,208,0.2)] hover:shadow-[0_0_30px_rgba(58,69,208,0.5)] hover:border-white/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Hablemos del 2027</span>
                  <span className="relative z-10 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">🚀</span>
                </button>
              </form>
              <p className="relative z-10 text-[9px] text-zinc-500 mt-4 font-mono text-center uppercase tracking-widest">
                Sincronizado con Read.ai, Calendar & Meet.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: PINTEREST WATERFALL FEED */}
          <div className="hidden lg:flex relative h-[120vh] -top-[10vh] w-full justify-center gap-4 px-8 overflow-hidden z-10" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}>
            
            {/* LOGO DEM FLOTANTE (HOLOGRÁFICO) SOBRE LA CASCADA */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center">
              {/* Glow trasero que ilumina la cascada detrás del logo */}
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-[#3A45D0] to-purple-600 blur-[80px] rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" 
              />
              <motion.div
                animate={{ y: [-15, 15, -15], rotateZ: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Logo principal con sombras masivas */}
                <div className="relative w-48 h-20 md:w-80 md:h-32 filter brightness-110 drop-shadow-[0_30px_40px_rgba(0,0,0,0.9)]">
                  <Image src="/images/dem-logo-white.png" alt="DEM Logo" fill className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                </div>
              </motion.div>
            </div>

            {/* Columna 1 del Feed (Hacia arriba) */}
            <motion.div 
              animate={{ y: [0, -1500] }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-4 w-1/2 min-w-[200px]"
            >
              {[1, 2].map((loopIndex) => (
                <React.Fragment key={`col1-${loopIndex}`}>
                  <video autoPlay loop muted playsInline preload="metadata" poster="/deck/assets/case-coolbox-cup.jpg" className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl">
                    <source src="/videos/coolbox-elite-cup.mp4" type="video/mp4" />
                  </video>
                  <img src="/deck/assets/experience-arena-community.jpg" className="w-full aspect-square object-cover rounded-2xl border border-white/10 shadow-2xl" />
                  <video autoPlay loop muted playsInline preload="metadata" poster="/deck/assets/experience-arena-community.jpg" className="w-full aspect-video object-cover rounded-2xl border border-white/10 shadow-2xl">
                    <source src="/videos/dinamica-kmc.mp4" type="video/mp4" />
                  </video>
                  <img src="/deck/assets/falabella-coffee-party.jpg" className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl" />
                </React.Fragment>
              ))}
            </motion.div>

            {/* Columna 2 del Feed (Hacia abajo) */}
            <motion.div 
              animate={{ y: [-1500, 0] }} 
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-4 w-1/2 min-w-[200px] pt-32"
            >
              {[1, 2].map((loopIndex) => (
                <React.Fragment key={`col2-${loopIndex}`}>
                  <img src="/deck/assets/case-gameclub-19k.jpg" className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/10 shadow-2xl" />
                  <video autoPlay loop muted playsInline preload="metadata" poster="/deck/assets/falabella-coffee-party.jpg" className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl">
                    <source src="/videos/oster-activation.mp4" type="video/mp4" />
                  </video>
                  <img src="/deck/assets/ucv-connect.jpg" className="w-full aspect-square object-cover rounded-2xl border border-white/10 shadow-2xl" />
                  <img src="/deck/assets/case-coolbox-cup.jpg" className="w-full aspect-video object-cover rounded-2xl border border-white/10 shadow-2xl" />
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 04. WHO TRUSTS US (Movido aquí, encima de Highlights) */}
      <div className="relative z-20 w-full mt-4 lg:mt-8">
        <TrustGrid />
      </div>

      {/* CARRUSEL INFERIOR: ESCENA DE HIGHLIGHTS */}
      <div className="w-full relative z-20 mt-4 pb-12 lg:pb-16 flex flex-col">
        <div className="flex items-center gap-3 mb-6 px-4 sm:px-8 max-w-screen-2xl mx-auto w-full">
          <div className="w-8 h-1 bg-[#7B85FF]" />
          <span className="text-xs lg:text-sm font-mono font-bold tracking-widest uppercase text-[#7B85FF]">
            Servicios DEM
          </span>
        </div>

        {/* Horizontal Carousel */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {highlightEvents.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative w-[70vw] sm:w-[45vw] md:w-[35vw] lg:w-[22vw] shrink-0 snap-center rounded-3xl overflow-hidden border border-white/10 group cursor-pointer ${item.aspect} shadow-2xl hover:border-[#7B85FF]/50 hover:shadow-[0_0_40px_rgba(123,133,255,0.3)] transition-all`}
            >
              {item.type === "montage" ? (
                <AnimatedMontage className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              ) : item.type === "video" ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              ) : (
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white mb-2 border border-white/10">
                  {item.tag}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase truncate drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
          {/* Spacer for right edge in carousel */}
          <div className="w-4 sm:w-8 shrink-0" />
        </div>
      </div>
    </section>
  );
}
