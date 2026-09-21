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
        {/* LOGO */}
        <Link href="/" className="relative z-10 flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8 rounded bg-[#3A45D0] flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(58,69,208,0.5)] group-hover:shadow-[0_0_25px_rgba(58,69,208,0.8)] transition-all">
            <Image src="/images/dem-icon-d-white.png" alt="D" width={16} height={16} className="object-contain" />
          </div>
          <Image src="/images/dem-logo-white.png" alt="DEM" width={80} height={24} className="object-contain opacity-90 group-hover:opacity-100 transition-opacity hidden sm:block" />
        </Link>

        {/* TABS CENTRALES (PORTAL) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          <Link href="/" className="px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all">
            Agency
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-3">
          {/* Espacio reservado para un CTA futuro */}
        </div>
      </div>
    </motion.header>
  );
}
