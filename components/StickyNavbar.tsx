"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StickyNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollPhrase, setScrollPhrase] = useState("¡CONTÁCTANOS!");

  const [isTop, setIsTop] = useState(true);

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
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest < 50) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
    
    // Hide navbar on scroll down, show on scroll up (solo si ya scrolleó)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 pointer-events-auto"
    >
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
              className="px-8 py-4 sm:px-10 sm:py-5 flex items-center justify-center overflow-hidden"
            >
              <span className="font-sans font-black uppercase tracking-[0.2em] text-white text-sm sm:text-base whitespace-nowrap">
                ¡Contáctanos!
              </span>
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
