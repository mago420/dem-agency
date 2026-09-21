"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function StickyNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
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
        {/* TABS CENTRALES (PORTAL) */}
        <nav className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
          <motion.div
            animate={{ 
              y: [-2, 2, -2],
              rotateY: [-15, 15, -15],
              rotateX: [5, -5, 5]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#3A45D0] to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(58,69,208,0.6)]"
          >
            <Image src="/images/dem-icon-d-white.png" alt="DEM Icon" width={16} height={16} className="object-contain drop-shadow-md" />
          </motion.div>
          <Image src="/images/dem-logo-white.png" alt="DEM" width={70} height={20} className="object-contain opacity-90" />
        </nav>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-3">
          {/* Espacio reservado para un CTA futuro */}
        </div>
      </div>
    </motion.header>
  );
}
