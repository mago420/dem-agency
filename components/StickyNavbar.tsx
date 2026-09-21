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
    "¡CONTÁCTANOS!",
    "¿QUÉ ESPERAS?",
    "HAGAMOS HISTORIA",
    "LA BRÚJULA SE INVENTÓ",
    "ANTES QUE EL RELOJ 😉",
    "¡HAZ CLIC AQUÍ!"
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <a
        href="#contacto"
        onClick={(e) => handleNavClick(e, '#contacto')}
        className="flex items-center gap-3 bg-black/80 hover:bg-[#3A45D0]/20 border border-white/10 hover:border-[#3A45D0]/50 rounded-full pl-3 pr-6 py-2.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(58,69,208,0.5)] transition-all cursor-pointer group"
      >
        {/* Logo animado en 3D */}
        <motion.div
          animate={{ 
            y: [-2, 2, -2],
            rotateY: [-20, 20, -20],
            rotateX: [10, -10, 10]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#3A45D0] to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(58,69,208,0.8)] group-hover:scale-110 transition-transform shrink-0"
        >
          <Image src="/images/dem-icon-d-white.png" alt="DEM Icon" width={14} height={14} className="object-contain drop-shadow-md" />
        </motion.div>

        {/* Frase dinámica con AnimatePresence para suavizar el cambio */}
        <div className="relative overflow-hidden h-5 w-[14rem] flex items-center justify-start">
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
