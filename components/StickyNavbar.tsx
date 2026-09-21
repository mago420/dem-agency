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
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO ESPACIO VACÍO PARA BALANCE */}
        <div className="w-[120px] hidden sm:block"></div>
        {/* CTA DINÁMICO CENTRAL */}
        <a
          href="#contacto"
          onClick={(e) => handleNavClick(e, '#contacto')}
          className="hidden md:flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#7B85FF]/50 rounded-full px-5 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(123,133,255,0.3)] transition-all cursor-pointer group"
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
            className="relative w-7 h-7 rounded-md bg-gradient-to-tr from-[#3A45D0] to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(58,69,208,0.8)] group-hover:scale-110 transition-transform"
          >
            <Image src="/images/dem-icon-d-white.png" alt="DEM Icon" width={14} height={14} className="object-contain drop-shadow-md" />
          </motion.div>

          {/* Frase dinámica con AnimatePresence para suavizar el cambio */}
          <div className="relative overflow-hidden h-5 w-48 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={scrollPhrase}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="absolute text-[11px] font-sans font-black uppercase tracking-[0.2em] text-white whitespace-nowrap"
              >
                {scrollPhrase}
              </motion.span>
            </AnimatePresence>
          </div>
        </a>

        {/* CTA BUTTON DERECHO (VACÍO O MENÚ) */}
        <div className="flex items-center gap-3">
          <div className="w-[120px] hidden sm:block"></div>
        </div>
      </div>
    </motion.header>
  );
}
