"use client";



const visualCreations = [
  {
    title: "PAM Aceite",
    theme: "Día del Corazón",
    image: "/deck/assets/content-pam-corazon.jpg",
    rotate: "-3deg",
  },
  {
    title: "AMA Organic",
    theme: "Mi Cargador Natural",
    image: "/deck/assets/content-ama-cargador.jpg",
    rotate: "2deg",
  },
  {
    title: "Hunt's BBQ",
    theme: "FIP Parrillas 2026",
    image: "/deck/assets/content-hunts-bbq.jpg",
    rotate: "-2deg",
  },
  {
    title: "Snack Pack",
    theme: "Día del Chocolate",
    image: "/deck/assets/content-snackpack.jpg",
    rotate: "4deg",
  },
  {
    title: "Act II Popcorn",
    theme: "¿Cómo prefieres tus Act II?",
    image: "/deck/assets/content-actii-bowl.jpg",
    rotate: "-1deg",
  },
];

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 bg-zinc-950 text-white overflow-hidden scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Resplandor corporativo */}
      <div
        className="absolute top-1/3 -right-32 w-[35rem] h-[35rem] bg-[#3A45D0]/15 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* TITULO Y SUBTITULO: LA REVELACIÓN (STEVE JOBS KEYNOTE TRINITY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/10 items-center">
          <div className="lg:col-span-7 space-y-4">
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
              <span>03 // LA PROPUESTA · TRES MOTORES EN UNO</span>
            </div>
            
            {/* Animación "Trippy" en el texto */}
            <motion.h2 
              animate={{ rotateX: [0, 5, -5, 0], rotateY: [0, -5, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.95] text-white transform-gpu [perspective:1000px]"
            >
              CONTENIDO.
              <br />
              CREADORES CON ALCANCE ORGÁNICO.
              <br />
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(200,50,255,0.4)]"
              >
                ARENAS EN VIVO.
              </motion.span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-center gap-12 w-full">
            {/* Clúster 3D Flotante Estilo GenZ (Trippy / Drip) */}
            <div className="w-full h-64 lg:h-80 relative [perspective:1200px] flex items-center justify-center">
              <motion.div
                animate={{ rotateY: [0, 25, -25, 0], rotateX: [15, -10, 15], y: [0, -20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-40 h-40 md:w-52 md:h-52 bg-gradient-to-tr from-purple-900 via-zinc-900 to-cyan-900 rounded-[2.5rem] shadow-[0_0_50px_rgba(200,50,255,0.4),_inset_0_2px_0_rgba(255,255,255,0.2),_inset_0_0_30px_rgba(0,255,255,0.2)] flex items-center justify-center text-7xl md:text-8xl border border-white/20 transform-gpu preserve-3d"
              >
                🪩
                
                {/* Elementos orbitando GenZ Culture */}
                <motion.div 
                  animate={{ z: [60, 120, 60], y: [0, -15, 0], rotate: [0, 20, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 text-6xl md:text-7xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] transform-gpu"
                >
                  👽
                </motion.div>
                
                <motion.div 
                  animate={{ z: [40, 90, 40], x: [0, -15, 0], rotate: [0, -15, 10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-12 -left-8 text-6xl md:text-7xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] transform-gpu"
                >
                  🧊
                </motion.div>

                <motion.div 
                  animate={{ z: [80, 50, 80], y: [0, 15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -right-14 text-5xl md:text-6xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] transform-gpu"
                >
                  🧿
                </motion.div>
              </motion.div>
            </div>

            <div className="relative w-full text-center lg:text-left flex justify-center lg:justify-end">
              <div className="relative max-w-sm">
                <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed relative z-10">
                  Un solo ecosistema integrado para conectar tu marca desde el feed digital hasta la experiencia física en retail.
                </p>
                
                {/* Animaciones flotantes de Redes / Stream */}
                <motion.div 
                  animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
                  className="absolute -top-12 -right-4 text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-0 select-none pointer-events-none"
                >
                  💬
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} 
                  className="absolute -bottom-8 right-16 text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] z-0 opacity-80 select-none pointer-events-none"
                >
                  🦇
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -10, 0], x: [0, -5, 0] }} 
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }} 
                  className="absolute top-8 -left-8 text-4xl drop-shadow-[0_0_15px_rgba(123,133,255,0.4)] z-0 select-none pointer-events-none"
                >
                  📱
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                  className="absolute -bottom-4 left-10 text-xs text-purple-400 font-black z-0 font-mono tracking-widest border border-purple-400/50 px-2 py-0.5 rounded-full bg-purple-400/10 select-none pointer-events-none"
                >
                  ● STREAM
                </motion.div>
              </div>
            </div>
          </div>
        </div>



        {/* GALERÍA VISUAL DE PIEZAS REALES: FOTOS CALADAS Y SUPERPUESTAS */}
        <div className="space-y-6 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7B85FF]">
                // PRODUCCIÓN REAL EN REDES
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                Creatividades Destacadas para el Pool KMC Brands
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xs">
              Piezas audiovisuales con gran alcance orgánico y fechas comerciales.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {visualCreations.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/5] hover:scale-105 hover:border-[#7B85FF]/50 hover:shadow-[0_0_30px_rgba(123,133,255,0.3)] transition-all duration-300 cursor-pointer shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <div className="font-display text-xs sm:text-sm font-bold text-white uppercase truncate">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-[#7B85FF] font-mono truncate">
                    {item.theme}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
