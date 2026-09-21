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

  const phrases = [
    "¡Contáctanos!",
    "Let's goooo",
    "¿Un café?",
    "¿Pc o laptop?",
    "¡Acá estamos!",
    "¿Agendamos?"
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Cambiar frase dinámicamente cada 600px de scroll
    const phraseIndex = Math.floor(latest / 600) % phrases.length;
    if (phrases[phraseIndex] !== scrollPhrase) {
      setScrollPhrase(phrases[phraseIndex]);
    }
    
    // Background blur toggling
    if (latest > 50) setHasScrolled(true);
    else setHasScrolled(false);
    
    // Hide navbar on scroll down, show on scroll up
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
        className="flex items-center gap-4 bg-black/90 hover:bg-[#1A1E40] border border-white/10 hover:border-[#3A45D0]/80 rounded-full pl-4 pr-6 py-3 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(58,69,208,0.6)] transition-all cursor-pointer group"
      >
        {/* Logo animado súper cool con Ripple Effect */}
        <div className="relative flex items-center justify-center">
          {/* Pulsos traseros */}
          <div className="absolute inset-0 bg-[#3A45D0] rounded-full animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 bg-purple-500 rounded-full animate-pulse opacity-20 blur-md group-hover:opacity-60" />
          
          <motion.div
            animate={{ 
              rotateY: [0, 180, 360],
              y: [-2, 2, -2]
            }}
            transition={{ 
              rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#3A45D0] via-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(58,69,208,0.8)] border border-white/20 group-hover:border-white/50 transition-colors shrink-0"
          >
            <Image src="/images/dem-icon-d-white.png" alt="DEM Icon" width={18} height={18} className="object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </div>

        {/* Frase dinámica con AnimatePresence para suavizar el cambio */}
        <div className="relative overflow-hidden h-5 w-[11rem] flex items-center justify-start">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={scrollPhrase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="absolute text-xs font-sans font-black uppercase tracking-widest text-white whitespace-nowrap"
            >
              {scrollPhrase}
            </motion.span>
          </AnimatePresence>
        </div>
      </a>
    </motion.div>
  );
}
