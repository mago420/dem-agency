"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

interface Chapter {
  id: string;
  number: string;
  name: string;
}

const chapters: Chapter[] = [
  { id: "inicio", number: "01", name: "Inicio" },
  { id: "servicios", number: "02", name: "Propuesta DEM" },
  { id: "marcas", number: "03", name: "Partners" },
  { id: "casos", number: "04", name: "Casos Destacados" },
  { id: "contacto", number: "05", name: "Contacto" },
];

export default function ScrollProgressTracker() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeChapter, setActiveChapter] = useState<string>("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const chapter of chapters) {
        const element = document.getElementById(chapter.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveChapter(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Barra de progreso superior Neón Cyberpunk */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#3A45D0] via-[#7B85FF] to-[#8B1E9F] origin-left z-[60] shadow-[0_0_15px_#3A45D0]"
      />

      {/* 2. HUD Lateral de Navegación por Capítulos (Desktop) con Icono Oficial DEM */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end space-y-2.5 pointer-events-auto">
        {/* Icono Oficial DEM como ancla superior del HUD */}
        <button
          onClick={() => scrollTo("inicio")}
          className="relative w-6 h-6 mb-2 cursor-pointer transition-transform hover:scale-110 focus:outline-none"
          title="DEM Agency"
        >
          <Image
            src="/images/dem-icon-d-white.png"
            alt="DEM"
            fill
            sizes="24px"
            className="object-contain"
          />
        </button>

        {chapters.map((chapter) => {
          const isActive = activeChapter === chapter.id;

          return (
            <button
              key={chapter.id}
              onClick={() => scrollTo(chapter.id)}
              className="group flex items-center gap-3 cursor-pointer text-right transition-all duration-300 focus:outline-none"
              aria-label={`Ir a sección ${chapter.name}`}
            >
              <span
                className={`text-[10px] font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-[#7B85FF] font-bold translate-x-0 opacity-100"
                    : "text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-zinc-300 -translate-x-1"
                }`}
              >
                {chapter.name}
              </span>

              <div className="relative flex items-center justify-center">
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-2.5 bg-[#3A45D0] shadow-[0_0_12px_#3A45D0]"
                      : "w-1.5 h-1.5 bg-zinc-700 group-hover:bg-zinc-400 group-hover:scale-125"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
