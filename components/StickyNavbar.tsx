"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StickyNavbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollPhrase, setScrollPhrase] = useState("¡CONTÁCTANOS!");

  const [isTop, setIsTop] = useState(true);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const marqueeContent = (
    <>
      <span className="font-sans uppercase text-white tracking-widest font-bold">¿Agendamos?</span>
      <span className="font-mono text-[#8492f5]">(≧∇≦)</span>
      <span className="font-sans uppercase text-white tracking-widest font-bold">¿Agendamos?</span>
      <span className="font-mono text-[#8492f5]">(*^◯^*)</span>
      <span className="font-sans uppercase text-white tracking-widest font-bold">¿Agendamos?</span>
      <span className="font-mono text-[#8492f5]">(((o(*°▽°*)o)))</span>
      <span className="font-sans uppercase text-white tracking-widest font-bold">¿Agendamos?</span>
      <span className="font-mono text-[#8492f5]">(^ω^)</span>
      <span className="font-sans uppercase text-white tracking-widest font-bold">¿Agendamos?</span>
      <span className="font-mono text-[#8492f5]">(o^^o)</span>
    </>
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 50) {
      setIsTop(true);
      if (isFormOpen) setIsFormOpen(false); // Cierra modal si vuelve arriba
    } else {
      setIsTop(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (isTop) {
      // Comportamiento original si está arriba
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const empresaInput = document.getElementById('empresa-input');
          if (empresaInput) empresaInput.focus();
        }, 800);
      }
    } else {
      // Abre/Cierra el popover si está en estado scrolleado
      setIsFormOpen(!isFormOpen);
    }
  };

  const handleMailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("Nombre") as string;
    const empresa = formData.get("Empresa") as string;
    const mensaje = formData.get("Mensaje") as string;
    
    const subject = encodeURIComponent(`Contacto de ${nombre} (${empresa})`);
    const body = encodeURIComponent(`Hola equipo DEM,\n\nMi nombre es ${nombre} de ${empresa}.\n\n${mensaje}`);
    
    window.location.href = `mailto:hola@dem.agency?subject=${subject}&body=${body}`;
    setIsFormOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 pointer-events-auto flex flex-col items-end"
    >
      {/* Popover Formulario */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="mb-4 p-6 rounded-[2rem] bg-zinc-950/95 border border-[#3A45D0]/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(58,69,208,0.3)] ring-1 ring-white/10 w-[calc(100vw-3rem)] sm:w-[400px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />
            
            <h3 className="font-display text-xl font-bold text-white mb-1">¡Iniciemos la partida! 🎮</h3>
            <p className="text-xs text-zinc-400 mb-4">Mándanos un mensaje y agendemos.</p>
            
            <form onSubmit={handleMailSubmit} className="flex flex-col gap-3 relative z-10">
              <input 
                type="text" 
                name="Nombre" 
                placeholder="Tu Nombre" 
                className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#3A45D0] focus:ring-1 focus:ring-[#3A45D0]/50 transition-all text-sm font-medium" 
                required 
              />
              <input 
                type="text" 
                name="Empresa" 
                placeholder="Tu Empresa" 
                className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#3A45D0] focus:ring-1 focus:ring-[#3A45D0]/50 transition-all text-sm font-medium" 
                required 
              />
              <textarea 
                name="Mensaje" 
                placeholder="Escribe tu mensaje aquí..." 
                rows={3}
                className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#3A45D0] focus:ring-1 focus:ring-[#3A45D0]/50 transition-all text-sm font-medium resize-none" 
                required 
              />
              <button
                type="submit"
                className="group w-full relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 mt-1 text-xs font-sans font-black uppercase tracking-widest text-white bg-black/60 border border-[#3A45D0]/60 hover:bg-[#3A45D0]/20 rounded-xl transition-all shadow-[0_0_20px_rgba(58,69,208,0.2)] hover:border-white/50"
              >
                <span>Enviar Mensaje</span>
                <span>🚀</span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="#contacto"
        onClick={(e) => handleNavClick(e, '#contacto')}
        className="flex items-center bg-black/90 hover:bg-[#1A1E40] border border-white/10 hover:border-[#3A45D0]/80 rounded-full backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(58,69,208,0.6)] transition-all cursor-pointer group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isTop ? (
            <motion.div 
              key="top-state"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="px-8 py-4 sm:px-10 sm:py-5 flex items-center justify-center overflow-hidden relative"
            >
              {/* Explosión y Aura vibrante de fondo */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-[#3A45D0] to-cyan-500 opacity-20 blur-md animate-pulse" style={{ animationDuration: '2s' }} />
              
              {/* Texto palpitante y super brillante */}
              <motion.span 
                animate={{ 
                  scale: [1, 1.05, 1], 
                  textShadow: ["0px 0px 8px rgba(255,255,255,0.3)", "0px 0px 15px rgba(255,255,255,0.8)", "0px 0px 8px rgba(255,255,255,0.3)"] 
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative font-sans font-black uppercase tracking-[0.2em] text-white text-sm sm:text-base whitespace-nowrap z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              >
                ¡Contáctanos!
              </motion.span>
            </motion.div>
          ) : (
            <motion.div 
              key="scrolled-state"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center gap-3 pl-2 pr-6 py-2 overflow-hidden"
            >
              {/* Logo animado con Glow y Wobble suave (Sin 3D que lo oculta) */}
              <div className="relative flex items-center justify-center shrink-0">
                <div className="absolute inset-0 bg-[#3A45D0] rounded-full animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '2s' }} />
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-pulse opacity-20 blur-md group-hover:opacity-60" />
                <motion.div
                  animate={{ rotateZ: [-10, 10, -10], y: [-2, 2, -2] }}
                  transition={{ rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" }, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#3A45D0] via-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(58,69,208,0.8)] border border-white/20 group-hover:border-white/50 transition-colors shrink-0"
                >
                  <Image src="/images/dem-icon-d-white.png" alt="DEM Icon" width={20} height={20} className="object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                </motion.div>
              </div>

              {/* Letrero de Noticias (Marquee) Continuo */}
              <div 
                className="relative overflow-hidden h-5 w-[140px] sm:w-[160px] flex items-center"
                style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
              >
                <motion.div
                  animate={{ x: [0, -1500] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-4 text-xs sm:text-sm whitespace-nowrap px-4"
                >
                  {marqueeContent}
                  {marqueeContent}
                  {marqueeContent}
                  {marqueeContent}
                  {marqueeContent}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </motion.div>
  );
}
